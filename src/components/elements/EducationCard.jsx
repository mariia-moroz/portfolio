import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationCard = ({ education }) => {
  const { title, universityName, icon, iconBg, date, points } = education;
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
            alt={universityName}
            className='w-[76%] h-[76%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {universityName}
        </p>
        <ul className='mt-5 list-disc ml-5 lg:mb-0 mb-2 space-y-2'>
          {points.map((point, index) => {
            return (
              <li
                key={`${title}-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
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

export default EducationCard;
