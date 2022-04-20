import axios from "axios"

export const getUserRepoAPI = async () => {
let storedToken = localStorage.getItem('access_token');
    return await axios({
      headers: {
          authorization: `Bearer ${storedToken}`
        },
      method: 'GET',
      url: 'https://api.github.com/user/repos',
    })
  }