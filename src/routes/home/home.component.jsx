import { Link } from "react-router-dom";

import MainWrapper from "../../components/main-wrapper/main-wrapper.component";
import Button from "../../components/button/button.component";
import HeroImage from "../../assets/hero-pic.png";

const Home = () => {
  return (
    <MainWrapper>
      <section
        id="hero-section"
        className="flex flex-col justify-center items-center h-screen w-full -z-10 md:flex-row"
      >
        <div id="text-intro-container" className="flex flex-col md:w-9/12">
          <h1 className="description-text text-2xl animate-fade-in-slide-up-500 md:text-4xl ">
            Hey there! I am
          </h1>
          <h2 className="bold-header-text text-6xl tracking-normal md:text-8xl animate-fade-in-slide-up-1000">
            Manu
            <span className="text-navy-blue-400">el Ser</span>
            afin Bugarin
          </h2>
          <p className="description-text animate-fade-in-slide-up-1500 text-xl py-2 px-0 md:w-[95%] md:text-3xl">
            A software engineer, passionate in building amazing things
          </p>
          <Button
            buttonType="primary"
            className="btn-primary animate-fade-in-slide-up-2000"
          >
            <Link to="/about">About Me</Link>
          </Button>
        </div>
        <div className="self-center animate-fade-in-slide-up-2500 my-2">
          <img
            className="rounded-full h-auto w-60 md:w-[35rem] shadow-navy-blue-400 shadow-xl"
            src={HeroImage}
            alt="hero"
          />
        </div>
      </section>
    </MainWrapper>
  );
};

export default Home;
