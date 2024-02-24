import Footer from "./_component/footer";
import MainBuild from "./_component/mainBuild";
import MainMid from "./_component/mainMid";
import Navbar from "./_component/navbar";
import Relative from "./_component/relative";


export default function Home() {
  return (
    <>
      
  <div className="h-[4vw] w-full ">
    <Navbar/>
  </div>
 <div className="h-[13vw] w-full bg-gray-50  text-black">
 <MainBuild/>
 </div>
 <div className="h-[85vw] w-full bg-gray-50 text-black px-[15vw] py-[1.2vw]">
  <MainMid/>
 </div>
 <div className="h-[45vw] w-full bg-gray-50 text-black px-[15vw] py-[1.2vw]">
  <Relative/>
 </div>
 <div className="h-[30vw] w-full bg-black text-white px-[15vw] py-[1.2vw]">
   <Footer/>
 </div>
    </>
  );
}
