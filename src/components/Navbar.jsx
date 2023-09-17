import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { menu, close } from "../assets";
import Menu from "./Menu";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div
        className={"w-full flex justify-between items-center max-w-7xl mx-auto"}
      >
        <Link
          to='/'
          className={"flex items-center gap-2"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <LogoIcon className='w-9 h9 object-contain' alt='logo' />
        </Link>
        <Menu active={active} setActive={setActive} isMobile={false} />
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={isOpenMenu ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
          <div
            className={`${
              isOpenMenu ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <Menu
              active={active}
              setActive={setActive}
              isOpenMenu={isOpenMenu}
              setIsOpenMenu={setIsOpenMenu}
              isMobile={true}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
