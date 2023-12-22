import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const View = () => {

    const params = useParams();
const paramsId = params.id;

const [single, setsingle] = useState([]);

 useEffect(()=>{
    const getSingle = async()=>{
        let fetchSingle = await fetch(`http://localhost:4000/get/single/user/${paramsId}`, {
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        });
        fetchSingle = await fetchSingle.json();
        // console.log(fetchSingle.singleUser);
        setsingle(fetchSingle.singleUser)
    }
    getSingle();
 },[])

  return (
    <div>
        <div className='w-[500px] border shadow-md mx-auto mt-10'>
           <div className='flex items-ceter gap-4 justify-between px-5 p-2'>
            <p>Username</p>
            <p>{single.username}</p>
           </div>

           <div className='flex items-ceter gap-4 justify-between px-5 p-2'>
            <p>Email</p>
            <p>{single.email}</p>
           </div>

          
        </div>
    </div>
  )
}

export default View