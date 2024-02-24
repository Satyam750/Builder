import React from 'react'
import comp from '../../../public/comp.png'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
const MainMid = () => {
  return (
   <div className='flex flex-col gap-8'>

     <div className='relative z-[1]'>
    <div className='absolute bg-orange-500 text-white px-8 rounded-r-xl py-2 top-[-1vw]'><h1>Best Choice</h1></div>
    <div className='h-[2vw] w-[2vw] rounded-full bg-white border border-gray-400 absolute top-[1.8vw] left-[-1vw] flex items-center justify-center'>1</div>
    <div className='square flex h-[16vw] w-full bg-white rounded-xl p-5 gap-10'>
           <div className='flex flex-col mt-9'>
            <Image src={comp} alt='computer'/>
            <h1 className='ml-10 pt-3 text-[.9vw]'>Builder 1</h1>
           </div>
           <div className='flex flex-col gap-3 w-[33vw]'>
              <div className=''><p className='font-semibold'>WixPro 72-Inch Responsive Website Builder- <span className='font-normal text-[.9vw]'>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</span></p></div>
              <div className='ml-2'><h1 className='font-semibold'>Main highlights</h1>
              <p className='font-normal text-[.9vw] ml-4'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p></div>
              <div className='text-[.9vw] ml-2 text-blue-400 flex gap-2 items-center'><p>Show more</p> <IoIosArrowDown/></div>

           </div>

           <div className='relative'>
               <div className='h-[7vw] w-[8vw] bg-blue-100 absolute top-[-1.4vw] flex flex-col gap-2 items-center rounded-b-xl left-10 '>
                      <h1 className='font-semibold text-[1.8vw] text-blue-900'>9.8</h1>
                      <p className='font-normal text-[.9vw] text-blue-900'>Exceptional</p>
                    <div className='flex text-[.7vw]'>
                    <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                    </div>
               </div>
               <button className='px-[6vw] py-3 bg-blue-400 text-white rounded-xl hover:bg-blue-900 absolute top-[9vw] left-2'>
                   View
               </button>
           </div>
    </div>
    </div>
     <div className='relative'>
    <div className='absolute bg-orange-500 text-white px-8 rounded-r-xl py-2 top-[-1vw]'><h1>Best Value</h1></div>
    <div className='h-[2vw] w-[2vw] rounded-full bg-white border border-gray-400 absolute top-[1.8vw] left-[-1vw] flex items-center justify-center'>2</div>
    <div className='square flex h-[16vw] w-full bg-white rounded-xl p-5 gap-10'>
           <div className='flex flex-col mt-9'>
            <Image src={comp} alt='computer'/>
            <h1 className='ml-10 pt-3 text-[.9vw]'>Builder</h1>
           </div>
           <div className='flex flex-col gap-3 w-[33vw]'>
              <div className=''><p className='font-semibold'>SiteCraft 68-Inch Ultimate Web Design Studio-<span className='font-normal text-[.9vw]'>Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</span></p></div>
              <div className='ml-2'><h1 className='font-semibold'>Main highlights</h1>
              <p className='font-normal text-[.9vw] ml-4'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p></div>
              <div className='text-[.9vw] ml-2 text-blue-400 flex gap-2 items-center'><p>Show more</p> <IoIosArrowDown/></div>
           </div>
           <div className='relative'>
               <div className='h-[7vw] w-[8vw] bg-blue-100 absolute top-[-1.4vw] flex flex-col items-center rounded-b-xl left-10 gap-2'>
                      <h1 className='font-semibold text-[1.8vw] text-blue-900'>9.5</h1>
                      <p className='font-normal text-[.9vw] text-blue-900'>Excellent</p>
                      <div className='flex text-[.7vw]'>
                    <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaStarHalfAlt className='text-yellow-300'/>
                    </div>
               </div>
               <button className='px-[6vw] py-3 bg-blue-400 text-white rounded-xl hover:bg-blue-900 absolute top-[9vw] left-2'>
                   View
               </button>
           </div>
    </div>
    </div>

     <div className='relative'>
    <div className='h-[2vw] w-[2vw] rounded-full bg-white border border-gray-400 absolute top-[1.8vw] left-[-1vw] flex items-center justify-center'>3</div>
    <div className='square flex h-[16vw] w-full bg-white rounded-xl p-5 gap-10'>
           <div className='flex flex-col mt-9'>
            <Image src={comp} alt='computer'/>
            <h1 className='ml-10 pt-3 text-[.9vw]'>Builder 1</h1>
           </div>
           <div className='flex flex-col gap-3 w-[33vw]'>
              <div className=''><p className='font-semibold'>WixPro 72-Inch Responsive Website Builder- <span className='font-normal text-[.9vw]'>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</span></p></div>
              <div className='ml-2'><h1 className='font-semibold'>Main highlights</h1>
              <p className='font-normal text-[.9vw] ml-4'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p></div>
              <div className='text-[.9vw] ml-2 text-blue-400'><p>Show more</p></div>

           </div>

           <div className='relative'>
               <div className='h-[7vw] w-[8vw] bg-blue-100 absolute top-[-1.4vw] flex flex-col items-center rounded-b-xl left-10 gap-2 '>
                      <h1 className='font-semibold text-[1.8vw] text-blue-900'>9.3</h1>
                      <p className='font-normal text-[.9vw] text-blue-900'>Exceptional</p>
                      <div className='flex text-[.7vw]'>
                    <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                    </div>
               </div>
               <button className='px-[6vw] py-3 bg-blue-400 text-white rounded-xl hover:bg-blue-900 absolute top-[9vw] left-2'>
                   View
               </button>
           </div>
    </div>
    </div>
     <div className='relative'>
    <div className='h-[2vw] w-[2vw] rounded-full bg-white border border-gray-400 absolute top-[1.8vw] left-[-1vw] flex items-center justify-center'>4</div>
    <div className='square flex h-[28vw] w-full bg-white rounded-xl p-5 gap-10'>
           <div className='flex flex-col mt-9'>
            <Image src={comp} alt='computer'/>
            <h1 className='ml-10 pt-3 text-[.9vw]'>CDK</h1>
           </div>
           <div className='flex flex-col gap-3 w-[33vw]'>
              <div className=''><p className='font-semibold'>CDK Resposive Builder:<span className='font-normal text-[.9vw]'> An extensive library of widgets and apps, and detailed step-by-step guides</span></p></div>
              <div className='text-[.7vw] bg-gray-200 px-[.5vw] py-[.3vw] rounded-[5px] text-blue-800 h-[2vw] w-[4vw]'>26% Off</div>
              <div className='ml-2'><h1 className='font-semibold'>Main highlights</h1>
              <div className='font-normal text-[.9vw] ml-4 w-[30vw] h-[8vw] bg-orange-100 rounded-xl '>
                    <div className='flex gap-4 p-2'>
                    <span className='bg-white text-blue-600 text-[.9vw] py-[.1vw] px-[.4vw]  rounded-[5px]'>9.9</span> <span>Building Responsive</span>
                    </div>
                    
                    <div className='flex gap-4 p-2'>
                    <span className='bg-white text-blue-600 text-[.9vw] py-[.1vw] px-[.4vw]  rounded-[5px]'>8.9</span> <span>Cool</span>
                    </div>
                    
                    <div className='flex gap-4 p-2'>
                    <span className='bg-white text-blue-600 text-[.9vw] py-[.1vw] px-[.4vw]  rounded-[5px]'>98.9</span> <span>Docs</span>
                    </div>
              </div>
              <h1 className='text-[.9vw] mt-5'> Why we love it</h1>
                  <ul className='flex flex-col gap-1 mt-2 text-[.9vw] ml-3 text-gray-500'>
                    <li className='flex gap-1'><FaCheck className='h-5 w-5 text-blue-400 bg-blue-200 flex items-center rounded-full text-[.6vw]'/> Documentation</li>
                    <li className='flex gap-1'><FaCheck className='h-5 w-5 text-blue-400 bg-blue-200 flex items-center rounded-full text-[.6vw]'/> Easy Use</li>
                    <li className='flex gap-1'><FaCheck className='h-5 w-5 text-blue-400 bg-blue-200 flex items-center rounded-full text-[.6vw]'/>Out Of Box</li>
                  </ul>
              </div>
              <div className='text-[.9vw] ml-2 text-blue-400'><p>Show more</p></div>

           </div>
           <div className='relative'>
               <div className='h-[7vw] w-[8vw] bg-blue-100 absolute top-[-1.4vw] flex flex-col items-center rounded-b-xl left-10 gap-2'>
                      <h1 className='font-semibold text-[1.8vw] text-blue-900'>9.1</h1>
                      <p className='font-normal text-[.9vw] text-blue-900'>Very Good</p>
                      <div className='flex text-[.7vw]'>
                    <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaStar className='text-yellow-300'/>
                      <FaRegStar className='text-yellow-300'/>
                    </div>
                      
               </div>
               <button className='px-[6vw] py-3 bg-blue-400 text-white rounded-xl hover:bg-blue-900 absolute top-[22.2vw] left-2'>
                   View
               </button>
           </div>
    </div>
    </div>

   </div>
  )
}

export default MainMid