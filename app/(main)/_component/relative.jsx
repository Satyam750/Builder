import React from 'react'

import comp from "../../../public/comp.png"
import Image from 'next/image'


const Relative = () => {

  const data = [
    {  id:1,
       img:comp,
       off:"20% Off",
       limit:"Limited time",
       web:"Webbuilder 1",
       comp:"Computer Modern clasic with wix support",
       rate:"$39.96",
       orate:"$49.96",
       btn:"View Deal"
  },
    {  id:2,
       img:comp,
       off:"20% Off",
       limit:"Limited time",
       web:"Webbuilder 1",
       comp:"Computer Modern clasic with wix support",
       rate:"$39.96",
       orate:"$49.96",
       btn:"View Deal"
  },
    {  id:2,
       img:comp,
       off:"20% Off",
       limit:"Limited time",
       web:"Webbuilder 1",
       comp:"Computer Modern clasic with wix support",
       rate:"$39.96",
       orate:"$49.96",
       btn:"View Deal"
  },
  
]

  return (
    <div>
    <div><h1 className='text-[2vw]'>Related deals you might like for</h1></div>
    <div className='flex gap-6'>
    {data.map((i)=>(
        <div className='h-[22.5vw] w-[18vw] bg-white mt-[2vw] rounded-xl px-[1vw] flex flex-col gap-2 ml-8'>
        <div className='img flex items-center justify-center' >
             <Image src={i.img} alt='computer'/>
        </div>
        <div className='flex gap-2 items-center  mt-[1.3vw]'>
        <h1 className='bg-gray-100 px-[.3vw] py-[.2vw] text-[.7vw] rounded-[5px]'>{i.off}</h1>
        <h1 className='bg-gray-100 px-[.3vw] py-[.2vw] text-[.7vw] rounded-[5px]'>{i.limit}</h1>
        </div>
        <div className='text-[1.1vw] font-bold flex items-center justify-center text-gray-600'>
            {i.web}
        </div>
        <div className='text-[1vw] text-gray-500'>
            {i.comp}
        </div>
        <div className='flex items-center gap-3'>
            <h1 className='text-[1.1vw] '>{i.rate}</h1>
            <h1 className='text-[.7vw] text-gray-400'>{i.orate}</h1>
            <h1 className='text-[.8vw] text-red-700'>{`(${i.off})`}</h1>
        </div>
        <button className='py-3 px-10 w-[16vw]  bg-blue-400 text-white rounded-xl hover:bg-blue-900'>{i.btn}</button>
    </div>
    ))}
    </div>
     
    <div className='mt-[5vw] flex gap-[7vw]'>
    <h1 className='text-[2vw] w-[26vw] text-gray-400'>Sign up and get exclusive special deals</h1>
    <div className='flex'>
     <input type="text"  className="px-[2vw]  h-[3vw] bg-white outline-none border-none  w-[20vw] rounded-l-xl" />
     <button className='bg-blue-400 w-[6vw] h-11 text-white rounded-r-xl hover:bg-blue-900'>Sign Up</button>
    </div>
    </div>

    </div>
  )
}

export default Relative