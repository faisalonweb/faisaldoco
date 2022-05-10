import axios from "axios"

export const UserRegisterAPI = async (firstname:string,lastname:string,company:string, language:string[], role:string) => {
    return await axios({
          data: {
            first_name: firstname,
            last_name: lastname,
            comapny: company,
            language: language,
            role:role
          },
      method: 'POST',
      url: 'https://api.documatic.com/v1/auth/register',
    })
  }