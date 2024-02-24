import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { CgDanger } from "react-icons/cg";
const MainBuild = () => {
  return (
    <div className='px-[15vw] pt-[2vw]'>
         <div className=''>
             <h1 className='font-semibold text-[2vw]'>Best Website builders in the US</h1>
         </div>
          <div className='h-[0.05vw] w-full bg-gray-700'></div>
         <div className='mainline flex gap-[28vw]'>
                 <div className='flex gap-8'>
                 <div className='flex gap-2 items-center'>
                 <FaCheck className='bg-white text-black border-[1px] border-black rounded-full'/>
                    <h1>Last Updated - February 22,2020</h1>
                 </div>
                 <div className='flex items-center gap-2'>
                 <CgDanger/>
                 <h1>Advertising Disclosure</h1>
                 </div>
                 </div>
                 <div className='flex items-center gap-2'>
                           <h1>Top Relevant </h1>
                           <IoIosArrowDown className=''/>
                 </div>
         </div>
         <div className='h-[0.05vw] w-full bg-gray-700'></div>
         <div className='py-[1vw]'>  
                    <ul className='flex gap-[4vw] text-[.9vw]'>
                        <li className='px-[0.6vw] py-[0.3vw] rounded-xl bg-slate-200'>Tools</li>
                        <li className='px-[0.6vw] py-[0.3vw] rounded-xl bg-slate-200'>AWS Builder</li>
                        <li className='px-[0.6vw] py-[0.3vw] rounded-xl bg-slate-200'>Start Build</li>
                        <li className='px-[0.6vw] py-[0.3vw] rounded-xl bg-slate-200'>Build Supplies</li>
                        <li className='px-[0.6vw] py-[0.3vw] rounded-xl bg-slate-200'>Tooling</li>
                        <li className='px-[0.6vw] py-[0.3vw] rounded-xl bg-slate-200'>BlueHosting</li>
                    </ul>       
         </div>
         <div>
           <ul className='flex gap-3 text-[.9vw]'>
            <li>Home</li>
            <li>&gt;</li>
            <li>Hosting for all</li>
            <li>&gt;</li>
            <li>Hosting</li>
            <li>&gt;</li>
            <li>Hosting6</li>
            <li>&gt;</li>
            <li>Hosting5</li>
           </ul>
         </div>
    </div>
  )
}

export default MainBuild