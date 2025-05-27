import React from 'react'

const taskassignment = (props:{date:number;day:string;month:number | string ;year:number | string}) => {
  return (
    <div className='p-10 text-white w-[100%] flex justify-between'>
     <div>
        {`${props.date} / ${props.month} / ${props.year}`}
     </div>
     <div>
        {props.day}
     </div>
    </div>
  )
}

export default taskassignment