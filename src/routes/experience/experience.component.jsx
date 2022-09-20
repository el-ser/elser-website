import { IconContext } from "react-icons";
import { FaFlask } from "react-icons/fa";

import MainWrapper from "../../components/main-wrapper/main-wrapper.component";
import PageTitle from "../../components/page-title/page-title.component";

const TECH_STACK = ["Cucumber-js", "PactumJS", "GitLab"];

const Experience = () => {
  return (
    <MainWrapper>
      <div className="flex justify-center">
        <PageTitle title="Experience" />
      </div>

      <section className="flex flex-col justify-center items-center gap-4">
        <IconContext.Provider value={{ color: "white" }}>
          <div className="flex justify-center w-full">
            <FaFlask className="h-1/4 w-1/4" />
          </div>
        </IconContext.Provider>

        <h2 className="font-lexendDeca font-bold text-xl">
          Cucumber and PactumJS for API Test Automation
        </h2>
        <p className="font-poppins text-lg">
          morbi tincidunt augue interdum velit euismod in pellentesque massa
          placerat duis ultricies lacus sed turpis tincidunt id aliquet risus
          feugiat in ante metus dictum at tempor commodo ullamcorper a lacus
          vestibulum sed arcu non odio euismod lacinia at quis risus sed
          vulputate odio ut enim blandit volutpat maecenas volutpat blandit
        </p>
        <h3 className="self-start font-lexendDeca font-bold text-xl">
          Tech Stack
        </h3>
        <ul className="self-start">
          {TECH_STACK.map((text) => (
            <li className="list-disc list-inside">{text}</li>
          ))}
        </ul>

        <hr className="border-1 rounded-lg w-full my-4" />
      </section>
    </MainWrapper>
  );
};

export default Experience;
