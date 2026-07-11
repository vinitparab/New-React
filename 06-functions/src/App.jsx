import React from 'react'

const App = () => {

  return (
    <div>
      <h1 id='h1'>Hello Guys</h1>
      <input onChange={function(elem){
        console.log(elem.target)
      }} placeholder='Enter the text  ' className='' type="text" />
      <button onClick={function(){
        console.log("Button Clicked")
      }} className='border-2 border-black p-3'>Click Here</button>
    </div>  
  )
}

export default App