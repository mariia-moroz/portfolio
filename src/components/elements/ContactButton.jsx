const ContactButton = ({ onLinkClick }) => {
  return (
    <a
      href={`#contact`}
      className={
        "button-gradient sm:text-[16px] text-[14px] py-2 px-8 outline-none w-fit text-white font-medium rounded-xl block my-auto cursor-pointer"
      }
      onClick={() => onLinkClick("contact")}
    >
      Contact
    </a>
  );
};

export default ContactButton;
