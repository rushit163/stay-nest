import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginWithGoogleButton = () => {
  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    email : "",
    password : ""
  })
  const  handleFormSubmit = async ()=>{
    try{
      const response = await axios.post('http://localhost:5000/user/login', formData, {
        withCredentials: true
      });     
      navigate("/")
      console.log(response)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="flex items-center justify-center  w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        >

        </div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-xl text-gray-600 text-center">Login</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
              onChange={(e)=>setFormData({...formData, email : e.target.value})}
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              onChange={(e)=>setFormData({...formData, password : e.target.value})}
            />
          </div>
          <div className="mt-8">
            <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600" onClick={handleFormSubmit}>
              Login
            </button>
          </div>
          
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="#"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have any account yet?
              <span className="text-blue-700"> Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginWithGoogleButton;
