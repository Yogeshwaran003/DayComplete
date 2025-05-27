import dayjs from "dayjs";
import Daycomponents from "../dayComponents/daycomponents";
const calender = (props:{month:number}) => {
    const value = props.month;
    const set = dayjs().add(value,"month")
    const range=set.daysInMonth();
  return (
    <div className="flex flex-wrap gap-10">
        {Array.from({length:range},(_,i)=>i+1).map((i)=>(
        <Daycomponents key={i} days={i}/>
      ))}
    </div>
  )
}

export default calender
