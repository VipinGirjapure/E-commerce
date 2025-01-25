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
import { useRef } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SingleProduct from "../SingleProduct/SingleProduct";
import RedButton from "../Buttons/RedButton";
import WhiteButton from "../Buttons/WhiteButton";

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

const JustForYou = () => {
    const slider = useRef(null) as any;
    const chunkedCategories = [];
    for (let i = 0; i < categories.length; i += 5) {
        chunkedCategories.push(categories.slice(i, i + 5));
    }
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
            <RedPipeAndTitle title="For You" />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "6vh"

                }}
            >
                <p style={webStyle.sideTitle}>Just For You</p>
                <WhiteButton text={"View All"} handleNavigation={undefined} width={"159px"} />
            </div>
            <div className="cards">
                {[1, 2, 3, 4].map((item) => {
                    return <div className="card" key={item}><SingleProduct isDeleteIcon={true} isEyeIcon={false} isHeartIcon={false} /></div>
                })}
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
        border:'1px solid #000000'

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

};

export default JustForYou;
