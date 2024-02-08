import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [user, setUser] = useState([
    {
      name: "jaswanth",
      email: "jaswanthvenkat001@gmail.com",
      age: "19"
    }])
  

  return (
  <div className='flex justify-center align-middle'>
    <table>
      <thead>
        <tr className=''>
          <td className='p-4' >name</td>
          <td className='p-4'>email</td>
          <td className='p-4'>age</td>
  
        </tr>
      </thead>
      <tbody>
  {
    user.map((users) => {
      return (
        <tr key={users.email} className=''>
          <td className='p-4'>{users.name}</td>
          <td className='p-4'>{users.email}</td>
          <td className='p-4'>{users.age}</td>
          <div className='flex'>
          <td className='p-4 flex justify-center '><Link to= '/updateuser' ><button className='bg-red-500 p-2 rounded-sm'>edit</button></Link></td>
          <td className='p-4 flex justify-center '><Link to= '/updateuser' ><button className='bg-red-500 p-2 rounded-sm'>delete</button></Link></td>
          </div>
        </tr>
      );
    })
  }
  <tr className=''>
  <td className=''><Link to= '/adduser' ><button className='bg-green-500 p-2 rounded-sm'>add</button></Link></td>
  </tr>
</tbody>

    </table>

  </div>
  )
}

export default Home