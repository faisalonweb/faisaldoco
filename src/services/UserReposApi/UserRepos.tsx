import axios from "axios"


export const getUserRepoAPI = async () => {
    return await axios({
      headers: {
          authorization: `Bearer ${'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'}`
        },
      method: 'GET',
      url: 'https://api.github.com/user/repos',
    })
  }