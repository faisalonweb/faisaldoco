import axios from "axios"


export const getUserInfoAPI = async () => {
    return await axios({
      headers: {
          authorization: `Bearer ${'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'}`
        },
      method: 'GET',
      url: 'https://api.github.com/user',
    })
  }