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