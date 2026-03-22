import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ProgressCard = ({ progress }) => {
  const { title, place, icon, iconBg, date, points } = progress;
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#2e2369ea", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={icon}
            alt={place}
            className='w-[76%] h-[76%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p className='mt-1 text-secondary text-[18px] font-semibold'>{place}</p>
        <ul className='mt-2 list-disc ml-5 lg:mb-0 mb-2 space-y-2'>
          {points.map((point, index) => {
            return (
              <li
                key={`${title}-${index}`}
                className='text-white-100 xs:text-[16px] sm:text-[16px] text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

export default ProgressCard;
