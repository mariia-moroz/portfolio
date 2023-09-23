import { navLinks } from "../../constants";
import { ContactButton } from "../../components";

const Menu = props => {
  const { active, onLinkClick, isMobile } = props;

  return (
    <ul
      className={`list-none ${
        isMobile
          ? "flex justify-end items-start flex-col gap-4"
          : "hidden md:flex flex-row gap-10 items-center"
      }`}
    >
      {navLinks.map(
        ({ id, title }) =>
          id !== "contact" && (
            <li
              key={id}
              className={`${
                active === title ? "text-white" : "text-secondary"
              } ${
                isMobile
                  ? "font-poppins text-[16px]"
                  : "hover:text-white text-[18px]"
              }  font-medium cursor-pointer`}
              onClick={() => onLinkClick(title, isMobile)}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          )
      )}
      {!isMobile && (
        <li key='contact'>
          <ContactButton onLinkClick={onLinkClick} />
        </li>
      )}
    </ul>
  );
};

export default Menu;
