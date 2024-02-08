import React from 'react'
import { Link } from 'react-router-dom'

const adduser = () => {
  return (
    <div className='user-registation flex justify-center items-center content-center'>
      <form className='adduser-form bg-purple-600 p-3 '>
      <h1 className='text-center text-xl text-black font-bold'>user registation</h1>
      <div className='sub-div flex p-3'>
      
        <div className='name-div'>
          <label className=' '>name</label>
          <input placeholder='' type='text' className=' m-1 '/>
        </div>
        <div className='email-div'>
          <label>email</label>
          <input placeholder='' type='email' className='m-1'/>
        </div>
        <div className='age-div'>
          <label>age</label>
          <input placeholder='' type='number' className='m-1'/>
        </div>
        <div>
          <button className='bg-green-500 m-1 ps-2 pe-2 rounded-sm'>submit</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default adduser