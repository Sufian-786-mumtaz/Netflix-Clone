import {Movie} from "../typing"
import Image from "next/image"
import { useEffect, useState } from "react";
import baseUrl from "../Constants/Movie"
import {FaPlay,FaInfoCircle} from "react-icons/fa"
import { useDispatch } from "react-redux";
import { showModal,addMovie } from "../Store/modalSlice";
interface props {
    netflixOriginal: Movie[];
};
const Banner = ({netflixOriginal}:props) => {
  const [Movie, setMovie] = useState<Movie | null>(null);
  const dispatch = useDispatch()
  const handleViedo = (Movie:Movie | null) =>{
    dispatch(showModal())
    dispatch(addMovie(Movie))
  }
  useEffect(()=>{
    setMovie(netflixOriginal[Math.floor(Math.random() * netflixOriginal.length)])
  },[netflixOriginal]);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
    <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
      <Image src={`${baseUrl}${Movie?.backdrop_path || Movie?.poster_path}`}
       layout="fill" alt="Banner Image" objectFit="cover" />
    </div> 
    <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">{Movie?.title || Movie?.original_title}</h1>
       <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-md">{Movie?.overview}</p> 
       <div className="flex space-x-3">
        <button className="styleBtn bg-white text-black" onClick={()=> handleViedo(Movie)}><FaPlay className="w-4 h-4 text-black md:h-7 md:w-7" /> Play</button>
        <button className="styleBtn bg-[gray]/70" onClick={()=> handleViedo(Movie)}>More Info <FaInfoCircle className="w-5 h-5 md:w-8 md:h-8" /></button>
        </div>  
    </div>
  )
}
export default Banner