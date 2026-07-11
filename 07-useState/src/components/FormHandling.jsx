import React from 'react'

const FormHandling = () => {
    const sumbitHandler = (e)=>{
        e.preventDefault();
        console.log("Form Submitted");
    }
    
  return (
    <div>
        <form onSubmit={(e)=>{
            sumbitHandler(e)e
        }} action="">
            <input type="text" placeholder='Enter your Name' className='border-2 border-black p-2' />
        <button className='border-2 border-black p-2'>Submit</button>
        </form>
    </div>
  )
}

export default FormHandling