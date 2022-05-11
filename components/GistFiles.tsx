import { FolderIcon } from '@heroicons/react/outline'
import { Gist } from '../typings'
import { Tooltip } from './Tooltip'

export interface BadgesProps {
  gist?: Gist
}

const GistFiles = ({ gist }: BadgesProps) => {
  return (
    <div>
      <ul className="mt-1 mb-1 w-full h-full overflow-y-visible text-xs text-amber-50 underline underline-offset-1">
        {gist?.files &&
          Object.keys(gist?.files || {}).map((key) => (
            <li key={key} className="mb-1 flex items-center">
              <FolderIcon className="mr-1 h-3 w-3 cursor-pointer" />
              <a
                href={gist?.files[key].raw_url}
                target="_blank"
                rel="noreferrer"
              >
                {key}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default GistFiles
