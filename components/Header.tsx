import Link from 'next/link'
import { SearchIcon, BellIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { Profile } from '../typings'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useAuth from '../hooks/useAuth'

interface Props {
  profile?: Profile
}

function Header({ profile }: Props) {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState(router.pathname)
  const { logout } = useAuth()
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
    <header className={`${isScrolled && 'bg-black bg-opacity-70'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* <div className="absolute inset-0 bg-[url(/logo.png)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}
        <h1 className="font-bold">
          EBDELLI <span className="text-amber-600">HOME</span>
        </h1>
        <ul className="hidden space-x-4 md:flex">
          <li
            onClick={() => setActiveLink('homepage')}
            className={`headerLink ${activeLink === '/' && 'activeLink'}`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`headerLink ${
              activeLink === '/projects' && 'activeLink'
            }`}
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={`headerLink ${
              activeLink === '/gists' && 'activeLink'
            }`}
          >
            <Link href="/gists">Gists</Link>
          </li>
          <li
            className={`headerLink ${
              activeLink === '/calander' && 'activeLink'
            }`}
          >
            Calander
          </li>
          <li
            className={`headerLink ${activeLink === '/about' && 'activeLink'}`}
          >
            About
          </li>
          <li
            className={`headerLink ${activeLink === '/help' && 'activeLink'}`}
          >
            Help
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 cursor-pointer sm:inline" />
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <a className='ml-5' onClick={logout}>
          <Image
            src={profile?.avatar_url ?? '/avatar.jpg'}
            width={30}
            height={30}
            alt=""
            className="cursor-pointer rounded"
          />
        </a>
      </div>
    </header>
  )
}

export default Header
