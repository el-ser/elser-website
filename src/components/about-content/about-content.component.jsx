const AboutContent = ({ title, description }) => {
  return (
    <section className="flex flex-col snap-center justify-center h-screen">
      <h1 className="bold-header-text header-text-size mb-16 md:text-[4vw] lg:text-[3vw]">
        {title}
      </h1>
      <p className="description-text readable-text-size text-justify md:text-[2.8vw] lg:text-[1.8vw] lg:leading-loose">
        {description}
      </p>
    </section>
  );
};

export default AboutContent;
