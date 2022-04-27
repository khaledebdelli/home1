import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Login page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <Link href="/" passHref>
            <a className="text-blue-700">Login</a>
          </Link>
        </h1>
      </main>
    </div>
  )
}

export default Login
