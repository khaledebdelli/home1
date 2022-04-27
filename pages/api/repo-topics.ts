// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import requests from '../../utils/requests'

type Data = {
  topics: string[]
}
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const defaultOptions = {
  method: 'GET',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query
  const { names } = await fetch(
    requests.fetchRepoTopics(<string>name),
    defaultOptions
  ).then((res) => res.json())
  res.status(200).json({ topics: names })
}
