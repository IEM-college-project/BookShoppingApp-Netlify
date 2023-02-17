import React from 'react';
import { logo } from "../../assets/index";

function Footer() {
  return (
    <>
      <div className="hidden md:block px-8 py-6 bg-white">
        <div className="flex justify-between items-center">
          <div className="px-4 flex justify-between items-center gap-4">
            <img className="w-[50px] rounded-full border-2 border-slate-300" src={logo} alt="brand" />
            <div className="font-[Poppins] font-semibold text-xl text-[#f7407d]">BookWorm.in</div>
            <div className="h-10 w-0.5 bg-slate-200"></div>
            <div className="font-[Poppins] text-sm text-slate-600">Copyright © 2023 bookworm.in</div>
          </div>
          <div className="px-4">
            <ul className="flex justify-between items-center gap-4">
              <li><i class="fa-brands fa-facebook-f text-xl cursor-pointer text-slate-500 hover:text-[#f7407d]"></i></li>
              <li><i class="fa-brands fa-twitter text-xl cursor-pointer text-slate-500 hover:text-[#f7407d]"></i></li>
              <li><i class="fa-brands fa-instagram text-xl cursor-pointer text-slate-500 hover:text-[#f7407d]"></i></li>
              <li><i class="fa-brands fa-whatsapp text-xl cursor-pointer text-slate-500 hover:text-[#f7407d]"></i></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:hidden px-8 py-6 bg-white">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="px-4 flex justify-center items-center gap-4">
            <img className="w-[50px] rounded-full border-2 border-slate-300" src={logo} alt="brand" />
            <div className="font-[Poppins] font-semibold text-xl text-[#f7407d]">BookWorm.in</div>
          </div>
          <div className="font-[Poppins] whitespace-nowrap text-sm text-slate-600">Copyright © 2023 bookwork.in</div>
          <div className="px-4">
            <ul className="flex justify-between items-center gap-4">
              <li><i class="fa-brands fa-facebook-f text-xl cursor-pointer text-slate-500 hover:text-[#f7407d]"></i></li>
              <li><i class="fa-brands fa-twitter text-xl cursor-pointer text-slate-500 hover:text-[#f7407d]"></i></li>
              <li><i class="fa-brands fa-instagram text-xl cursor-pointer text-slate-500 hover:text-[#f7407d]"></i></li>
              <li><i class="fa-brands fa-whatsapp text-xl cursor-pointer text-slate-500 hover:text-[#f7407d]"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
