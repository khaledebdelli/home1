import '../styles/globals.css'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  )
}

export default App