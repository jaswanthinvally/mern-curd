import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [User, Setuser] = useState([
        {
            name: "jaswanth",
            email: "jaswanthvenkat001@gmail.com",
            age: "17"
        }
    ])
    return (
        <div>
            <div  className=' bg-purple-500'>
            <h1 className='text-center font-bold text-3xl'>users data</h1>
                <table className=''>
                
                    <thead>
                        <tr className=''>
                            <td className='p-3 font-semibold'>name</td>
                            <td className='p-3 font-semibold' >email</td>
                            <td className='p-3 font-semibold'>age</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            User.map((user) => {
                                return (
                                    <tr>
                                        <td className='p-3'>{user.name}</td>
                                        <td className='p-3'>{user.email}</td>
                                        <td className='p-3'>{user.age}</td>
                                        <Link to= "/updateuser"><td className='p-3'><button className='bg-green-500 p-2 rounded-sm font-semibold' >edit</button></td></Link>
                                        <Link to= "/createuser"><td className='p-3'><button className='bg-white p-2 rounded-sm font-semibold' >add</button></td></Link>
                                        <td className='p-3'><button className='bg-red-500 p-2 rounded-sm font-semibold'>delete</button></td>
                                    </tr>
                                    
                                );
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home