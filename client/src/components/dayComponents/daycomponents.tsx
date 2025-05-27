// import dayjs from "dayjs"
const daycomponents = (props:{days:number;onClick:(day:number)=>void}) => {
    // const today = dayjs();
  return (
    <div className="p-[35px] border-solid border-white border-1 w-[1px] h-[1px] flex justify-center items-center bg-transparent backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[10px] border border-white/20 cursor-pointer transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-110 hover:bg-[linear-gradient(37deg,_rgba(2,0,36,1)_0%,_rgba(9,9,121,1)_50%,_rgba(0,212,255,1)_100%)] flex justify-center items-center" onClick={()=>props.onClick(props.days)}>
      <h1 className="text-[25px]">{props.days}</h1>
    </div>
  )
}

export default daycomponents