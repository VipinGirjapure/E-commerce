import "./index.css";
const RedButton = ({ text, handleNavigation, width="auto" }: {text:string,handleNavigation:any,width:string}) => {
  return (
    <button
      className="redButton"
      onClick={handleNavigation}
      style={{ width: `${width}` }}
    >
      {text}
    </button>
  );
};

export default RedButton;
