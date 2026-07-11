import React, { useState } from 'react'

const TwoWayBind = () => {
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("form Subitted")
        setTitle('')
    }

    const [title, setTitle] = useState('')

  return (
    <div className='flex items-center justify-center flex-col gap-2 py-20'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}
         action="" 
         className='flex gap-1'>
            <input value={title}
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
             className='border-2 border-black p-2' type="text" name="" id="" placeholder='Enter your Name' />
        <button className='border-2 border-black p-2'>Submit</button>
        </form>
    </div>
  )
}

export default TwoWayBind