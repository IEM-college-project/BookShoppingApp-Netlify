import React from 'react';
import { logo } from "../../assets/index";

function Nav() {
  const openHamburgerMenu = () => {
    window.document.getElementById("hidden-nav-menu").classList.remove("hidden");
  }

  const closeHamburgerMenu = () => {
    window.document.getElementById("hidden-nav-menu").classList.add("hidden");
  }

  return (
    <>
      <nav className="hidden px-4 py-3 w-full lg:flex items-center gap-4 font-[Roboto] text-white bg-[#131921]">
        {/* Brand starts here */}
        <div className="px-2 nav-hover">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        {/* Brand ends here */}

        {/* Search starts here */}
        <div className="h-10 flex flex-grow rounded">
          <input className="px-2 flex-grow rounded-l border-none outline-none text-base text-[#131921]" type="text" placeholder="Search bookmybook.in" />
          <span className="w-12 flex justify-center items-center rounded-r cursor-pointer text-[#131921] bg-[#febd69] hover:bg-[#f3a847]">
            <i className="fa-solid fa-magnifying-glass" />
          </span>
        </div>
        {/* Search ends here */}

        {/* Vendor starts here */}
        <div className="px-2 py-2 nav-hover">
          <p>Become a seller</p>
        </div>
        {/* Vendor ends here */}

        {/* Signin starts here */}
        <div className="px-2 py-1 nav-hover">
          <div className="flex flex-col justify-center items-start">
            <p className="text-xs font-light">Hello, sign in</p>
            <p className="text-sm font-semibold">Accounts &amp; Lists <span><i className="fa-solid fa-caret-down" /></span></p>
          </div>
        </div>
        {/* Signin ends here */}

        {/* Orders start here */}
        <div className="px-2 py-1 nav-hover">
          <div className="flex flex-col justify-center items-start">
            <p className="text-xs font-light">Returns</p>
            <p className="text-sm font-semibold">&amp; Orders</p>
          </div>
        </div>
        {/* Orders end here */}

        {/* Cart starts here */}
        <div className="px-2 py-1 nav-hover relative">
          <div className="flex justify-center items-start">
            <div className>
              <i className="fa-solid fa-cart-shopping" />
            </div>
            <p className="mt-3">Cart <span className="absolute top-0.5 left-5 p-1 h-4 flex justify-center items-center rounded-full text-xs text-[#131921] bg-[#febd69]">0</span>
            </p>
          </div>
        </div>
        {/* Cart ends here */}
      </nav>

      <nav className="lg:hidden px-4 py-3 w-full flex flex-col gap-2 font-[Roboto] text-white bg-[#131921]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Hamburger starts here */}
            <div className="flex justify-center items-center">
              <button className onClick={openHamburgerMenu}>
                <i className="fa-solid fa-bars" />
              </button>
            </div>
            {/* Hamburger ends here */}

            {/* Brand starts here */}
            <div className>
              <img className="w-20 mt-3" src={logo} alt="logo" />
            </div>
            {/* Brand ends here */}
          </div>
          <div className="flex items-center gap-1">
            {/* Signin starts here */}
            <div className="flex items-center gap-2">
              <span className="text-xs">Sign in</span>
              <i className="fa-regular fa-user text-xl" />
            </div>
            {/* Signin ends here */}

            {/* Cart starts here */}
            <div className="px-2 py-1 relative">
              <div className="flex justify-center items-start">
                <div className>
                  <i className="fa-solid fa-cart-shopping" />
                </div>
                <p className="mt-3">Cart <span className="absolute top-0.5 left-5 p-1 h-4 flex justify-center items-center rounded-full text-xs text-[#131921] bg-[#febd69]">0</span>
                </p>
              </div>
            </div>
            {/* Cart ends here */}
          </div>
        </div>
        {/* Search starts here */}
        <div className="h-10 flex flex-grow rounded">
          <input className="px-2 flex-grow rounded-l border-none outline-none text-base text-[#131921]" type="text" placeholder="Search bookmybook.in" />
          <span className="w-12 flex justify-center items-center rounded-r cursor-pointer text-[#131921] bg-[#febd69] hover:bg-[#f3a847]">
            <i className="fa-solid fa-magnifying-glass text-2xl" />
          </span>
        </div>
        {/* Search ends here */}
        <div id="hidden-nav-menu" className="hidden lg:hidden w-full h-screen fixed top-0 left-0 bg-opacity-50 bg-slate-800">
          <div className="w-full h-full relative">
            {/* Hamburger menu starts here */}
            <div className="w-[75%] h-full border-r border-black bg-white">
              <span className="mx-2 text-slate-800">Under Maintenance</span>
            </div>
            {/* Hamburger menu ends here */}

            {/* Hamburger close button starts here */}
            <div className="absolute top-10 left-[80%]">
              <button className="px-4 py-2 rounded hover:bg-red-500" onClick={closeHamburgerMenu}>
                <i className="fa-solid fa-xmark text-2xl" />
              </button>
            </div>
            {/* Hamburger close button ends here */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
