import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Update = () => {

  const navigate = useNavigate();

  const params = useParams();
  const paramsId = params.id;

  const [name, setname] = useState();
    const [lastname, setlastname] = useState();
    const [email, setemail] = useState();
    const [mobile, setmobile] = useState();
    const [project, setproject] = useState();

    const obj = {name, lastname, email, mobile, project};

  useEffect(()=>{
     const editClient = async()=>{
       let fetchClient = await fetch(`http://localhost:4000/get/single/user/${paramsId}`,{
        method:'get',
        headers:{
          'Content-Type':'application/json'
        }
       });
       fetchClient = await fetchClient.json();
      //  console.log(fetchClient.singleUser)
      setname(fetchClient.singleUser.name)
      setlastname(fetchClient.singleUser.lastname)
      setemail(fetchClient.singleUser.email)
      setmobile(fetchClient.singleUser.mobile)
      setproject(fetchClient.singleUser.project)
     }
     editClient()
  },[])

  

    

    const handleSubmit = async (e)=>{
      e.preventDefault();
      let updateUser = await fetch(`http://localhost:4000/update/user/${paramsId}`, {
        method:'put',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type' : 'application/json'
        }
      });
      updateUser = await updateUser.json();
      alert('Client updated successfully !')
      
       navigate('/')
    }

  return (

    <div>
<div className='w-[400px] h-full shadow-md mx-auto mt-10 p-10'>

            <form onSubmit={handleSubmit} >
                <div className=''>
                  <h1 className='text-center bg-green-600 text-white mb-3 p-2'>Update Client</h1>
                <label className='block'>Name</label>
                <input required className='border p-1 w-full outline-none' value={name} onChange={(e)=>setname(e.target.value)} type="text" />
                </div>

                <div className='mt-2'>
                <label className='block'>Last Name</label>
                <input required className='border p-1 w-full outline-none' value={lastname} onChange={(e)=>setlastname(e.target.value)} type="text" />
                </div>

                <div className='mt-2'>
                <label className='block'>Email</label>
                <input required className='w-full p-1 border outline-none' value={email} onChange={(e)=>setemail(e.target.value)} type="text" />
                </div>

                <div className='mt-2'>
                <label className='block'>Mobile No.</label>
                <input required className='w-full border p-1 outline-none' value={mobile} onChange={(e)=>setmobile(e.target.value)} type="text" />
                </div>

                <div className='mt-2'>
                <label className='block'>Project</label>
                <input required className='w-full border p-1 outline-none' value={project} onChange={(e)=>setproject(e.target.value)} type="text" />
                </div>

               <button type='submit' className='border mt-4 rounded px-5 py-1 bg-blue-700 text-white font-bold' >Update Client</button>
            </form>

        </div>
    </div>
  )
}

export default Update