import React, { useState } from 'react'

const Adduser = () => {

    const [name, setname] = useState();
    const [lastname, setlastname] = useState();
    const [email, setemail] = useState();
    const [mobile, setmobile] = useState();
    const [project, setproject] = useState();

   const obj = {name, lastname, email, mobile, project};

    const handleSubmit = async (e)=>{
      e.preventDefault();
      let postUser = await fetch('http://localhost:4000/create/user', {
        method:'post',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type' : 'application/json'
        }
      });
      postUser = await postUser.json();
      console.log(postUser)
      alert('Client added successfully !')
      window.location.reload();
       
    }

  return (
    <div>
        <div className='w-[400px] h-full shadow-md mx-auto mt-10 p-10'>

            <form onSubmit={handleSubmit} >
                <div className=''>
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

               <button type='submit' className='border mt-4 rounded px-5 py-1 bg-blue-700 text-white font-bold' >Create Client</button>
            </form>

        </div>
    </div>
  )
}

export default Adduser