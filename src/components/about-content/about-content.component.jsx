const AboutContent = ({ title, description }) => {
  return (
    <section className="flex flex-col snap-center justify-center h-screen">
      <h2 className="bold-header-text mb-16 text-3xl">{title}</h2>
      {/* <p className="font-poppins text-base text-justify text-[3.3vw] md:[2.3vw] lg:text-[1.5vw] lg:px-36">
        {description}
      </p> */}
      <p className="description-text text-justify text-[3.3vw] md:[2.3vw] lg:text-[1.5vw] lg:px-36">
        {description}
      </p>
    </section>
  );
};

export default AboutContent;
