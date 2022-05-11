// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Gist } from '../../../typings'
import requests from '../../../utils/requests'

type Data = {
  publicGists: Gist[]
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
  const publicGists = await fetch(
    requests.fetchOwnUserPublicGists,
    defaultOptions
  ).then((res) => res.json())  
  res.status(200).json({ publicGists })
}
