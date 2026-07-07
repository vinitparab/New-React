import React from 'react'

import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
        <div className='h-full w-[calc((100%-5rem)/3)] shrink-0 rounded-4xl overflow-hidden relative '>
          <img className='h-full w-full object-cover' src={props.img} alt="" />
          <RightCardContent intro={props.intro} tag={props.tag} id={props.id}/>

          
           
            
        </div>
  
  )
}

export default RightCard

