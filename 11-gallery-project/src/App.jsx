import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
const App = () => {
  const [userdata, setUserdata] = useState([]);
   const [index, setIndex] = useState(1)
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserdata(response.data);
    
  };
  useEffect(function(){
    getData();
  },[index])
  let printUserData = <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Loading...</h3>

  if(userdata.length > 0){
    printUserData = userdata.map(function(elem,idx){
      return <div>
        <Card elem={elem}/>
      </div>
    })
  }
  return (
    <div className="bg-black overflow-auto p-4 h-screen text-white">
      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button  style={{ opacity: index == 1 ? 0.6 : 1 }}

         onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserdata([])
          }
        }}
         className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Prev</button>
        <h4>Page {index}</h4>
        <button onClick={()=>{
          setUserdata([])
          setIndex(index+1)
        }} className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Next</button>
      </div>
      
    </div>
  );
};

export default App;
