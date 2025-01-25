import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { IconButton } from "@mui/material";
import {
  CameraIcon,
  CellPhoneIcon,
  ComputerIcon,
  GamepadIcon,
  HeadphoneIcon,
  SmartWatchIcon,
} from "../../assets/Assets";
import RedPipeAndTitle from "../RedPipe";
import Slider from "react-slick";
import { useRef } from "react";
import "./BrowseByCategory.css"

const categories = [
  {
    id: "1",
    icon: CellPhoneIcon,
    name: "Phone",
  },
  {
    id: "2",
    icon: ComputerIcon,
    name: "Computer",
  },
  {
    id: "3",
    icon: SmartWatchIcon,
    name: "SmartWatch",
  },
  {
    id: "4",
    icon: CameraIcon,
    name: "Camera",
  },
  {
    id: "5",
    icon: HeadphoneIcon,
    name: "HeadPhones",
  },
  {
    id: "6",
    icon: GamepadIcon,
    name: "Gaming",
  },
  {
    id: "11",
    icon: CellPhoneIcon,
    name: "Phone",
  },
  {
    id: "12",
    icon: ComputerIcon,
    name: "Computer",
  },
  {
    id: "13",
    icon: SmartWatchIcon,
    name: "SmartWatch",
  },
  {
    id: "14",
    icon: CameraIcon,
    name: "Camera",
  },
  {
    id: "15",
    icon: HeadphoneIcon,
    name: "HeadPhones",
  },
  {
    id: "16",
    icon: GamepadIcon,
    name: "Gaming11",
  },
];

const BrowseByCategory = () => {
  const slider = useRef(null) as any;
  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div style={webStyle.browserByCategoryContainer}>
      <RedPipeAndTitle title="Categories" />
      <div style={webStyle.titleContainer}>
        <p style={webStyle.sideTitle}>Browse By Category</p>
        <div style={webStyle.sideArrowButtons}>
          <IconButton
            style={webStyle.arrowBtn}
            onClick={() => slider?.current?.slickPrev()}
          >
            <ArrowBackOutlinedIcon
              style={{ color: "#000000", fontWeight: "bold" }}
            />
          </IconButton>
          <IconButton
            style={webStyle.arrowBtn}
            onClick={() => slider?.current?.slickNext()}
          >
            <ArrowForwardOutlinedIcon
              style={{ color: "#000000", fontWeight: "bold" }}
            />
          </IconButton>
        </div>
      </div>
      <div className="slider-container" style={{ marginTop: "7vh" }}>
        <Slider ref={slider} {...settings}>
          {categories.map((item) => {
            return (
              <div
                key={item.id}
              >
                <div
                  className="categoriesItem"
                  onClick={()=>alert('Coming soon')}
                >
                  <img src={item.icon} alt="" />
                  <p className="categoriesItemCardText">{item.name}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const webStyle = {
  browserByCategoryContainer: {
    padding: "5% 0%",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sideTitle: {
    fontSize: "2.3rem",
    color: "#000000",
    fontWeight: "500",
    margin: "0",
    marginRight: "50px",
  },
  sideArrowButtons: {
    display: "flex",
    width: "100px",
    justifyContent: "space-between",
    alignItmes: "center",
  },
  arrowBtn: {
    height: "46px",
    width: "46px",
    backgroundColor: "#f5f5f5",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#000000",
  },
};

export default BrowseByCategory;
