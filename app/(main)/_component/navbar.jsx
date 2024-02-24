import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[4vw] w-full bg-black text-white fixed top-0 z-50'>
        <div className=' flex items-center py-6 relative'>
        <div className='absolute left-[20vw] top-[.6vw]'>
        <label className=" bg-white text-black outline-none border-none flex items-center gap-2 rounded-xl ">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 ml-3"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow text-black bg-white outline-none border-none py-2 rounded-xl" placeholder="Search" />
</label>
         </div>
         <div className='absolute left-[50vw]'>
            <ul className='flex gap-12'>
                <li className='hover:text-gray-500 transition-all ease-in-out duration-150 cursor-pointer'>Categoies</li>
                <li className='hover:text-gray-500 transition-all ease-in-out duration-150 cursor-pointer'>Website Builders</li>
                <li className='hover:text-gray-500 transition-all ease-in-out duration-150 cursor-pointer'>Today's deals</li>
                
            </ul>
         </div>
        </div>
    </div>
  )
}

export default Navbar