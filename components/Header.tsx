import Link from 'next/link'
import { FaHouseUser } from 'react-icons/fa'
import { SearchIcon, BellIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import Image from 'next/image'

function Header() {
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
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* <div className="absolute inset-0 bg-[url(/logo.png)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="my home logo"
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
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
        <Link href="/account">
          <FaHouseUser size={20} className="cursor-pointer" />
        </Link>
      </div>
    </header>
  )
}

export default Header
