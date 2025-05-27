"use client";
import { useState } from "react";
import Calender from "../calender/calender";
import dayjs from "dayjs";
const calendersection = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [month, setMonth] = useState(0);
  const curr = dayjs().add(month, "month");
  return (
    <div className="flex items-center justify-center">
      <div className="p-10 w-[100vw]">
        <div className="mb-[30px] flex justify-around">
          <div className="flex gap-20">
            <h1 className="cursor-pointer" onClick={() => setMonth(month - 1)}>
              {"<"}
            </h1>
            <h1>{curr.format("MMMM")}</h1>
            <h1 className="cursor-pointer" onClick={() => setMonth(month + 1)}>
              {">"}
            </h1>
          </div>
          <div>
            <h1>{curr.format("dddd")}</h1>
          </div>
          <div className="flex gap-20">
            <h1 className="cursor-pointer" onClick={() => setMonth(month - 12)}>
              {"<"}
            </h1>
            <h1>{curr.format("YYYY")}</h1>
            <h1 className="cursor-pointer" onClick={() => setMonth(month + 12)}>
              {">"}
            </h1>
          </div>
        </div>
        <Calender month={month} />
      </div>
    </div>
  );
};

export default calendersection;
