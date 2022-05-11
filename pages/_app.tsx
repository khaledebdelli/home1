import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import { AuthProvider } from '../hooks/useAuth'
import '../styles/globals.css'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

function App({ Component, pageProps, router }: AppProps) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </AuthProvider>
    </RecoilRoot>
  )
}

export default App
