import React, { useEffect, useState } from 'react'

const User = () => {
    const [data, setData]= useState([]);
    const [mode , setMode] = useState('online')
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    useEffect(()=>{
            fetch(apiUrl).then((resp)=>{
                resp.json().then((result)=>{
                    setData(result)
                    localStorage.setItem("users",JSON.stringify(result))
                })
            }).catch((err)=>{
                setMode('offline')
                let collection = localStorage.getItem('users')
                setData(JSON.parse(collection))  
            }) 
    },[])
   
  return (
    <div>
        {
             mode === 'offline'? <div className='text-danger'> You are in offline mode</div> : null
        }
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
{}
        </div>
    </div>
  )
}

export default User
