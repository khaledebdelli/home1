const BASE_URL = 'https://api.github.com'
const OWNER = 'khaledebdelli'
const requests = {
  fetchOwnUserProfile: `${BASE_URL}/user`,
  fetchOwnUserRepos: `${BASE_URL}/user/repos`,
  fetchOwnUserPublicGists: `${BASE_URL}/gists/public`,
  fetchOwnUserStarredGists: `${BASE_URL}/gists/starred`,
  fetchRepoTopics: (name: string) => `${BASE_URL}/repos/${OWNER}/${name}/topics`,
}

export default requests
