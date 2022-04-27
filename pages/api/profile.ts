// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Profile } from '../../typings'
import requests from '../../utils/requests'

type Data = {
  profile: Profile
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
  const profile = await fetch(
    requests.fetchOwnUserProfile,
    defaultOptions
  ).then((res) => res.json())
  console.log(profile);
  
  res.status(200).json({ profile })
}
