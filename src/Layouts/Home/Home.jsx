import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { getUsers } from '../../redux/GetUsers/get_userSlice';
const Home = () => {
    const Loading=useSelector(state=>state.getUsers.isLoading);
    const data=useSelector(state=>state.getUsers.value)
    const dispatch=useDispatch();
    const handleIncrement=async()=>{
        try{
            const res=await axios.get(`https://reqres.in/api/users?page=2}`)
            const data=res.data.data;
            dispatch(getUsers(data));
            console.log("increment data",res.data.data);
        }catch(err){
            console.log(err);
        }
    }
    const handleDecrement=async()=>{
        try{
            const res=await axios.get(`https://reqres.in/api/users?page=1`)
            const data=res.data.data;
            dispatch(getUsers(data));
            console.log("decrement data",res.data.data);
        }catch(err){
            console.log(err);
        }
    }
  return (
    <>
        <Navbar/>
        <div className='flex justify-center'>{Loading && <ClipLoader
                loading={Loading}
                color="#36d7b7"
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />}</div>
            {data.length==0 && <div><p className='flex justify-center py-4 text-3xl'>Click on Get Users to get all users</p></div>}
        {(data.length>0) && <div className='flex flex-col gap-2  py-3'>
            {
                data.map((item,index)=>{
                    return(
                        <div key={index} className='flex flex-col md:flex-row justify-between bg-[#ACCBDA] rounded text-black text-3xl py-3 px-3 items-center border-solid border-x-2 border-y-2 mx-3 '>
                            <div><img src={item.avatar} alt='image' className='rounded-full'/></div>
                            <div><p>{item.first_name} {item.last_name}</p></div>
                            <div><p>{item.email}</p></div>
                        </div>
                    )
                })
            }
            </div>}
            {data.length>0 && <div className='flex justify-center py-4 gap-2'>
                <button onClick={handleDecrement} className='btn bg-gray-300 hover:bg-gray-100 text-black'>pre</button>
                <button onClick={handleIncrement} className='btn bg-gray-300 hover:bg-gray-100 text-black'>next</button>
                </div>}
    </>
  )
}

export default Home