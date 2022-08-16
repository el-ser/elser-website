import { useEffect } from "react";
import { MdDevices } from "react-icons/md";

import MainWrapper from "../../components/main-wrapper/main-wrapper.component";
import BackgroundImage from "../../assets/about-pic.jpg";
import {
  backgroundResizeCallback,
  applySnap,
  removeSnap,
} from "../../utils/class-handler";

const About = () => {
  useEffect(() => {
    let observer = new IntersectionObserver(backgroundResizeCallback, {
      threshold: 1.0,
    });
    observer.observe(document.getElementById("page-title"));

    applySnap("html");
    return function () {
      removeSnap("html");
    };
  }, []);

  return (
    <MainWrapper>
      <div id="page-title-container" className="flex justify-center">
        <h1
          id="page-title"
          className="absolute -z-10 text-4xl font-semibold pt-[12vh] py-4 lg:text-[3vw]"
        >
          About Me
        </h1>
      </div>

      <section className="flex items-center h-screen snap-center">
        <div
          id="background-container"
          className="fixed -z-10 left-0 w-full overflow-hidden transition-all ease-in-out duration-700 lg:rounded-3xl lg:max-w-[80%] lg:max-h-[60%] lg:left-[10%] lg:right-[10%]"
        >
          <img src={BackgroundImage} alt="background" />
        </div>
      </section>

      <section
        id="personal-info"
        className="flex flex-col snap-center justify-center h-screen font-poppins font-normal text-[3.3vw] md:text-[2.3vw] lg:text-[1.5vw] lg:px-36"
      >
        <p className="m-0">
          Hi, my name is Manuel Serafin Bugarin but you can call me Macky. I
          graduated at Mapua University with the degree of Bachelor of Science
          in Computer Science.
          <br /> <br />
        </p>
        <p className="m-0">
          I started working as an test automation intern back in 2016 and
          eventually got absorbed to be regular employee. As time goes by, my
          passion for software development grew and led me to developing new
          things using Javascript as my main programming language.
          <br /> <br />
          Here are some of the technologies I use:
        </p>
      </section>
      <section
        id="tech-stack"
        className="flex flex-col justify-center h-screen snap-center"
      >
        <div className="flex justify-around items-center">
          <MdDevices className="w-2/5 h-1/2" />
          <ul className="">
            <li>Reactjs</li>
            <li>Tailwindcss</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>JavasScript</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="flex flex-row-reverse justify-around items-center mt-4">
          <MdDevices className="w-2/5 h-1/2" />
          <ul>
            <li>Cucumber-js</li>
            <li>Behave Python</li>
            <li>GitLab</li>
            <li>PactumJS</li>
            <li>Postman</li>
            <li>Codeceptjs</li>
          </ul>
        </div>
      </section>
    </MainWrapper>
  );
};

export default About;
