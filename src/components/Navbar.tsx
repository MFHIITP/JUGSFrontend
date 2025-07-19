import { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const toggleNavigation = (): void => {
    setIsNavOpen((prevState) => !prevState);
    
  };
  const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#events", label: "Events" },
  { href: "/#gallery", label: "Gallery" },
];
  return (
    <div className=" font-semibold text-lg py-4 top-0 fixed left-0 right-0 bg-black/10 backdrop-filter  backdrop-blur-md text-white  z-[999]">
      {/* For Desktop Screens */}
      <div className="md:flex justify-between items-center maxWidthForSections hidden">
        <div className="">
          <p>LOGO</p>
        </div>

        <div className="flex gap-x-4 ">
          <a href="" className="nav-item">
            Home
          </a>
          <a href="" className="nav-item">
            About Us
          </a>
          <a href="" className="nav-item">
            Events
          </a>
          <a href="" className="nav-item">
            Gallery
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href=""
            className="bg-[#DE0438]  transition-colors duration-200 px-5 py-0.5 w-[100px] flex justify-center rounded-full text-white"
          >
            Login
          </a>

          <a
            href=""
            className="bg-white text-black hover:bg-white/60 hover:text-white transition-colors duration-200 flex justify-center w-[110px] px-5 py-0.5 rounded-full"
          >
            Register
          </a>
        </div>
      </div>
      <div className="maxWidthForSections py-[10px] w-full md:hidden flex justify-between items-center px-4 ">
        <div className="">
          <p>LOGO</p>
        </div>
        <IoMenuOutline className="size-8" onClick={toggleNavigation} />
      </div>

      {/* ---------------opn n close nav------------ */}
        <div
          className={`${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300   fixed flex justify-end  top-0 right-0 w-full h-screen`}
          onClick={toggleNavigation}
        >
          <div
            className="h-full w-2/3 max-w-[300px] flex flex-col bg-gradient-to-b from-[#11110F] to-[#11110F]/60 backdrop-blur-lg  items-end justify-start py-6 px-4"
            onClick={toggleNavigation}
          >
            <IoClose
              className={`close-itemMobile  ${
                isNavOpen ? "icon-is-visible" : "icon-is-hidden"
              } hover:text-[#ec4899] size-8 `}
              onClick={toggleNavigation}
              style={{ "--i-nav": 0.5 } as React.CSSProperties}
            />

            <ul
              className={` flex flex-col items-center gap-y-6 text-lg w-full mt-6`}
            >
              {navItems.map((item, index) => (
                <li
                  onClick={toggleNavigation}
                  key={index}
                  className={`nav-itemMobile nav-item ${
                    isNavOpen ? "is-visible" : "is-hidden"
                  }`}
                  style={{ "--i-nav": index + 1 } as React.CSSProperties}
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
    </div>
  );
};

export default Navbar;
