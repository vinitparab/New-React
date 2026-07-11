import React , {useState} from 'react'


const App = () => {
  const [bgcolor, setbgcolor] = useState("white")
  return (
  <div style={{backgroundColor : bgcolor}} className='bg-amber-400 h-screen flex gap-3 items-center justify-center'>
      <button onClick={()=>{setbgcolor("red")}}
       className='border 2px solid black p-2 bg-red-500 text-white'>Red</button>
      <button onClick={()=>{setbgcolor("blue")}}
       className='border 2px solid black p-2 bg-blue-500 text-white'>Blue</button>
      <button  onClick={()=>{setbgcolor("green")}} 
      className='border 2px solid black p-2 bg-green-500 text-white'>Green</button>
    </div>
  )
}

export default App