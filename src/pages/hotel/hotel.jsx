import React, {useEffect, useState} from 'react'
import ImageCarousel from './components/carousel'
import HotelHeader from './components/hotelHeader'
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
const Hotel = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    let { id } = useParams();
    const [hoteData,setHotelData] = useState()
    useEffect(()=>{
        console.log(id)
        const fetchData = async()=>{
        const response = await axios.get(`http://localhost:5000/hotel/getHotel/${id}`)
        setHotelData(response.data)
    }
    fetchData()
},[])
const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
};
console.log(hoteData)
return (
    <div className='block '>
        <HotelHeader/>
        <div className='w-[100vw] flex justify-center items-center'>
            <div className='w-[70vw] flex items-center'>
                <div className='text-3xl flex font-extrabold'>
                Hotel in {hoteData && hoteData?.district && <div className='mx-3'>{hoteData.district}</div>}
                </div>
            </div>
        </div>
        <div className='w-[100vw] flex justify-center items-center'>
            <div className='w-[70vw] flex justify-center items-center'>
                <ImageCarousel/>
            </div>
        </div>
        <div className='w-[100vw] flex justify-center items-center'>
            <div className='w-[70vw] flex flex-col items-start'>
                <div className='text-3xl font-extrabold'>
                {hoteData && hoteData?.name && <div>{hoteData.name}</div>}
                </div>
                <div className='flex text-lg font-thin'>
                    <div className='border-r border-1 pr-2'>
                        {hoteData && hoteData?.rooms} Rooms
                    </div>
                    <div className='border-r border-1 px-2'>
                        {hoteData && hoteData?.pool && <div>Swimming pool</div>}
                    </div>
                    <div className='border-r border-1 px-2'>
                        Guests
                    </div>
                    <div className='border-r border-1 px-2'>
                        Garden
                    </div>
                    <div className='border-r border-1 px-2'>
                        Beds
                    </div>
                    <div className='border-r border-1 px-2'>
                        washroom
                    </div>
                </div>
                <div className='mb-2 mt-2'>
                Selct Date :
                </div>
                <div className='text-black border-2 border-black'>
                <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                />
                </div>
                <div className='flex flex-col '>
                    <div>Enter the number of guest : </div>
                    <input type="number" min="1" step="1" className='border-2 border-black'/>
                </div>
                <button className='bg-red-700 rounded-md text-white p-3 mt-4 hover:bg-blue-600'>Book</button>
            </div>
        </div>
    </div>

  )
}

export default Hotel