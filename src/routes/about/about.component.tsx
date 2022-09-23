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
    const pageTitle = document.getElementById("page-title") as Element;
    observer.observe(pageTitle);

    applySnap("html");
    return function () {
      removeSnap("html");
      observer.disconnect();
    };
  }, []);

  return (
    <MainWrapper>
      <PageTitle
        title="About Me"
        additionalClass="absolute animate-fade-in-slide-up-500"
      />
      <section className="flex justify-center gap-8 items-center h-screen snap-center">
        <div
          id="background-container"
          className="fixed flex flex-col gap-8 items-center -z-20 w-full px-[5%] opacity-100 overflow-hidden transition-all ease-in-out duration-1000 pt-[15%] md:pt-[10%] md:flex-row"
        >
          <img
            src={BackgroundImage}
            className="rounded-3xl flex-grow transition-all ease-out animate-fade-in-slide-up-1000 md:clip-custom md:h-[60vh] md:w-[50vw] md:object-cover md:object-left"
            alt="background"
          />
          <p
            id="intro-text"
            className="description-text readable-text-size block animate-fade-in-slide-up-1500 overflow-hidden pt-8 w-auto h-auto text-justify transition-all opacity-100 duration-1000 delay-1000 ease-out"
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
