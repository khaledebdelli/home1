import { DocumentData } from 'firebase/firestore'
import { Topic } from '.'
import { Repository } from '../../typings'
import { Badge } from './Badge'

export interface BadgesProps {
  repository?: Repository | DocumentData | null
}

const Badges = ({ repository }: BadgesProps) => {
  return (
    <div className="space-x-1 flex flex-wrap gap-1">
      {repository?.topics && repository.topics.map((topic: Topic) => <Badge key={topic} topic={topic} />)}
    </div>
  )
}

export default Badges
