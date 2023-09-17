import React from "react";

import { navLinks } from "../constants";

const Menu = props => {
  const { active, setActive, isOpenMenu, setIsOpenMenu, isMobile } = props;

  const onLinkClick = title => {
    if (isMobile) {
      setIsOpenMenu(!isOpenMenu);
    }
    setActive(title);
  };

  return (
    <ul
      className={`list-none ${
        isMobile
          ? "flex justify-end items-start flex-col gap-4"
          : "hidden sm:flex flex-row gap-10"
      }`}
    >
      {navLinks.map(link => (
        <li
          key={link.id}
          className={`${
            active === link.title ? "text-white" : "text-secondary"
          } ${
            isMobile
              ? "font-poppins text-[16px]"
              : "hover:text-white text-[18px]"
          }  font-medium cursor-pointer`}
          onClick={() => onLinkClick(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
