import { useLocation, Link } from "react-router-dom";
import { FaThLarge } from "react-icons/fa";

import { MdGroups } from "react-icons/md";
import { GrTest } from "react-icons/gr";
import { motion } from "framer-motion";

import { MdGroupAdd } from "react-icons/md";
import styled from "styled-components";
import Brand from "../img/brand.png";

const StyledSide = styled.aside`
  background-color: #fff;

  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-right: 1px solid transparent;
  height: 100%;
  width: 100%;
`;

const SideBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const getUser = JSON.parse(localStorage.getItem("user"));
  const isAdmin = getUser?.role === "admin";
  const isManager = getUser?.role === "manager";
  const isGeneralRole =
    getUser?.role === "admin" || getUser?.role === "manager";

  ///Split pahtname by creteria to get the current location
  const splittedPath = pathname.split("/");

  return (
    <StyledSide>
      <div className="h-[50%] w-full border-b border-slate-300   ">
        <div className="p-8 border-b border-slate-300  ">
          <Link to="/dashboard">
            <img src={Brand} alt="brand image" className="w-15 h-10 " />
          </Link>
        </div>
        <ul className="flex flex-col   w-full justify-center   ">
          <Link to="/dashboard">
            <motion.li
              whileTap={{ scale: 0.6 }}
              className={
                splittedPath[1] === "dashboard"
                  ? "w-full flex px-16 py-4 bg-[#004F9E] text-white  items-center gap-2 "
                  : "w-full flex gap-2 px-16 py-4 items-center text-black p-5 hover:bg-[#c1d0de]  "
              }
            >
              <FaThLarge
                className={
                  splittedPath[1] === "dashboard" ? "text-white" : "text-black"
                }
              />
              <h3> Dashboard</h3>
            </motion.li>
          </Link>

          {/* {!isLab && (
            <Link to="/patients">
              <motion.li
                whileTap={{ scale: 0.6 }}
                className={
                  splittedPath[1] === "patients"
                    ? "w-full bg-[#004F9E] px-16 py-4 text-white flex  items-center gap-2 "
                    : "w-full flex items-center  px-16 py-4 text-black p-5 gap-2 hover:bg-[#c1d0de]  "
                }
              >
                <TbWheelchair
                  className={
                    splittedPath[1] === "patients"
                      ? "text-white text-xl"
                      : "text-black text-xl"
                  }
                />
                <h3>Patients</h3>
              </motion.li>
            </Link>
          )} */}
          {isGeneralRole && (
            <Link to="/employees">
              <motion.li
                whileTap={{ scale: 0.6 }}
                className={
                  splittedPath[1] === "employees"
                    ? "w-full bg-[#004F9E] px-16 py-4  text-white flex  items-center gap-2 "
                    : "w-full flex items-center px-16 py-4 text-black p-5 gap-2  hover:bg-[#c1d0de]  "
                }
              >
                <MdGroups
                  className={
                    splittedPath[1] === "employees"
                      ? "text-white"
                      : "text-black"
                  }
                />
                <h3>Employees</h3>
              </motion.li>
            </Link>
          )}
          {isAdmin && (
            <Link to="/lab-tests">
              <motion.li
                whileTap={{ scale: 0.6 }}
                className={
                  splittedPath[1] === "lab-tests"
                    ? "w-full bg-[#004F9E] px-16 py-4 text-white flex  items-center  gap-2 "
                    : "w-full flex items-center px-16 py-4 text-black p-5 gap-2 hover:bg-[#c1d0de]  "
                }
              >
                <GrTest
                  className={
                    splittedPath[1] === "lab-tests"
                      ? "text-white"
                      : "text-black"
                  }
                />

                <h3> Lab tests</h3>
              </motion.li>
            </Link>
          )}
        </ul>
      </div>

      {/* Second section  */}
      <ul className="h-[40%] flex flex-col   w-full justify-start ">
        {/* <Link to="/settings">
          <motion.li
            whileTap={{ scale: 0.6 }}
            className={
              splittedPath[1] === "settings"
                ? "w-full bg-[#004F9E] px-16 py-4 text-white flex  items-center  "
                : "w-full flex items-center px-16 py-4 text-black p-5 gap-2 hover:bg-[#c1d0de] "
            }
          >
            <VscSettings
              className={
                splittedPath[1] === "settings" ? "text-white" : "text-black"
              }
            />
            <h3>Settings</h3>
          </motion.li>
        </Link> */}
        {/* <Link to="/support">
          <motion.li
            whileTap={{ scale: 0.6 }}
            className={
              splittedPath[1] === "support"
                ? "w-full bg-[#004F9E] px-16 py-4 text-white flex  items-center gap-2 "
                : "w-full flex items-center  px-16 py-4 text-black p-5 gap-2 hover:bg-[#c1d0de] "
            }
          >
            <MdHelpOutline
              className={
                splittedPath[1] === "support" ? "text-white" : "text-black"
              }
            />

            <h3>Help & Support</h3>
          </motion.li>
        </Link> */}
        {isAdmin && !isManager && (
          <Link to="/display">
            <motion.li
              whileTap={{ scale: 0.6 }}
              className={
                splittedPath[1] === "display"
                  ? "w-full bg-[#004F9E] px-16 py-4 text-white flex  items-center gap-2 "
                  : "w-full flex items-center  px-16 py-4 text-black p-5 gap-2 hover:bg-[#c1d0de]  "
              }
            >
              <MdGroupAdd
                className={
                  splittedPath[1] === "account" ? "text-white" : "text-black"
                }
              />

              <h3>Display </h3>
            </motion.li>
          </Link>
        )}
      </ul>
    </StyledSide>
  );
};

export default SideBar;
