const Spinner = () => {
  return (
    <div className="absolute z-10 w-screen h-screen flex justify-center items-center left-0">
      <div className="spinner-loading animate-spin"></div>
    </div>
  );
};

export default Spinner;
