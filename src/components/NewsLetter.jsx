import React from "react";

function NewsLetter() {
  return (
    <div className="bg-[#a2d5c6] p-4 h-[500px]">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">

      <div className="m-2">
        <h1 className="text-[20px] md:text-[40px] font-bold text-[#077b8a]">
          Want to learn latest I.T skills?
        </h1>
        <span className="text-[#077b8a]">
          Sign up to our newsletter and stay up to date.
        </span>
      </div>

      <div className="m-2">
        <input
          type="text"
          className="rounded mb-2 p-3 mr-2 text-slate-600 "
          placeholder="Email"
        />
        <button className="bg-[#077b8a] hover:scale-105 duration-500 shadow-2xl text-white p-3 rounded">Notify Me</button>
        <br />
        <p className="text-[#077b8a]">
          We care bout the protection of your data. Read our<br />
          <a href="" className="text-[#1a4c5d]">
            
            privacy policy.
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default NewsLetter;







