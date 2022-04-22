const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const defaultOptions = {
  method: 'GET',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
}

export default defaultOptions