import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const navigate = useNavigate
const submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/createuser", {name,email,age})
    .then(result => {
        console.log(result)
        navigate("/")
    })
    .catch(err => console.log(err) )}

const Createuser = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, SetAge] = useState()

    
  return (
    <div>
        <div className='bg-purple-500 '>
        <div className='p-2'>
        <form className='' onSubmit={submit}>
            <h1 className='text-center font-bold text-2xl'>user registation</h1>
            <div className='flex flex-col'>
            <div className='m-2'>
                <label className='font-semibold'>name</label><br/>
                <input type='text' 
                className='rounded-sm'
                onChange={(e) => setName(e.target.value)}
                >

                </input>
            </div>
            <div className='m-2'>
                <label className='font-semibold'>email</label><br/>
                <input type='text' className='rounded-sm'
                onChange={(e) => setEmail(e.target.value) }
                ></input>
            </div>
            <div className='m-2'>
                <label className='font-semibold'>age</label><br/>
                <input type='text' className='rounded-sm'
                onChange={(e) => SetAge(e.target.value)}
                ></input>
            </div>
            </div>
            <button className='m-2 bg-green-500 p-1 rounded-sm font-semibold' type='submit'>submit</button>
        </form>
         </div>
        </div>
    </div>
  )
}

export default Createuser