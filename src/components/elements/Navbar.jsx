import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { Logo } from "../../assets";
import { menu, close } from "../../assets";
import { Menu, ContactButton } from "../../components";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onLinkClick = (title, isMobile) => {
    if (isMobile) {
      setIsOpenMenu(!isOpenMenu);
    }
    setActive(title);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 bg-[#0D0829]] ${
        scrolled ? "bg-[#0D0829]" : "bg-transparent"
      }`}
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
          <Logo className='w-9 h9 object-contain' alt='logo' />
        </Link>
        <Menu active={active} onLinkClick={onLinkClick} isMobile={false} />
        <div className='md:hidden md:w-0 flex md:flex-1 ml-6 justify-end items-center'>
          <div className='flex items-center gap-6'>
            <ContactButton onLinkClick={onLinkClick} />
            <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
              <img
                src={isOpenMenu ? close : menu}
                alt='menu'
                className='w-[28px] h-[28px] object-contain cursor-pointer'
              />
            </button>
          </div>
          <div
            className={`${
              isOpenMenu ? "flex" : "hidden"
            } px-8 py-6 bg-gradient-to-r from-[#373061] to-[#1d0745] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <Menu active={active} onLinkClick={onLinkClick} isMobile={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
