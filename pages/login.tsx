import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
}

function Login() {
  const [login, setLogin] = useState(true)
  const { signIn, signUp } = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      await signIn(data.email, data.password)
    } else {
      await signUp(data.email, data.password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/cool-background.png"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt=""
      />
      <h1 className="absolute left-4 top-4 cursor-pointer object-contain font-bold md:left-10 md:top-6">
        EBDELLI <span className="text-amber-600">HOME</span>
      </h1>
      {/* <Image
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
        alt=""
      /> */}

      <form
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:my-14 md:mt-0 md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-semibold">
          Sign{' '}
          {login ? (
            <span className="text-amber-600">In</span>
          ) : (
            <span className="text-amber-600">Up</span>
          )}
        </h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className={`input ${
                errors.email && 'border-b-2 border-amber-500'
              }`}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-amber-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Password"
              className={`input ${
                errors.password && 'border-b-2 border-amber-500'
              }`}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-amber-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full rounded bg-amber-600 py-3 font-semibold"
          onClick={() => setLogin(true)}
          type="submit"
        >
          Sign  {login ? 'In' : 'Up'}
        </button>
        <div className="text-[gray]">
          {login ? 'New to Ebdelli Home ?' : 'Already have an account'} {' '}
          <button
            className="cursor-pointer text-white hover:underline"
            onClick={() => setLogin(false)}
            type="submit"
          >
            Sign {login ? 'Up' : 'In'} now
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
