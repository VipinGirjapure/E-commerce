import "./index.css";
const WhiteButton = ({
  text,
  handleNavigation,
  width = "auto",
}: {
  text: string;
  handleNavigation: any;
  width: string;
}) => {
  return (
    <button
      className="whiteButton"
      onClick={handleNavigation}
      style={{ width: `${width}` }}
    >
      {text}
    </button>
  );
};

export default WhiteButton;
