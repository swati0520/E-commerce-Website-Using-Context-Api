import { Password } from '@mui/icons-material';
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {

  let nameRef = useRef();
  let emailRef = useRef()
  let passwordRef = useRef()

let navigate = useNavigate()

  let arr = JSON.parse (localStorage.getItem('EComAuth')) || [];
  console.log(arr);
  

  const handelSubmit = (e)=>{
  e.preventDefault()

  let obj = {
    name:nameRef.current.value,
    email:emailRef.current.value,
   password:passwordRef.current.value
  }
  console.log(obj);
  

  let existingUser = arr.find((ele)=>ele.email === obj.email)

  if(existingUser){
    toast.error('user already exists', {position:'top-center', theme:'dark'})
    console.log(arr);
    

  }else{

    arr.push(obj)
    toast.success('user registerd successfully',{position:'top-center', theme:'dark'});
    localStorage.setItem('EComAuth' , JSON.stringify(arr))
    console.log(arr);
    navigate('/login')
    
  }
  }


  return (
      <div>
    

<form className="max-w-sm mx-auto bg-slate-600 p-10 rounded-md  mt-36 ">
  <h1 className='text-white text-2xl my-3'>E_com_Register_Form</h1>

  <div className="mb-5">
    <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input ref={nameRef} type="Text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required />
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input ref={emailRef} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your password</label>
    <input ref={passwordRef} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>

  <button onClick={handelSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

  
  <p className='text-center my-3 text-white'>Already have any account ? <Link className='bg-blue-700' to = '/login'>Register</Link></p>
</form>


    </div>
  )
}

export default Signup
