import Calender from "@/components/calender/calender";
import dayjs from "dayjs";
export default function Home() {
  const curr=dayjs();
  return (
    <div className="flex items-center justify-center">
      <div className="p-10">
        <div className="mb-[30px] flex justify-around">
          <div className="flex gap-10">
            <h1>{"<"}</h1>
            <h1>{curr.format("MMMM")}</h1>
            
            <h1>{">"}</h1>
          </div>
          <div>
            <h1>day</h1>
          </div>
          <div className="flex gap-10">
            <h1>{"<"}</h1>
            <h1>{curr.format("YYYY")}</h1>
            <h1>{">"}</h1>
          </div>
        </div>
        <Calender />
      </div>
    </div>
  );
}
