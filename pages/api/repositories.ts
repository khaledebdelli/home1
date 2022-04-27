// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Profile, Repository } from '../../typings'
import requests from '../../utils/requests'

type Data = {
  repositories: Repository
}
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const defaultOptions = {
  method: 'GET',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
}
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const repositories = await fetch(
    requests.fetchOwnUserRepos,
    defaultOptions
  ).then((res) => res.json())  
  res.status(200).json({ repositories })
}
