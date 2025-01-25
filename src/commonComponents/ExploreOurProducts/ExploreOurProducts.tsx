import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { IconButton } from "@mui/material";
import RedPipeAndTitle from "../RedPipe";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import RedButton from "../Buttons/RedButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/reducers/products/ProductsSlice";
import { RootState } from "../../redux/store";

const ExploreOurProducts = () => {
    const state = useSelector((state: RootState) =>console.log(state));
  const dispatch = useDispatch<any>();
  const handleGetProducts = async () => {
   await dispatch(fetchPosts());
  };
  useEffect(() => {
    handleGetProducts()
  },[]);
  const slider = useRef(null) as any;
  const settings = {
    //dots: false,
    //speed: 1000,
    ////className: "",
    //centerMode: true,
    //infinite: true,
    ////centerPadding: "60px",
    slidesToShow: 4,
    rows: 2,
    slidesPerRow: 1,
    //responsive: [
    //    {
    //      breakpoint: 1024,
    //      settings: {
    //        slidesToShow: 3,
    //        slidesToScroll: 3,
    //        infinite: true,
    //        dots: true
    //      }
    //    },
    //    {
    //      breakpoint: 600,
    //      settings: {
    //        slidesToShow: 2,
    //        slidesToScroll: 2,
    //        initialSlide: 2
    //      }
    //    },
    //    {
    //      breakpoint: 480,
    //      settings: {
    //        slidesToShow: 1,
    //        slidesToScroll: 1
    //      }
    //    }
    //  ]
    dots: false,
    speed: 2000,
    slidesToScroll: 2,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };
  console.log(state)
  return (
    <div style={webStyle.browserByCategoryContainer}>
      <RedPipeAndTitle title="Our Products" />
      <div style={webStyle.titleContainer}>
        <p style={webStyle.sideTitle}>Explore Our Products</p>
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
          {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => {
            return (
              <SingleProduct
                isDeleteIcon={false}
                isEyeIcon={true}
                isHeartIcon={true}
              />
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
    //flexDirection:"" as ""
  },
  cardText: {
    fontSize: "1rem",
  },
};

export default ExploreOurProducts;
