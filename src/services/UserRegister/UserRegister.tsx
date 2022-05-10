import axios from "axios"

export const UserRegisterAPI = async (firstname:string,lastname:string,company:string) => {
    return await axios({
          params: {
            first_name: firstname,
            last_name: lastname,
            comapny: company
          },
      method: 'POST',
      url: 'https://api.documatic.com/v1/auth/register',
    })
  }