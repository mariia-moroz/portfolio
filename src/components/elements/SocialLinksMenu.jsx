import { socialLinks } from "../../constants";

const SocialLinksMenu = () => {
  return (
    <ul className='list-none flex gap-4 mt-6'>
      {socialLinks.map(link => (
        <li
          key={link.title}
          className='flex green-pink-gradient-border-circle cursor-pointer'
        >
          <a
            href={link.link}
            rel='noopener noreferrer'
            target='_blank'
            className='flex items-center justify-center glassmorphism md:p-4 p-3 rounded-full'
          >
            {
              <link.icon
                className='sm:w-[36px] w-[32px] sm:h-[36px] h-[32px] object-contain'
                alt={link.title}
              />
            }
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinksMenu;
