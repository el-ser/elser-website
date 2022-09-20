const AboutContent = ({ title, description }) => {
  return (
    <section className="flex flex-col snap-center justify-center h-screen">
      <h2 className="bold-header-text mb-16 text-3xl">{title}</h2>
      <p className="description-text description-text-size text-justify">
        {description}
      </p>
    </section>
  );
};

export default AboutContent;
