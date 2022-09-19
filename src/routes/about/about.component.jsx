import { useEffect } from "react";

import MainWrapper from "../../components/main-wrapper/main-wrapper.component";
import AboutContent from "../../components/about-content/about-content.component";
import PageTitle from "../../components/page-title/page-title.component";

import aboutData from "./about-data.json";
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
        <PageTitle title="About Me" additionalClass="absolute -z-10" />
      </div>

      <section className="flex justify-center gap-8 items-center h-screen snap-center">
        <div
          id="background-container"
          className="fixed flex flex-col items-center -z-20 left-0 w-full opacity-100 overflow-hidden transition-all ease-in-out duration-500 lg:max-w-[80%] lg:max-h-[60%] lg:left-[10%] lg:right-[10%]"
        >
          <img src={BackgroundImage} className="rounded-3xl" alt="background" />
          <p
            id="intro-text"
            className="description-text block w-full pt-8 h-auto text-justify animate-fade-in"
          >
            Hi, my name is{" "}
            <span className="font-semibold">Manuel Serafin Bugarin</span> but
            others call me <span className="font-semibold">Macky</span>. I am a
            JavaScript Developer from Philippines striving to be a great Full
            Stack Developer. Let me tell you about my story!
          </p>
        </div>
      </section>

      {aboutData.map(({ id, title, description }) => (
        <AboutContent key={id} title={title} description={description} />
      ))}
    </MainWrapper>
  );
};

export default About;
