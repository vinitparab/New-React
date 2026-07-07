import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  
  return (
    <div className='h-full shrink-0 flex-nowrap p-4 w-2/3 flex gap-10 overflow-x-auto'>
      {props.users.map(function(dets,idx){
        return <RightCard key={idx} img={dets.img} intro={dets.intro} tag={dets.tag} id={idx} />
      })}
       
    </div>
  )
}

export default Rightcontent