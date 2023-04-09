import React, { useEffect, useState } from 'react'

const User = () => {
    const [data, setData]= useState([]);
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    useEffect(()=>{
            fetch(apiUrl).then((resp)=>{
                resp.json().then((result)=>{
                    setData(result)
                })
            })
    },[])
  return (
    <div>
       <table class="table">
  <thead>
    <tr>
    <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, idx)=>
        <tr>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.street}</td>
        </tr>
    )}
  </tbody>
</table>
    </div>
  )
}

export default User
