import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { IconButton, Rating } from "@mui/material";
import {
  CameraIcon,
  CellPhoneIcon,
  ComputerIcon,
  GamepadIcon,
  HeadphoneIcon,
  HeartIcon,
  SmartWatchIcon,
} from "../../assets/Assets";
import RedPipeAndTitle from "../RedPipe";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SingleProduct from "../SingleProduct/SingleProduct";
import RedButton from "../Buttons/RedButton";

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

const FlashSales = () => {
  let [leftdays, setLeftDays] = useState<number | null>(null);
  let [lefthr, setLefthr] = useState<number | null>(null);
  let [leftmin, setLeftMins] = useState<number | null>(null);
  let [leftsec, setLeftSec] = useState<number | null>(null);

  useEffect(() => {
    let interval = setInterval(() => {
      const newyr = new Date("January 14, 2025 00:00:00");
      const newyeartime = newyr.getTime();
      const todaytm = new Date();
      const todaytime = todaytm.getTime();
      const timeleft = newyeartime - todaytime;
      setLeftDays(Math.floor(timeleft / (24 * 60 * 60 * 1000)));
      setLefthr(23 - todaytm.getHours());
      setLeftMins(59 - todaytm.getMinutes());
      setLeftSec(59 - todaytm.getSeconds());

      if (leftdays&&leftdays <= -1) {
        clearInterval(interval);
      }
    }, 1000);
    
    return () => {
      interval && clearInterval(interval);
    };
  },[leftdays]);

 

  const slider = useRef(null) as any;
  const chunkedCategories = [];
  for (let i = 0; i < categories.length; i += 5) {
    chunkedCategories.push(categories.slice(i, i + 5));
  }
  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div style={webStyle.browserByCategoryContainer}>
      <RedPipeAndTitle title="Today's" />
      <div style={webStyle.titleContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            justifyContent: "flex-start",
          }}
        >
          <p style={webStyle.sideTitle}>Flash Sales</p>
          <div
            style={{
              width: "300px",
              marginLeft: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="" style={{ color: "#000000", margin: "10px" }}>
              <p
                className=""
                style={{ fontSize: "12px", fontWeight: "normal", margin: 0 }}
              >
                Days
              </p>
              <p
                className=""
                style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}
              >
                {leftdays&&leftdays <= -1 ?"00": leftdays?.toString().padStart(2, "0")}
              </p>
            </div>
            <div
              className=""
              style={{
                height: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "15px",
              }}
            >
              <div className="" style={webStyle.colonDots} />
              <div className="" style={webStyle.colonDots} />
            </div>
            <div className="" style={{ color: "#000000", margin: "10px" }}>
              <p
                className=""
                style={{ fontSize: "12px", fontWeight: "normal", margin: 0 }}
              >
                Hours
              </p>
              <p
                className=""
                style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}
              >
                {leftdays&&leftdays <= -1  ? "00" : lefthr?.toString().padStart(2, "0")}
              </p>
            </div>
            <div
              className=""
              style={{
                height: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "15px",
              }}
            >
              <div className="" style={webStyle.colonDots} />
              <div className="" style={webStyle.colonDots} />
            </div>{" "}
            <div className="" style={{ color: "#000000", margin: "10px" }}>
              <p
                className=""
                style={{ fontSize: "12px", fontWeight: "normal", margin: 0 }}
              >
                Minutes
              </p>
              <p
                className=""
                style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}
              >
                {leftdays&&leftdays <= -1  ? "00" : leftmin?.toString().padStart(2, "0")}
              </p>
            </div>
            <div
              className=""
              style={{
                height: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "15px",
              }}
            >
              <div className="" style={webStyle.colonDots} />
              <div className="" style={webStyle.colonDots} />
            </div>
            <div className="" style={{ color: "#000000", margin: "10px" }}>
              <p
                className=""
                style={{ fontSize: "12px", fontWeight: "normal", margin: 0 }}
              >
                Seconds
              </p>
              <p
                className=""
                style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}
              >
                {leftdays&&leftdays <= -1 ? "00" : leftsec?.toString().padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
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
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => {
            return (
              <div key={item}>
                <SingleProduct
                  isDeleteIcon={false}
                  isEyeIcon={true}
                  isHeartIcon={true}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px 0",
        }}
      >
        <RedButton
          text={"View All Products"}
          handleNavigation={undefined}
          width={"234px"}
        />
      </div>
    </div>
  );
};

const webStyle = {
  browserByCategoryContainer: {
    //padding: "1% 2%",
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
    marginTop: "12px",
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
  cardText: {
    fontSize: "1rem",
  },
  colonDots: {
    height: "4px",
    width: "4px",
    backgroundColor: "#E07575",
    borderRadius: "50%",
  },
};

export default FlashSales;
