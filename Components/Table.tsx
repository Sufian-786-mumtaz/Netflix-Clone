import {AiOutlineCheck} from "react-icons/ai"
const Table = ({selectedPlan, products}:any) => {
  return (
    <table>
        <tbody className="divide-y divide-[gray]">
            <tr className="tableRow">
            <td className="tableDataTitle">Video Quality</td>
                {
                    products.data.map((product:any) =>{
                        return(
                            <td key={product.id} className={`tabelData ${selectedPlan?.id === product.id ? "text-[#e50914]": "text-[gray]"}`}>
                                $ {product.unit_label}</td>
                        )
                    })
                }
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Video Quality</td>
                {
                    products.data.map((product:any) =>{
                        return(
                            <td key={product.id} className={`tabelData ${selectedPlan?.id === product.id ? "text-[#e50914]": "text-[gray]"}`}>
                                {product.metadata["Video Quality"]}</td>
                        )
                    })
                }
            </tr>
            <tr className="tableRow">
            <td className="tableDataTitle">Video Quality</td>
                {
                    products.data.map((product:any) =>{
                        return(
                            <td key={product.id} className={`tabelData ${selectedPlan?.id === product.id ? "text-[#e50914]": "text-[gray]"}`}>
                                {product.metadata.Resolution}</td>
                        )
                    })
                }
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Watch on your Tv, Computer, Mobilephones, Tabel </td>
                {products.data.map((product:any)=>{
                    return(
                        <td key={product.id} className={`tabelData ${selectedPlan?.id === product.id ? "text-[#e50914]": "text-[gray]"}`}>
                            {product.metadata.Portability === "true"
                            &&  <AiOutlineCheck className="w-7 h-7 inline-block" />}
                      </td>
                    )
                })} 
            </tr>
            
        </tbody>
    </table>
  )
}
export default Table