import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth'
import { useRouter } from 'next/router'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { auth } from '../firebase'

interface IAuth {
  user: User | null
  signUp: (email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  error: string | null
  loading: boolean
}

const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  error: null,
  loading: false,
})

interface AuthProviderProps {
  children: JSX.Element
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [initialLoading, setInitialLoading] = useState(true)
  const [loading, setLoading] = useState(false)

  // Psersisting the user
  useEffect(
    () =>
      onAuthStateChanged(auth, (user: User | null) => {
        if (user) {
          // Logged in...
          setUser(user)
          setLoading(false)
        } else {
          // Not logged in...
          setUser(null)
          setLoading(true)
          // router.push('/login')
        }
        setInitialLoading(false)
      }),
    [router]
  )

  const signUp = useCallback(
    async (email: string, password: string) => {
      setLoading(true)
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential: { user: User }) => {
          setUser(userCredential.user)
          router.push('/')
          setLoading(false)
        })
        .catch((error: Error) => setError(error.message))
        .finally(() => setLoading(false))
    },
    [router]
  )

  const signIn = useCallback(
    async (email: string, password: string) => {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: UserCredential) => {
          setUser(userCredential.user)
          router.push('/')
          setLoading(false)
        })
        .catch((error: Error) => setError(error.message))
        .finally(() => setLoading(false))
    },
    [router]
  )

  const logout = async () => {
    setLoading(true)
    signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false))
  }

  const memoedValue = useMemo(
    () => ({ user, signUp, signIn, error, loading, logout }),
    [user, signUp, signIn, error, loading]
  )

  return (
    <AuthContext.Provider value={memoedValue}>
      <>{!initialLoading && children}</>
    </AuthContext.Provider>
  )
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context comopnent.
export default function useAuth() {
  return useContext(AuthContext)
}
