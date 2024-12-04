import React, { useState } from 'react'
import UserContext from './UserContext'


const userState = (props) => {
  let userDetails = JSON.parse(localStorage.getItem('Ecomlogin'))
    const [user, setuser] = useState({
        login:userDetails ? userDetails.login : false,
         email: userDetails ? userDetails.email : ""
    });
    console.log(user);

    function loginUser(ans){
// console.log(ans);
localStorage.setItem('Ecomlogin',JSON.stringify({login:true,email:ans.email}))
setuser({login:true,email:ans.email})
    }

    function logout(){
      localStorage.removeItem('Ecomlogin')
      setuser({login:false, email:''})
    }


    
  return (
    <UserContext.Provider value={{user,setuser,loginUser,logout}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default userState
