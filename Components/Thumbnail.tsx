import {Movie} from "../typing"
import Image from "next/image"
import { useDispatch } from "react-redux";
import { showModal } from "../Store/modalSlice";
import { addMovie } from "../Store/modalSlice";
interface props {
    movie: Movie;
}
const Thumbnail = ({movie}:any) => {
  const dispatch = useDispatch()
  const handleModal = (movie:props) =>{
    dispatch(showModal())
    dispatch(addMovie(movie))
  }
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200
     ease-out md:h-36 md:min-w-[260px] md:hover:scale-105" onClick={()=>handleModal(movie)}>
        <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
         alt="Thumbnail Image" className="rounded-sm object-cover md:rounded" layout="fill" />
    </div>
  )
}

export default Thumbnail