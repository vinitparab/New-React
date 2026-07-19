import React from "react";
import { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("")
  const [task, setTask] = useState([]) 

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  } 
  return (
    <div className="bg-black text-white lg:flex h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const copyTask = [...task]
          copyTask.push({heading,desc})
          setTask(copyTask  )
          setHeading("")
          setDesc("")
        }}
        action=""
        className=" lg:w-1/2 flex gap-4 flex-col  p-10 items-start"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
        onChange={(e)=>{
       setHeading(e.target.value)   
        }}
          type="text"
          value={heading}
          className="px-5 py-2 w-full border-2 rounded"
          placeholder="Enter Notes Heading"
        />
        <textarea
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
          name=""
          value={desc}
          id=""
          className="px-5 w-full h-32 py-2 flex items-start flex-row rounded border-2"
          type="text"
          placeholder="Write Description"
        ></textarea>
        <button className="bg-white w-full text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 bg-gray-900 p-10">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map(function(elem,idx){
            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.heading}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.desc}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }}
                className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>

            </div>

          })}
          
        </div>
      </div>
    </div>
  );
};

export default App;
