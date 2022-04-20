import { profile } from 'console'
import Image from 'next/image'
import { FiTwitter } from 'react-icons/fi'
import Link from 'next/link'
import { Profile } from '../typings'

interface Props {
  profile: Profile
}

function Banner({ profile }: Props) {
  return (
    <div className="flex flex-col space-y-2 py-14 lg:py-40 md:space-y-4 lg:justify-end lg:pb-12">
      <Image
        src="/bg.jpg"
        layout="fill"
        objectFit="cover"
        className="-z-40 top-0 left-0 w-screen"
      />
      <div className="flex space-x-2 items-center">
        <FiTwitter size={50} />
        <a
          href={`https://twitter.com/${profile.twitter_username}`}
          target="_blank"
          rel="noreferrer"
          className='z-40'
        >
          <div className="cursor-pointer text-2xl font-bold md:text-4xl lg:text-5xl text-amber-600 hover:text-amber-800">
            @{profile.twitter_username}
          </div>
        </a>
      </div>
      <p className="font-black max-w-xs md:max-w-lg md:text-lg lg:max-w-2xl">
        {!!profile?.bio ? profile.bio : 'NO DESCRIPTION'}
      </p>
    </div>
  )
}

export default Banner
