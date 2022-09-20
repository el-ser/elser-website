const PageTitle = ({ title, additionalClass }) => {
  return (
    <div id="page-title-container" className="flex justify-center">
      <h1
        id="page-title"
        className={`bold-header-text text-4xl pt-[12vh] py-4 ${additionalClass}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
