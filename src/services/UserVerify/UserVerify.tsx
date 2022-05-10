import axios from "axios"

export const UserVerifyAPI = async () => {
let storedToken = localStorage.getItem('access-token');
    return await axios({
      headers: {
          authorization: `Bearer ${storedToken}`
        },
      method: 'GET',
      url: 'https://api.documatic.com/v1/auth',
    })
  }