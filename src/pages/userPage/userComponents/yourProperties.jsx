
import axios from 'axios'
import React, { useEffect } from 'react'

export const YourProperties = () => {
  useEffect(()=>{
    fetchData();
    async function fetchData() {
      console.log("fetchuin")
      const response = await axios.get('http://localhost:5000/user/getHotels', { withCredentials: true });
      console.log(response.data)
    }
  },[])
  return (
    <div className='w-[100vw] flex items-center justify-center'>
        Your properties
    </div>
  )
}
