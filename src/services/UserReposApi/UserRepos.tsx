import axios from "axios"

let storedToken = localStorage.getItem('access_token');
export const getUserRepoAPI = async () => {
    return await axios({
      headers: {
          authorization: `Bearer ${storedToken}`
        },
      method: 'GET',
      url: 'https://api.github.com/user/repos',
    })
  }