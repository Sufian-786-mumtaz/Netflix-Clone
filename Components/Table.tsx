import {AiOutlineCheck} from "react-icons/ai"
const Table = ({selectedPlan}:any) => {
  return (
    <table>
        <tbody className="divide-y divide-[gray]">
            <tr className="tableRow">
                <td className="tableDataTitle">Monthly Price</td>
                <td className={`tabelData ${selectedPlan === 3 ? "text-[#e50914]": "text-[gray]"}`}>$20</td>
                <td className={`tabelData ${selectedPlan === 2 ? "text-[#e50914]": "text-[gray]"}`}>$30</td>
                <td className={`tabelData ${selectedPlan === 1 ? "text-[#e50914]": "text-[gray]"}`}>$45</td>
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Video Quality</td>
                <td className={`tabelData ${selectedPlan === 3 ? "text-[#e50914]": "text-[gray]"}`}>Good</td>
                <td className={`tabelData ${selectedPlan === 2 ? "text-[#e50914]": "text-[gray]"}`}>Best</td>
                <td className={`tabelData ${selectedPlan === 1 ? "text-[#e50914]": "text-[gray]"}`}>Better</td>
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Resolution</td>
                <td className={`tabelData ${selectedPlan === 3 ? "text-[#e50914]": "text-[gray]"}`}>480p</td>
                <td className={`tabelData ${selectedPlan === 2 ? "text-[#e50914]": "text-[gray]"}`}>1080p</td>
                <td className={`tabelData ${selectedPlan === 1 ? "text-[#e50914]": "text-[gray]"}`}>4k+HDR</td>
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Watch on your Tv, Computer, Mobilephones, Tabel </td>
                <td className={`tabelData ${selectedPlan === 3 ? "text-[#e50914]": "text-[gray]"}`}><AiOutlineCheck className="w-7 h-7 inline-block" /></td>
                <td className={`tabelData ${selectedPlan === 2 ? "text-[#e50914]": "text-[gray]"}`}><AiOutlineCheck className="w-7 h-7 inline-block" /></td>
                <td className={`tabelData ${selectedPlan === 1 ? "text-[#e50914]": "text-[gray]"}`}><AiOutlineCheck className="w-7 h-7 inline-block" /></td>
            </tr>
            
        </tbody>
    </table>
  )
}

export default Table