import { IconContext } from "react-icons";
import type { ExpItem } from "../../routes/experience/experience.component";

const ExperienceItem = ({title, icon: Icon, description, techStack }: ExpItem) => {
  return (
    <>
      <div className="flex flex-col gap-8 animate-fade-in-slide-up-1000">
        <div className="flex flex-col gap-8 items-center md:flex-row">
          <div className="flex flex-col items-center gap-4 md:w-1/4">
            <IconContext.Provider value={{ color: "white" }}>
              <Icon className="h-full w-1/4 md:w-2/5" />
            </IconContext.Provider>
            <h2 className="font-lexendDeca font-bold text-xl text-center">
              {title}
            </h2>
          </div>
          <p className="font-poppins text-lg text-justify md:w-1/2">
            {description}
          </p>
          <div className="flex flex-col gap-4 self-start md:w-1/4 md:items-center">
            <h3 className="font-lexendDeca font-bold text-xl">Tech Stack</h3>
            <ul>
              {techStack.map((text, index) => (
                <li key={index} className="list-disc ml-8">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-1 rounded-lg w-full" />
      </div>
    </>
  );
};

export default ExperienceItem;
