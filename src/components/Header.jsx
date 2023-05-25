import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Header() {

  
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#cdf3e8] p-4  ">
      <div className="max-w-[1240px] py-[12px]  items-center flex justify-between  mx-auto">
        <div className="text-4xl font-bold text-[#1a4f56]">Kaju Saikia</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-[#1a4f56] gap-10 font-bold cursor-pointer ">
        

          <li className="hover:text-lg hover:text-[#32dac3]" >Home</li>
        
         

          <li className="hover:text-lg hover:text-[#32dac3]">Company</li>

          <li className="hover:text-lg hover:text-[#32dac3]">Resources</li>

          <li className="hover:text-lg hover:text-[#32dac3]" >About</li>

          <li className="hover:text-lg hover:text-[#32dac3]"> Contact</li>
        </ul>

        {/* Responsive menu */}

        <ul className= {`duration-500 md:hidden w-full h-screen text-white fixed bg-black top-[92px]
           ${toggle ? 'left-[0]' : "left-[100%]"}
            `}>


          <li className="p-3">Home</li>

          <li className="p-3">Company</li>

          <li className="p-3">Resources</li>

          <li className="p-3">About</li>

          <li className="p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
}



export default Header;
