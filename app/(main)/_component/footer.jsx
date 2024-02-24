import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className='flex text-white gap-[15vw] pt-[3vw]'>
    <div className='flex gap-[20vw]'>
        <ul className=' flex flex-col gap-5'> 
             <h1 className='text-xl font-semibold'> CATEGORIES</h1>
            <li className='text-[.9vw] hover:text-gray-600 transition-all ease-in-out duration-150 cursor-pointer'>Web Builder</li>
            <li className='text-[.9vw] hover:text-gray-600 transition-all ease-in-out duration-150 cursor-pointer'>Hosting</li>
            <li className='text-[.9vw] hover:text-gray-600 transition-all ease-in-out duration-150 cursor-pointer'>Data Center</li>
            <li className='text-[.9vw] hover:text-gray-600 transition-all ease-in-out duration-150 cursor-pointer'>Robotic-Automation</li>
        </ul>
        <ul className='flex flex-col gap-5'> 
        <h1 className='text-xl font-semibold'> CATEGORIES</h1>
            <li className='text-[.9vw] hover:text-gray-600 transition-all ease-in-out duration-150 cursor-pointer'>Contact</li>
            <li className='text-[.9vw] hover:text-gray-600 transition-all ease-in-out duration-150 cursor-pointer'>Privacy Policy</li>
            <li className='text-[.9vw] hover:text-gray-600 transition-all ease-in-out duration-150 cursor-pointer'> Terms Of Service</li>
            <li className='text-[.9vw] hover:text-gray-600 transition-all ease-in-out duration-150 cursor-pointer'>Categories</li>
            <li className='text-[.9vw] hover:text-gray-600 transition-all ease-in-out duration-150 cursor-pointer'>About</li>
        </ul>
    </div>
    <div className='mt-[6vw] flex gap-3'>
        <h1 className='text-[.9vw] hover:text-gray-600 transition-all ease-in-out duration-150 cursor-pointer'>United States</h1>
        <IoIosArrowDown className="mt-1 cursor-pointer"/>
    </div>
    </div>
  )
}

export default Footer