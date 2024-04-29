"use client"

import { FaPlus, FaEnvelopeOpenText, FaTrash, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Navbar from "../navbar/page";

export default function Sidebar() {

  const [isSideOpen, setIsSideOpen] = useState(false)

  


  const handleSide = () => {
    setIsSideOpen(!isSideOpen)
  }

  const handleSideClose = () => {
    setIsSideOpen(false)
  }

  return (
    <>
        

       <div className="bg-white text-2xl h-[20px] absolute flex flex-row items-center py-4 w-screen xl:hidden">
        <button className="px-5" onClick={handleSide}>{isSideOpen ? <FaTimes  />:<FaBars />}</button>
        <p>History</p>
      </div> 

        {isSideOpen && (
          
      <div className="bg-white h-full w-[80%] xl:w-[17%]  flex-col pt-10 xl:hidden absolute" >
        <button className="text-2xl mx-8 mb-8" onClick={handleSideClose}><FaTimes /></button>
        <button className="py-2 rounded-lg px-2 border border-black flex text-sm items-center space-x-3 w-[40%] mx-8"><FaPlus /> <span>Prepare Speech</span></button>

        <div>
          <p className="text-[#959595] text-sm pt-10 px-5 pb-5">Today</p>
          <p className="text-black text-sm flex hover:text-[#6947BB] px-4 space-x-3 hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /><span>Keynote Speech for Developers</span></p>
          <p className="flex hover:text-[#6947BB] space-x-3 py-3 px-4 text-black text-sm hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /> <span>AI adoption in medicine</span></p>
        </div>

        <div>
          <p className="text-[#959595] text-sm pt-10 px-5 pb-5">This week</p>
          <p className="text-black text-sm flex hover:text-[#6947BB] px-4 space-x-3 hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /><span>Delivery help and commision</span></p>
          <p className="flex hover:text-[#6947BB] space-x-3 py-3 px-4 text-black text-sm hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /> <span>Keynote Speech for Developers</span></p>
        </div>

        <div>
          <p className="text-[#959595] text-sm pt-10 px-5 pb-5">Past 30 days</p>
          <p className="text-black text-sm flex hover:text-[#6947BB] px-4 space-x-3 hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /><span>Keynote Speech for Developers</span></p>
          <p className="flex hover:text-[#6947BB] space-x-3 py-3 px-4 text-black text-sm hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /> <span>Keynote Speech for Developers</span></p>
        </div>

        <div className="flex flex-row justify-center items-center space-x-4 border-t-2 border-[#E3E3E3] w-[80%] mx-auto mt-60 py-4 text-[#E85B67]">
          <p><FaTrash /></p>
          <p>Delete</p>
        </div>
      </div>
      )}



      <div className="bg-white h-full w-[80%] xl:w-[17%] xl:flex flex-col pt-10 hidden">
        <button className="py-2 rounded-lg px-2 border border-black flex text-sm items-center space-x-3 w-[80%] mx-auto"><FaPlus /> <span>Prepare Speech</span></button>

        <div>
          <p className="text-[#959595] text-sm pt-10 px-5 pb-5">Today</p>
          <p className="text-black text-sm flex hover:text-[#6947BB] px-4 space-x-3 hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /><span>Keynote Speech for Developers</span></p>
          <p className="flex hover:text-[#6947BB] space-x-3 py-3 px-4 text-black text-sm hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /> <span>AI adoption in medicine</span></p>
        </div>

        <div>
          <p className="text-[#959595] text-sm pt-10 px-5 pb-5">This week</p>
          <p className="text-black text-sm flex hover:text-[#6947BB] px-4 space-x-3 hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /><span>Delivery help and commision</span></p>
          <p className="flex hover:text-[#6947BB] space-x-3 py-3 px-4 text-black text-sm hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /> <span>Keynote Speech for Developers</span></p>
        </div>

        <div>
          <p className="text-[#959595] text-sm pt-10 px-5 pb-5">Past 30 days</p>
          <p className="text-black text-sm flex hover:text-[#6947BB] px-4 space-x-3 hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /><span>Keynote Speech for Developers</span></p>
          <p className="flex hover:text-[#6947BB] space-x-3 py-3 px-4 text-black text-sm hover:border-l-2 hover:border-l-[#6947BB]"><FaEnvelopeOpenText /> <span>Keynote Speech for Developers</span></p>
        </div>

        <div className="flex flex-row justify-center items-center space-x-4 border-t-2 border-[#E3E3E3] w-[80%] mx-auto mt-60 py-4 text-[#E85B67]">
          <p><FaTrash /></p>
          <p>Delete</p>
        </div>
      </div>


    </>
  );
}
