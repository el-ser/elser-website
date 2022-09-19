const AboutContent = ({ title, description }) => {
  return (
    <section className="flex flex-col snap-center justify-center h-screen font-normal">
      <h2 className="font-lexendDeca -translate-y-14 font-semibold text-3xl">
        {title}
      </h2>
      <p className="font-poppins text-base text-justify text-[3.3vw] md:[2.3vw] lg:text-[1.5vw] lg:px-36">
        {description}
      </p>
    </section>
  );
};

export default AboutContent;
