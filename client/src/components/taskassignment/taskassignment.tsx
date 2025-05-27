import React from 'react'

const taskassignment = (props:{date:number;day:string;}) => {
  return (
    <div className='p-10 flex justify-between'>
     <div>
        {props.date}
     </div>
     <div>
        {props.day}
     </div>
    </div>
  )
}

export default taskassignment