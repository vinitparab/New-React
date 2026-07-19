import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [data, setData] = useState([])
  const getresponse = async() =>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  } 
  return (
    <div>
      <button onClick={getresponse}> Get Info</button>
      {data.map(function(elem){
        return <h1>{elem.author}</h1>
      })}
    </div>
  )
}

export default App