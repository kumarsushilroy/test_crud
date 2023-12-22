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

  const handleDelete = async (dlt) => {
    let fetchDelete = await fetch(`http://localhost:4000/delete/user/${dlt}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchDelete = await fetchDelete.json();
    alert("are you sure ?");
    window.location.reload();
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-[1400px] mx-auto md:flex border shadow-md mt-20">
       

        <div className=" md:w-[90%] w-full  border " style={{ overflowX: "scroll" }}>
        <h1 className="w-full  text-white px-2 p-1 bg-gray-600 mb-3">
          Clients Panel
        </h1>
          <table className="w-full  overflow-hidden">
            <h1 className="font-bold p-2">Clients</h1>
            <tr className=" bg-gray-400 text-white text-sm">
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
                <tr key={item._id} className="w-full text-sm">
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.lastname}</td>
                  <td className="text-center">{item.email}</td>
                  <td className="text-center">{item.mobile}</td>
                  <td className="text-center">{item.project}</td>

                  <td>
                    <Link
                      to={`update/${item._id}`}
                      className="border p-1 px-4 bg-green-600 font-bold text-white"
                    >
                      Edit
                    </Link>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="border p-1 px-4 bg-red-600 font-bold text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>

        <div className="md:w-[40%]  p-2">
          <Adduser />
        </div>
      </div>
    </div>
  );
};

export default Home;
