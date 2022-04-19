const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN

const defaultOptions = {
  method: 'GET',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
}

export default defaultOptions