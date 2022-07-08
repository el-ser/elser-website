import MainWrapper from "../../components/main-wrapper/main-wrapper.component";

const About = () => {
  return (
    <MainWrapper>
      <section className="flex flex-col justify-center items-center h-screen w-full" id="hero-section">
        <div className="flex flex-col lg:w-9/12" id="text-intro-container">
          <h1 className="text-2xl lg:text-4xl font-poppins">Hi, my name is</h1>
            <h2 className="text-6xl font-lexendDeca font-bold tracking-normal lg:text-8xl underline">
            Manu<span>el Ser</span>afin Bugarin
            </h2>
            <p className="text-xl font-poppins py-2 px-0 lg:w-[60%] lg:text-3xl">
            I am a software engineer in test, passionate in creating amazing
            things through software development.
            </p>
          </div>
      </section>
    </MainWrapper>
  )
}

export default About;
