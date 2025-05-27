'use client';
import dayjs from "dayjs";
import Daycomponents from "../dayComponents/daycomponents";
import { useState } from "react";
const calender = (props:{month:number}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[val,setVal] = useState<number | null>(null)

    const set = dayjs().add(props.month,"month")
    const range=set.daysInMonth();
  return (
    <div className="flex flex-wrap gap-10">
        {Array.from({length:range},(_,i)=>i+1).map((i)=>(
        <Daycomponents key={i} days={i} onClick={()=>setVal(val)} />
      ))}
    </div>
  )
}

export default calender
