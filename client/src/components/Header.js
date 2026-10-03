import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartImg, lightBouti } from "../assets/index";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="w-full bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-16 sm:h-20 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={lightBouti} alt="lightBouti" />
          </div>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5 lg:gap-8">
              <li>
                <Link onClick={closeMenu} to="/" className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Home
                </Link>
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Products
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Deals
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Contact Us
              </li>
            </ul>
          </nav>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="userLogo"
            />
          </Link>

          {userInfo && (
            <p className="hidden lg:block text-base font-titleFont font-semibold underline underline-offset-2 max-w-32 truncate">
              {userInfo.name}
            </p>
          )}
          <button
            type="button"
            className="md:hidden p-2 text-2xl"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white px-4 py-3">
          <ul className="flex flex-col gap-3">
            <li><Link onClick={closeMenu} to="/" className="block py-1 font-bold">Home</Link></li>
            <li className="py-1 font-bold">Products</li>
            <li className="py-1 font-bold">Deals</li>
            <li className="py-1 font-bold">Contact Us</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
