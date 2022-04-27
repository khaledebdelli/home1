import useSWR from 'swr'
import { Topic } from '.'
import { Repository } from '../../typings'
import fetcher from '../../utils/fetcher'
import { Badge } from './Badge'

export interface BadgesProps {
  repository: Repository
}

const Badges = ({ repository }: BadgesProps) => {
  const { data, error } = useSWR(() => `/api/repo-topics/?name=${repository.name}`, fetcher)
  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className="space-x-1 flex flex-wrap gap-1">
      {data?.topics && data.topics.map((topic: Topic) => <Badge key={topic} topic={topic} />)}
    </div>
  )
}

export default Badges
