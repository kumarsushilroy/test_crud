import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Adduser from "./Adduser";
const Home = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const getHome = async () => {
      let fetchHome = await fetch("http://localhost:4000/get/user", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchHome = await fetchHome.json();
      //  console.log(fetchHome.getUser);
      setusers(fetchHome.getUser);
      console.log(users);
    };
    getHome();
  }, []);

  const handleDelete = async (dlt)=>{
    let fetchDelete = await fetch(`http://localhost:4000/delete/user/${dlt}`, {
      method:'delete',
      headers:{
        'Content-Type' : 'application/json'
      }
    });
    fetchDelete = await fetchDelete.json();
    alert('are you sure ?')
    window.location.reload();
  }

  return (
    <div className="max-w-[1200px] mx-auto border shadow-md mt-20">

      <h1 className="w-full text-white px-2 p-1 bg-gray-600">Clients Panel </h1>
      <div className="w-full grid md:grid-cols-2 ">
        <div className="max-w-full mt-10 " style={{overflowX:'scroll'}}>
      <table className="w-full" >
       
        <tr className=" bg-gray-400 text-white ">
          <th>Name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Mobile No.</th>
          <th>Project</th>
          <th></th>
          <th></th>
          
        </tr>

        {users?.map((item, i) => {
          return (
            <tr key={item._id} className="w-full">
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.project}</td>
              

              <td>
                <Link to={`update/${item._id}`} className="border p-1 px-4 bg-green-600 font-bold text-white">
                    Edit
                </Link>
              </td>

              <td>
                <button onClick={()=>handleDelete(item._id)} className="border p-1 px-4 bg-red-600 font-bold text-white">
                    Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      </div>

      <div>
        <Adduser/>
      </div>
      </div>
    </div>
  );
};

export default Home;
