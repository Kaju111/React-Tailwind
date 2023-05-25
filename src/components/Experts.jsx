import React from "react";
import laptop from "../assets/laptop.jpg";
import { useState } from "react";
import Page from "./Page";

const Experts = () => {

const [from, setFrom] = useState ("Page");

  
  return (
    <div className="max-w-[1240px] p-2 my-10 mx-auto md:grid grid-cols-2 ">
      <div className=" col-span-1 md:w-[80%] text-center">
        <img src={laptop} alt="" className="inline" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center">
        <h1 className="text-[#53dcd5] font-bold tracking-[2px]">LEARN FROM EXPERTS</h1>
        <p className="my-4 text-justify text-[#077b8a] tracking-[1px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          deserunt nisi dolore totam natus id alias quaerat necessitatibus rerum
          sed ipsa impedit itaque architecto magnam, fugiat consectetur beatae
          perspiciatis adipisci!
        </p>
        <button onClick={()=>setFrom()}  className="bg-[#077b8a] hover:scale-105 duration-500 shadow-2xl text-white p-3 rounded w-52 font-bold">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Experts;
