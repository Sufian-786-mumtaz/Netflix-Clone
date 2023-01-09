import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import {Movie} from "../typing"
import requests from '../utlis/request'
import Row from "../Components/Row"
import Modal from '../Components/Modal'
import { useSelector } from 'react-redux'
import { RootState } from '../Store/store'
import useAuth from "../hooks/useAuth"
import Plans from '../Components/Plans'
interface props{
  netflixOriginal: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
};
const Home = ({
  netflixOriginal,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries}:props) => {
    const {loading} = useAuth()
    const showModal = useSelector((state:RootState) => state.modal.Modal)
    
    const subscription = false
    if(loading || subscription ===null) return null
    if(!subscription) return <Plans />
  return (
    <div className={`h-screen relative bg-gradient-to-b lg:h-[140vh] ${showModal && "!h-screen overflow-hidden"}`}>
      <Head>
        <title>Home - Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='relative pl-4 pb-24 space-y-24 lg:pl-16'>
      <Banner netflixOriginal = {netflixOriginal} />
      <section className='md:space-y-24'>
        <Row title="Trending Now" Movie={trendingNow} />
        <Row title="Top Rated" Movie={topRated} />
        <Row title="Action Movies" Movie={actionMovies} />
        <Row title="Comedy Movies" Movie={comedyMovies} />
        <Row title="Horror Movies" Movie={horrorMovies} />
        <Row title="Romance Movies" Movie={romanceMovies} />
        <Row title="Documentaries" Movie={documentaries} />
      </section>
      </main>
      {showModal && <Modal />}
    </div>
  )
}

export const getServerSideProps = async () => {
  const [
    netflixOriginal,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries] = await Promise.all([
      fetch(requests.fetchNetflixOriginals).then((res)=> res.json()),
      fetch(requests.fetchTrending).then((res)=>res.json()),
      fetch(requests.fetchTopRated).then((res)=>res.json()),
      fetch(requests.fetchActionMovies).then((res)=>res.json()),
      fetch(requests.fetchComedyMovies).then((res)=>res.json()),
      fetch(requests.fetchHorrorMovies).then((res)=>res.json()),
      fetch(requests.fetchRomanceMovies).then((res)=>res.json()),
      fetch(requests.fetchDocumentaries).then((res)=>res.json()),
    ])
    return{
      props:{
        netflixOriginal: netflixOriginal.results,
        trendingNow: trendingNow.results,
        topRated: topRated.results,
        actionMovies: actionMovies.results,
        comedyMovies: comedyMovies.results,
        horrorMovies: horrorMovies.results,
        romanceMovies: romanceMovies.results,
        documentaries: documentaries.results,
      },
    }
}
export default Home