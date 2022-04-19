const BASE_URL = 'https://api.github.com'
const requests = {
  fetchOwnUserProfile: `${BASE_URL}/user`,
  fetchOwnUserRepos: `${BASE_URL}/user/repos`,
}

export default requests
