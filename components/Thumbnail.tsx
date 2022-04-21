import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Repository } from '../typings'
import Badges from './Badges/Badges'

interface Props {
  repository: Repository
}

function Thumbnail({ repository }: Props) {
  return (
    <div
      className={`relative min-w-[220px] 
    cursor-pointer overflow-y-hidden 
    transition duration-200 ease-out 
    md:h-36 md:min-w-[260px] md:max-w-[300px] md:hover:scale-105 md:hover:rotate-2`}
    >
      <div className="overflow-hidden space-y-2 p-5 h-full bg-slate-500 bg-opacity-10">
        <div className="flex w-full space-x-2">
          <img
            className="rounded object-cover relative overflow-hidden"
            src={repository.owner.avatar_url}
            alt="user avatar"
            width={50}
            height={50}
          />
          <p className="truncate text-ellipsis ... w-full text-amber-400 flex justify-between pr-3 font-bold font-mono text-sm">
            {repository.name}
          </p>
          <a href={repository.html_url} target="_blank" rel="noreferrer">
            <HiOutlineExternalLink color="white" min={15} size={15} />
          </a>
        </div>
        <p className="text-white-700 flex space-y-2 line-clamp-3 md:line-clamp-4 min-h-fit text-justify text-xs font-mono pr-2">
          <div>{repository?.description ?? 'NO DESCRIPTION'}</div>
          <Badges name={repository.name} />
        </p>
      </div>
    </div>
  )
}

export default Thumbnail
