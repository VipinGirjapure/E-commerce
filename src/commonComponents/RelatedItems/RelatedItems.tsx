import RedPipeAndTitle from "../RedPipe";
import Slider from "react-slick";
import { useRef } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const RelatedItems = () => {
    const slider = useRef(null) as any;
    const settings = {
        dots: false,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,
    };
    return (
        <div style={webStyle.browserByCategoryContainer}>
            <RedPipeAndTitle title="Related Item" />
            <div className="slider-container" style={{ marginTop: '7vh' }}>

                <Slider ref={slider} {...settings}>
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                            return <SingleProduct isDeleteIcon={false} isEyeIcon={true} isHeartIcon={true} />
                        })
                    }
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
        margin: '0',
        marginRight: '50px'
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

export default RelatedItems;
