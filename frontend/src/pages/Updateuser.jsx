import React from 'react'

const Updateuser = () => {
  return (
    <div>
    <div className='bg-purple-500 '>
    <div className='p-2'>
    <form className=''>
        <h1 className='text-center font-bold text-2xl'>update user</h1>
        <div className='flex flex-col'>
        <div className='m-2'>
            <label className='font-semibold'>name</label><br/>
            <input type='text' className='rounded-sm'></input>
        </div>
        <div className='m-2'>
            <label className='font-semibold'>email</label><br/>
            <input type='text' className='rounded-sm'></input>
        </div>
        <div className='m-2'>
            <label className='font-semibold'>age</label><br/>
            <input type='text' className='rounded-sm'></input>
        </div>
        </div>
        <button className='m-2 bg-green-500 p-1 rounded-sm font-semibold'>submit</button>
    </form>
     </div>
    </div>
</div>
  )
}

export default Updateuser