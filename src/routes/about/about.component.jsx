import { Fragment, useEffect, useState } from "react";
import { MdDevices } from "react-icons/md";
import { GrTest } from "react-icons/gr";

import BackgroundImage from "../../assets/about-pic.jpg";

const About = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);

  return (
    <Fragment>
      <section className="flex items-center h-screen">
        <div className="fixed -z-10 left-0 right-0 overflow-hidden">
          <img src={BackgroundImage} alt="background" />
        </div>
      </section>
      <section className="flex flex-col justify-center h-screen">
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
      <section className="flex flex-col justify-center h-screen">
        <div className="flex">
          <MdDevices />
          <ul>
            <li>Reactjs</li>
            <li>Tailwindcss</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>JavasScript</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="flex">
          <GrTest />
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
    </Fragment>
  );
};

export default About;
