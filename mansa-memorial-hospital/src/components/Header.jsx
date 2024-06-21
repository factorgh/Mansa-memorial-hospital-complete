import { FaSearch } from "react-icons/fa";
import { FaSortAlphaUp } from "react-icons/fa";
import Profile from "../img/profile.png";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

import { MdArrowDropDown, MdLogout, MdOutlineClose } from "react-icons/md";
import { useState } from "react";
// import { useLogout } from "../hooks/useLogout";
// import { QueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const queryClient = new QueryClient();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  // const { isSuccess } = useLogout();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };
  return (
    <>
      <div className="w-full h-30 py-5 bg-[#FFFF] flex justify-end  items-center px-16   top-0 border-b border-gray-200  relative ">
        <div className="flex gap-5 justify-center items-center ">
          <label className="w[200px] flex justify-between items-center p-2 rounded-full border border-slate-500">
            <input
              type="text"
              placeholder="Search patient ...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none w-full text-xsm"
            />
            <FaSearch className="text-slate-500 placeholder:text-slate-500 hover:cursor-pointer" />
          </label>
          <FaSortAlphaUp className="text-[#004F9E] text-2xl hover:cursor-pointer" />
          <div className="border border-s-slate-700 border-slate-50 p-2 flex gap-10 ">
            <div className="flex gap-2 items-center justify-center">
              <div className="w-8 h-8 rounded-full">
                <img src={Profile} alt="" className="w-full object-contain" />
              </div>
              <div className="flex flex-col  items-center justify-normal">
                <h3 className="text-sm ">{user.firstName}</h3>
                <h5 className="text-sm text-slate-500">{user.role}</h5>
              </div>
            </div>

            {isOpen ? (
              <MdOutlineClose
                className="text-4xl p-2 hover:cursor-pointer relative  transition-all ease-in-out duration-100"
                onClick={() => setIsOpen((el) => !el)}
              />
            ) : (
              <MdArrowDropDown
                className="text-5xl p-2 hover:cursor-pointer relative transition-all ease-in-out duration-100"
                onClick={() => setIsOpen((el) => !el)}
              />
            )}
            {isOpen && (
              <div
                className="bg-[#004f9e] text-white p-2 absolute top-20 right-14 rounded-md hover:cursor-pointer  transition-all ease-in-out duration-100"
                onClick={handleLogout}
              >
                <button className="flex text-center text-sm justify-center items-center gap-2 ">
                  Logout <MdLogout />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
