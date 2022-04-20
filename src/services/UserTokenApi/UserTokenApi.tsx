import axios from "axios"

export const getUserTokenAPI = async () => {
    let storedUserCode = localStorage.getItem('code');
    return await axios({
          params: {
            client_id: `${process.env.REACT_APP_CLIENT_ID}`,
            client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
            code: storedUserCode
          },
      method: 'POST',
      url: 'https://github.com/login/oauth/access_token',
    })
  }