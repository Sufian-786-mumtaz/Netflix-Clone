import {FaSearch,FaBell} from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../hooks/useAuth';
const Header = () => {
  const [isScrolled, setScrolled] = useState(false);
  const {logout} = useAuth()
  useState(()=>{
    const handleScrolled = () =>{
      if(window.scrollY > 0){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    if(typeof window !== "undefined"){
      window.addEventListener("scroll", handleScrolled);
    return()=>{
      window.removeEventListener("scroll", handleScrolled);
    }
    }
  });
  return (
    <>
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
        <img src="https://rb.gy/ulxxee" width={100} height={100} className="cursor-pointer object-contain" />
        <ul className="hidden space-x-4 md:flex">
            <li className= "HeaderList">Home</li>
            <li className= "HeaderList">Tv Shows</li>
            <li className= "HeaderList">Movies</li>
            <li className= "HeaderList">New & Popular</li>
            <li className= "HeaderList">My List</li>
        </ul>
        </div>
        <div className='flex item-center space-x-4 text-sm font-light'>
          <FaSearch className='h-6 w-8 hidden md:inline' />
          <p className='hidden lg:inline'>Kids</p>
          <FaBell className='h-6 w-8' />
          <img src="https://rb.gy/g1pwyx" alt="" className='cursor-pointer rounded' onClick={logout} />
        </div>
    </header>
    </>
  )
}

export default Header