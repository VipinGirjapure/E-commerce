import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { IconButton, Rating } from "@mui/material";
import { DeleteIcon, HeartIcon } from "../../assets/Assets";
import "./SingleProduct.css"
const SingleProduct = ({
  isDeleteIcon,
  isEyeIcon,
  isHeartIcon,
}: IProps) => {
  return (
    <div className="singleProductMain">
      <div>
        <div
          style={{
            width: "100%",
            height: "250px",
            position: "relative",
            backgroundColor: "#f5f5f5",
            borderRadius: "5px 5px 0 0",
          }}
        >
          <div className="" style={{
            width: 'fit-content',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            position: "absolute",
            right: 12,
            top: 10,
          }}>
            {isDeleteIcon && <IconButton
              style={{
                backgroundColor: "#FFFFFF",
                padding: "7px",
                marginBottom: 7
              }}
            >
              <img src={DeleteIcon} alt="" />
            </IconButton>}
            {isHeartIcon && <IconButton
              style={{
                backgroundColor: "#FFFFFF",
                padding: "7px",
                marginBottom: 7
              }}
            >
              <img src={HeartIcon} alt="" />
            </IconButton>}
            {isEyeIcon && <IconButton
              style={{
                backgroundColor: "#FFFFFF",
                padding: "7px",
              }}
            >
              <VisibilityOutlinedIcon style={{ color: "#000000" }} />
            </IconButton>}
          </div>
        </div>
        <button style={webStyle.addToCartBtn}>Add to cart</button>
      </div>
      <p>HAVIT HV-G92 Gamepad</p>
      <p>
        ${"120"}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Rating
          value={4}
          readOnly
          icon={<StarRateRoundedIcon style={{ color: "#FFAD33" }} />}
          emptyIcon={<StarRateRoundedIcon/>}
        />
        <p
          style={{
            color: "#000000",
            fontSize: "14px",
            opacity: 0.5,
            fontWeight: "bold",
          }}
        >{`(75)`}</p>
      </div>
    </div>
  );
};

const webStyle = {
  addToCartBtn: {
    height: "41px",
    width: "100%",
    border: "none",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontWeight: "100",
    textTransform: "capitalize" as "capitalize",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "0 0 5px 5px",
  },
};

interface IProps {
  product?: any;
  isDeleteIcon: boolean;
  isEyeIcon: boolean;
  isHeartIcon: boolean;
}
export default SingleProduct;
