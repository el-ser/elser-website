const PageTitle = ({ title, additionalClass }) => {
  return (
    <h1
      id="page-title"
      className={`text-4xl font-semibold pt-[12vh] py-4 lg:text-[3vw] ${additionalClass}`}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
