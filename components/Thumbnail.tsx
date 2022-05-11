import Image from 'next/image'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Gist, Repository } from '../typings'
import Badges from './Badges/Badges'
import GistFiles from './GistFiles'

interface Props {
  repository?: Repository
  gist?: Gist
  height?: number
}

function Thumbnail({ repository, gist, height = 44 }: Props) {
  return (
    <div
      className={`relative h-44 min-w-[260px] max-w-[300px]
    bg-slate-500 bg-opacity-10
    transition duration-200 ease-out md:hover:scale-105`}
    >
      <div className="h-full space-y-2 overflow-hidden p-5">
        <div className="flex w-full space-x-2">
          <Image
            className="relative overflow-hidden rounded object-cover"
            src={repository?.owner?.avatar_url ?? gist?.owner?.avatar_url ?? ''}
            alt="user avatar"
            width={50}
            height={50}
          />
          <p className="... flex w-full justify-between truncate text-ellipsis pr-3 font-mono text-sm font-bold text-amber-400">
            {repository?.name ||
              gist?.files[Object.keys(gist?.files || {})[0]].filename}
          </p>
          <a
            href={repository?.html_url ?? gist?.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineExternalLink color="white" min={15} size={15} />
          </a>
        </div>
        <p className="text-white-700 flex min-h-fit space-y-2 pr-2 text-justify font-mono text-xs line-clamp-3 md:line-clamp-4">
          {repository?.description ?? gist?.description ?? 'NO DESCRIPTION'}
        </p>
        {repository && <Badges repository={repository} />}
        {gist && <GistFiles gist={gist} />}
      </div>
    </div>
  )
}

export default Thumbnail
