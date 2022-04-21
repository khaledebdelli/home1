import { useEffect, useState } from 'react'
import { Topic } from '.'
import defaultOptions from '../../utils/defaultOptions'
import requests from '../../utils/requests'
import { Badge } from './Badge'

export interface BadgesProps {
  name: string
}

const Badges = ({ name }: BadgesProps) => {
  const [topics, setTopics] = useState(['nodejs'])

  useEffect(() => {
    const fetchData = async () => {
      const { names } = await fetch(
        requests.fetchRepoTopics(name),
        defaultOptions
      ).then((res) => res.json())
      setTopics(names)
      console.log(names)
    }
    fetchData()
  }, [])

  return (
    <div className="space-x-1 w-full flex">
      {topics && topics.map((topic) => <Badge topic={topic} />)}
    </div>
  )
}

export default Badges
