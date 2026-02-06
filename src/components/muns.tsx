import { useState } from "react";

interface Props {
  year: number;
  name: string;
  committee: string;
  portfolio: string;
  award: string;
}
const MUN = ({ year, name, committee, award, portfolio }: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`w-full cursor-custom lg:h-12 hover:h-36 relative before:absolute before:top-0 before:h-px before:w-[200vw] transition-[background] transition-[height] duration-300 ease-in-out before:bg-dark-primary before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-dark-primary after:-left-[100vw] px-2 py-2 hover:text-dark-primary hover:bg-highlight  flex items-center `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span>[{year}]</span>
      <div
        className={`w-full flex lg:flex-row flex-col  ${isHover ? "justify-start" : "justify-between"} lg:items-center grow px-5`}
      >
        <h2 className={`text-2xl ${isHover && "w-1/2"}`}>{name}</h2>
        <div
          className={`flex  justify-between items-center max-w-3/4 ${isHover ? "flex-col" : "flex-row"}`}
        >
          <span
            className={`text-lg text-ellipsis text-nowrap overflow-hidden ${isHover ? "w-full" : "max-w-1/3"}`}
          >
            {committee}
          </span>{" "}
          <span
            className={`text-lg text-ellipsis text-nowrap overflow-hidden ${isHover ? "w-full" : "max-w-1/3"}`}
          >
            {portfolio}
          </span>{" "}
          <span
            className={`text-lg text-ellipsis text-nowrap overflow-hidden ${isHover ? "w-full" : "max-w-1/3"}`}
          >
            {award}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MUN;
