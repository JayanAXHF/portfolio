interface Props {
  index: number;
  title: string;
  description: string;
  link: string;
}
const Project = ({ index, title, description, link }: Props) => {
  return (
    <a href={link}>
      <div
        className={`w-full lg:h-36 relative before:absolute before:top-0 before:h-px before:w-[200vw] transition-[background] duration-600 ease-in-out
            before:bg-light-primary before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-light-primary after:-left-[100vw] px-2 py-2 hover:text-dark-primary hover:bg-highlight  flex items-center`}
      >
        <span>[{index}]</span>
        <div className="w-full flex flex-row justify-between items-center grow px-5">
          <h2 className="md:text-5xl text-2xl">{title}</h2>
          <p className="text-lg max-w-1/2 text-wrap overflow-hidden">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Project;
