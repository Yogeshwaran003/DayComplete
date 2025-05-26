import Daycomponents from "../dayComponents/daycomponents";
const calender = () => {
    const range=30;
  return (
    <div className="flex flex-wrap gap-10">
        {Array.from({length:range},(_,i)=>i+1).map((i)=>(
        <Daycomponents key={i} days={i}/>
      ))}
    </div>
  )
}

export default calender
