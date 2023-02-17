import React from 'react';
import './Category.css';
import { cat } from "../../assets/index";

function Category() {
  return (
    <>
      <div className="py-2 shadow-sm shadow-slate-300 bg-white">
        <div id="category-section" className="px-5 flex justify-between gap-6 md:gap-2 overflow-x-auto">
          <div className="py-2 flex flex-col justify-between items-center">
            <img className="w-16" src={cat} alt="category1" />
            <div className="text-sm text-center whitespace-nowrap font-[Poppins]">Non Fiction</div>
          </div>
          <div className="py-2 flex flex-col justify-between items-center">
            <img className="w-16" src={cat} alt="category1" />
            <div className="text-sm text-center whitespace-nowrap font-[Poppins]">Funny Books</div>
          </div>
          <div className="py-2 flex flex-col justify-between items-center">
            <img className="w-16" src={cat} alt="category1" />
            <div className="text-sm text-center whitespace-nowrap font-[Poppins]">Technology</div>
          </div>
          <div className="py-2 flex flex-col justify-between items-center">
            <img className="w-16" src={cat} alt="category1" />
            <div className="text-sm text-center whitespace-nowrap font-[Poppins]">Science</div>
          </div>
          <div className="py-2 flex flex-col justify-between items-center">
            <img className="w-16" src={cat} alt="category1" />
            <div className="text-sm text-center whitespace-nowrap font-[Poppins]">Programming</div>
          </div>
          <div className="py-2 flex flex-col justify-between items-center">
            <img className="w-16" src={cat} alt="category1" />
            <div className="text-sm text-center whitespace-nowrap font-[Poppins]">Romance</div>
          </div>
          <div className="py-2 flex flex-col justify-between items-center">
            <img className="w-16" src={cat} alt="category1" />
            <div className="text-sm text-center whitespace-nowrap font-[Poppins]">Literature</div>
          </div>
          <div className="py-2 flex flex-col justify-between items-center">
            <img className="w-16" src={cat} alt="category1" />
            <div className="text-sm text-center whitespace-nowrap font-[Poppins]">Top Offers</div>
          </div>
          <div className="py-2 flex flex-col justify-between items-center">
            <img className="w-16" src={cat} alt="category1" />
            <div className="text-sm text-center whitespace-nowrap font-[Poppins]">Tragedy</div>
          </div>
          <div className="py-2 flex flex-col justify-between items-center">
            <img className="w-16" src={cat} alt="category1" />
            <div className="text-sm text-center whitespace-nowrap font-[Poppins]">Mystery</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
