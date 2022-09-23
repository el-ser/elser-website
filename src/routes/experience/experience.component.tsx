import { FaFlask } from "react-icons/fa";

import MainWrapper from "../../components/main-wrapper/main-wrapper.component";
import PageTitle from "../../components/page-title/page-title.component";
import ExperienceItem from "../../components/experience-item/experience-item.component";
import { IconType } from "react-icons/lib";

export type ExpItem = {
  id?: number
  title: string;
  icon: IconType;
  description: string;
  techStack: string[];
}

const experienceItems: ExpItem[] = [
  {
    id: 1,
    title: "Cucumber and PactumJS for API Test Automation",
    icon: FaFlask,
    description: `morbi tincidunt augue interdum velit euismod in pellentesque massa
    placerat duis ultricies lacus sed turpis tincidunt id aliquet risus
    feugiat in ante metus dictum at tempor commodo ullamcorper a lacus
    vestibulum sed arcu non odio euismod lacinia at quis risus sed
    vulputate odio ut enim blandit volutpat maecenas volutpat blandit`,
    techStack: ["Cucumber-js", "PactumJS", "GitLab"],
  },
  {
    id: 2,
    title: "Cucumber and PactumJS for API Test Automation",
    icon: FaFlask,
    description: `morbi tincidunt augue interdum velit euismod in pellentesque massa
    placerat duis ultricies lacus sed turpis tincidunt id aliquet risus
    feugiat in ante metus dictum at tempor commodo ullamcorper a lacus
    vestibulum sed arcu non odio euismod lacinia at quis risus sed
    vulputate odio ut enim blandit volutpat maecenas volutpat blandit`,
    techStack: ["Cucumber-js", "PactumJS", "GitLab"],
  },
];

const Experience = () => {
  return (
    <MainWrapper>
      <div className="flex justify-center">
        <PageTitle
          title="Experience"
          additionalClass="animate-fade-in-slide-up-500"
        />
      </div>

      <section className="flex flex-col justify-center items-center gap-16">
        {experienceItems.map((item) => {
          const { id, title, icon, description, techStack } = item;
          return (
            <ExperienceItem
              key={id}
              title={title}
              icon={icon}
              description={description}
              techStack={techStack}
            />
          );
        })}
      </section>
    </MainWrapper>
  );
};

export default Experience;
