const baseStyle =
  "border-0 rounded-xl font-poppins font-semibold text-smoke-500";

const getButtonStyle = (buttonType) => {
  return {
    primary: baseStyle + " bg-navy-blue-400",
    inverted: baseStyle + " bg-navy-blue-600",
  }[buttonType];
};

const Button = ({ children, buttonType, className }) => {
  const buttonStyle = getButtonStyle(buttonType);
  return <button className={`${buttonStyle} ${className}`}>{children}</button>;
};

export default Button;
