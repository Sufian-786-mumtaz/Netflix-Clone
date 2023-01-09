import MuiModal from "@mui/material/Modal"
import { useSelector } from "react-redux"
import { RootState } from "../Store/store"
import { useDispatch } from "react-redux"
import { hideModal } from "../Store/modalSlice"
import { IoMdClose } from "react-icons/io"
import { useState, useEffect } from "react"
import { Movie } from "../typing"
import { Element, Genre } from "../typing"
import ReactPlayer from "react-player/lazy"
import { FaPlay } from "react-icons/fa"
import {AiOutlinePlus} from "react-icons/ai"
import {FiThumbsUp} from "react-icons/fi"
import {HiVolumeUp,HiVolumeOff} from "react-icons/hi"
const Modal = () => {
  let showModal = useSelector((state: RootState) => state.modal.Modal)
  const getMovie:any = useSelector((state: RootState) => state.modal.movie)
  const [movie, setMovie] = useState<Movie>(getMovie)
  const [trailer, setTrailer] = useState("")
  const [genre, setGenre] = useState<Genre[]>([])
  const [muted, setMuted] = useState(false)
  const dispatch = useDispatch()
  const handleOnClose = () => {
    dispatch(hideModal())
  }
  useEffect(() => {
    async function fetchMovie() {
      const url = `https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      const res = await fetch(url)
      const data = await res.json()
      if (data.videos) {
        const index = data.videos.results.findIndex((element: Element) => {
          return element.type === "Trailer"
        })
        console.log(index);
        setTrailer(data.videos?.results[index]?.key)
      }
      if (data.genres) {
        setGenre(data.genres)
      }
    }
    fetchMovie()
  }, [movie])
  console.log(trailer);
  console.log(genre);

  return (
    <MuiModal open={showModal} onClose={handleOnClose} className="fixed !top-7 left-0 right-0 z-50
     mx-auto max-w-2xl w-full overflow-hidden rounded-md overflow-y-scroll scrollbar-hide">
      <div>
        <button onClick={handleOnClose} className="absolute right-5 top-5 !z-40 h-9
         w-9 bg-[#181818] flex items-center justify-center rounded-full hover:bg-[#181818] border-none modalButton">
          <IoMdClose className="h-6 w-6" /></button>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-center sm:justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex justify-center items-center gap-x-2 rounded bg-white text-black text-xl px-8 font-bold transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7" />
                Play
              </button>
              <button className="modalButton">
                <AiOutlinePlus className="h-7 w-7" />
              </button>
              <button className="modalButton">
                <FiThumbsUp className="h-7 w-7" />
              </button>
            </div>
            <button className="modalButton ml-2 sm:ml-0" onClick={() => setMuted(!muted)}>
              {muted ? (
                <HiVolumeOff className="h-6 w-6" />
              ): (
                <HiVolumeUp className="h-6 w-6" />
              )
              }
            </button>
          </div>
        </div>
        <div className="bg-[#181818] px-10 py-8 flex rounded-b-md space-x-16">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">{movie!.vote_average * 10}% Match </p>
              <p className="font-light">{movie?.release_date}</p>
              <div className="flex h-4 items-center justify-center rounded
               border text-xs px-1.5 border-white/40">HD</div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genres: </span>
                  {genre.map((element) => element.name).join(", ")}
                </div>
                <div>
                  <span className="text-[gray]">Original Language: </span>
                  {movie?.original_language}
                </div>
                <div>
                  <span className="text-[gray]">Total Votes: </span>
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MuiModal>
  )
}

export default Modal