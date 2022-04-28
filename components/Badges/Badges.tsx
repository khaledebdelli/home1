import useSWR from 'swr'
import { Topic } from '.'
import { Repository } from '../../typings'
import fetcher from '../../utils/fetcher'
import { Badge } from './Badge'

export interface BadgesProps {
  repository: Repository
}

const Badges = ({ repository }: BadgesProps) => {
  return (
    <div className="space-x-1 flex flex-wrap gap-1">
      {repository?.topics && repository.topics.map((topic: Topic) => <Badge key={topic} topic={topic} />)}
    </div>
  )
}

export default Badges
