import { FaFlask } from "react-icons/fa";

import MainWrapper from "../../components/main-wrapper/main-wrapper.component";
import PageTitle from "../../components/page-title/page-title.component";
import ExperienceItem from "../../components/experience-item/experience-item.component";

const experienceItems = [
  {
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
          const { title, icon, description, techStack } = item;
          return (
            <ExperienceItem
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
