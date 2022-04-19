import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Repository } from '../typings'

interface Props {
  repository: Repository
}

function Thumbnail({ repository }: Props) {
  return (
    <div
      className={`relative min-w-[220px] cursor-pointer overflow-y-hidden transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    >
      <div className="overflow-x-hidden">
        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 flex space-x-3">
            <img
              className="rounded object-cover h-10 w-10"
              src={repository.owner.avatar_url}
              alt="user avatar"
            />
            <div className="text-amber-700 font-bold text-sm mb-4">
              <Link href={repository.html_url} passHref={true}>
                <a className="flex space-x-4" target="_blank" rel="noreferrer">
                  <p>{repository.name}</p>
                  <HiOutlineExternalLink color='white' min={15} size={15} />
                </a>
              </Link>
            </div>
          </div>
          <p className="text-white-700 text-xs p-2 truncate text-ellipsis ...">
            {repository.description && repository.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail
