
/**
 * 
 * @param email 
 * @param password 
 */
export const LoginAPI = (email:string,password:string) => {
    return new Promise((resolve, reject) => {
         let storedEmail = localStorage.getItem('useremail');
         let storedPassword = localStorage.getItem('userpassword');
         if(email === storedEmail && password === storedPassword){
              resolve([email,password]);
          }
          else {
               reject('incorrect')
          }
     });
}

