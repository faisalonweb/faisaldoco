import axios from "axios"

let storedToken = localStorage.getItem('access_token');
export const getUserInfoAPI = async () => {
    return await axios({
      headers: {
          authorization: `Bearer ${storedToken}`
        },
      method: 'GET',
      url: 'https://api.github.com/user',
    })
  }