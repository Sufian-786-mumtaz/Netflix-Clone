import { useRef, useState } from "react";
import {FaAngleLeft,FaAngleRight} from "react-icons/fa"
import {Movie} from "../typing"
import Thumbnail from "./Thumbnail"
import { showModal } from "../Store/modalSlice";
interface props {
    title:string;
    Movie: Movie[],
}
const Row = ({title,Movie}:props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);
  
  const handleClick = (direction:string)=>{
    setIsMoved(true);
    if(rowRef.current){
      const {scrollLeft, clientWidth} = rowRef.current;
      const scrollTo =  direction === "left"? scrollLeft - clientWidth : scrollLeft + clientWidth
      rowRef.current.scrollTo({left:scrollTo, behavior: "smooth"});
    }
    
  }
  return (
    <div className="h-40 space-y-0.5 md:space-y-2 transition duration-200 hover:text-white">
        <h2 className="w-56 font-semibold cursor-pointer text-[#e5e5e5] text-sm md:text-2xl ">{title}</h2>
        <div className="group relative md:-ml-2">
            <FaAngleLeft className={`arrows left-2 ${!isMoved && "hidden"}`}  onClick={()=>handleClick("left")}/>
            <div className="flex items-center overflow-x-scroll scrollbar-hide space-x-0.5 md:space-x-2.5 md:p-2" ref = {rowRef}>
                {Movie.map((movie)=>{
                   return <Thumbnail key={movie.id} movie = {movie} />
                })}
            </div>
            <FaAngleRight className="arrows right-2" onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default Row