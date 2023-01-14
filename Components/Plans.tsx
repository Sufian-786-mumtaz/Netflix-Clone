import Head from "next/head"
import Link from "next/link"
import useAuth from "../hooks/useAuth"
import {AiOutlineCheck} from "react-icons/ai"
import Table from "./Table"
import {useState} from "react"
import { setSubscription } from "../Store/modalSlice"
import { useDispatch, useSelector } from "react-redux"
import Loader from "./Loader"
import { useRouter } from "next/router"
const Plans = ({products}:any) => {
    const dispatch = useDispatch()
    const {logout} = useAuth()
    const router = useRouter()
    const [selectedPlan, setSelectedPlan] = useState(products.data[2])
    const [isBillingLoading, setIsBillingLoading] = useState(false)
    console.log(selectedPlan);
    
    const handleLogout = () =>{
      logout()
    }
    const handleSubscription = async() =>{
      setIsBillingLoading(true)
      const response = await fetch("api/Stripe",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          index: Number(selectedPlan.description) 
        })
      });
      if (response.status === 500) return
        const data = await response.json()
        router.push(data.url)
        setIsBillingLoading(false)
    }
    
  return (
    <div className="">
        <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
        <img src="https://rb.gy/ulxxee" width={100} height={100} className="cursor-pointer object-contain" />
        </Link>
        <button className="text-lg font-medium hover:underline" onClick={()=>handleLogout()}>Sign Out</button>
      </header>
      <main className="pt-28 px-5 mx-auto max-w-5xl pb-12 transition-all md:px-10">
        <h1 className="mb-3 font-medium text-3xl">Choose the plan that's right for you</h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
          <AiOutlineCheck className="w-7 h-7 text-[#e50914]" />
          Watch all you want. Ad-free
          </li>
           <li className="flex items-center gap-x-2 text-lg">
          <AiOutlineCheck className="w-7 h-7 text-[#e50914]" />
          Recommendations just for you
          </li>
           <li className="flex items-center gap-x-2 text-lg">
          <AiOutlineCheck className="w-7 h-7 text-[#e50914]" />
          Cancle your plan any time
          </li>
        </ul>
        <div className="flex flex-col mt-4 space-y-4">
          <div className="flex w-full items-center self-end justify-end md:w-[60%]">
            {products.data.map((product:any) =>{
              return(
                <div key={product.id} className={`planBox ${selectedPlan?.id === product.id ? "opacity-100": "opacity-60"}`}
                onClick={()=>setSelectedPlan(product)}>{product.name}</div>
              )
            })}
          </div>
          <Table products={products} selectedPlan={selectedPlan} />
          <button className={`bg-[#e50914] mx-auto w-11/12 rounded py-4
           text-xl shadow md:w-[420px] hover:bg-[#f6121d]`}
             onClick={()=>handleSubscription()}>
              {
                isBillingLoading ? (
                  <Loader color="dark:fill-gray-300" />
                ):(
                  "Subscribe"
                )
              }
              </button>
        </div>
      </main>
    </div>
  )
}

export default Plans