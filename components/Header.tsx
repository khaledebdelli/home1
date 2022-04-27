import Link from 'next/link'
import { SearchIcon, BellIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { Profile } from '../typings'

interface Props {
    profile?: Profile
}

function Header({ profile }: Props) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-[#141414] bg-opacity-70'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* <div className="absolute inset-0 bg-[url(/logo.png)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}
        <h1 className="font-bold">EBDELLI <span className="text-amber-600">HOME</span></h1>
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-amber-600 hover:text-amber-600/20">
            Home
          </li>
          <li className="headerLink">Projects</li>
          <li className="headerLink">Calander</li>
          <li className="headerLink">About</li>
          <li className="headerLink">Help</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline cursor-pointer" />
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <Link href="/profile">
          <img src={profile?.avatar_url} width={30} height={30} className="cursor-pointer rounded" />
        </Link>
      </div>
    </header>
  )
}

export default Header
