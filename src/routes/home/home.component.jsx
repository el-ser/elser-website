import MainWrapper from "../../components/main-wrapper/main-wrapper.component";
import Button from "../../components/button/button.component";
import HeroImage from "../../assets/hero-pic.png";

const Home = () => {
  return (
    <MainWrapper>
      <section
        id="hero-section"
        className="flex flex-col md:flex-row justify-center items-center h-screen w-full"
      >
        <div id="text-intro-container" className="flex flex-col lg:w-9/12">
          <h1 className="text-2xl lg:text-4xl font-poppins">Hey there! I am</h1>
          <h2 className="text-6xl font-lexendDeca font-bold tracking-normal lg:text-8xl">
            Manu<span>el Ser</span>afin Bugarin
          </h2>
          <p className="text-xl font-poppins py-2 px-0 lg:w-[95%] lg:text-3xl">
            A software engineer, passionate in building amazing things
          </p>
          <Button buttonType="primary" className="my-2 h-8 w-2/6 ">
            About Me
          </Button>
        </div>
        <div className="self-center my-2">
          <img className="rounded-full h-60" src={HeroImage} alt="hero" />
        </div>
      </section>
    </MainWrapper>
  );
};

export default Home;
