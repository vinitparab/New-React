import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import { Tag } from 'lucide-react'


const App = () => {
   const users = [{
    img: 'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quos quidem, sed vero repellendus sapiente?',
    tag:'Satisfied'

   },
   {
    img: 'https://images.unsplash.com/photo-1729371568794-fb9c66ab09cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quos quidem, sed vero repellendus sapiente?',
    tag:'Satisfied'

   },
   {
    img: 'https://images.unsplash.com/photo-1729371568794-fb9c66ab09cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quos quidem, sed vero repellendus sapiente?',
    tag:'Satisfied'

   },
   {
    img: 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quos quidem, sed vero repellendus sapiente?',
    tag:'UnderBanked'

   },

  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App