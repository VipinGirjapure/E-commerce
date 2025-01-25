import { IconButton } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
const GoToTop = () => {
  return (
    <IconButton
    //href="#"
      style={{
        height: "46px",
        width: "46px",
        backgroundColor: "#f5f5f5",
      }}
      onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}
    >
      <ArrowUpwardRoundedIcon
        style={{ color: "#000000", fontWeight: "bold" }}
      />
    </IconButton>
  );
};

export default GoToTop;
