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
    <div className="flex flex-col space-y-2 py-40 md:space-y-4 lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen">
        <Image
          src="/bg3.avif"
          layout="fill"
          objectFit="cover"
          className="-z-40"
        />
      </div>
      <div className="z-50 flex space-x-2 items-center">
        <FiTwitter size={50} />
        <Link
          href={`https://twitter.com/${profile.twitter_username}`}
          passHref={true}
        >
          <a target="_blank" rel="noreferrer">
            <div className="cursor-pointer text-2xl font-bold md:text-4xl lg:text-5xl text-amber-600">
              @{profile.twitter_username}
            </div>
          </a>
        </Link>
      </div>
      <p className="max-w-xs md:max-w-lg md:text-lg lg:max-w-2xl">
        {profile.bio}
      </p>
    </div>
  )
}

export default Banner
