"use client";
import dayjs from "dayjs";
import Daycomponents from "../dayComponents/daycomponents";
import { useState } from "react";
import Taskassignment from "../taskassignment/taskassignment";
const calender = (props: { month: number }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [val, setVal] = useState<number | null>(null);
  // const month = dayjs().format("MM")
  // const year = dayjs().format("YYYY")
  const set = dayjs().add(props.month, "month");
  const day = dayjs().format("dddd");
  const range = set.daysInMonth();
  return (
    <div className="flex flex-wrap gap-10">
      {/* {Array.from({length:range},(_,i)=>i+1).map((i)=>(
        <Daycomponents key={i} days={i} onClick={()=>setVal(i)} />
      ))} */}
      {val === null ? (
        Array.from({ length: range }, (_, i) => i + 1).map((i) => (
          <Daycomponents key={i} days={i} onClick={() => setVal(i)} />
        ))
      ) : (
        <Taskassignment
          date={val}
          month={set.format("MM")}
          year={set.format("YYYY")}
          day={day}
        />
      )}
    </div>
  );
};

export default calender;
