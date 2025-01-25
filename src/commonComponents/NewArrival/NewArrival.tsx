import {
    AmazonEchoImg,
    customerServiceIcon,
    deliveryIcon,
    PerfumeImg,
    PS5Img,
    secureIcon,
    WomenWithHatImg,
} from "../../assets/Assets";
import RedPipeAndTitle from "../RedPipe";
import "./NewArrival.css";

const data = [
    {
        "id": "1",
        "icon": deliveryIcon,
        "text": "FREE AND FAST DELIVERY",
        "smallText": "Free delivery for all orders over $140"
    },
    {
        "id": "2",
        "icon": customerServiceIcon,
        "text": "24/7 CUSTOMER SERVICE",
        "smallText": "Friendly 24/7 customer support"
    },
    {
        "id": "3",
        "icon": secureIcon,
        "text": "MONEY BACK GUARANTEE",
        "smallText": "We return money within 30 days"
    },
]
const NewArrival = () => {
    return (
        <div style={webStyle.browserByCategoryContainer}>
            <RedPipeAndTitle title="Featured" />
            <div style={webStyle.titleContainer}>
                <p style={webStyle.sideTitle}>New Arrival</p>
            </div>
            <div className="grid-container">
                <div
                    className="gridItem1"
                    style={{
                        width: "100%",
                        backgroundColor: "#000000",
                        position: "relative",
                        borderRadius: "3px",
                    }}
                >
                    <img src={PS5Img} alt="" className="" style={{ height: "100%" }} />
                    <div
                        className=""
                        style={{
                            width: "40%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            position: "absolute",
                            bottom: 70,
                            left: 25,
                        }}
                    >
                        <p className="imgTitle">PlayStation 5</p>
                        <p className="imgText">
                            Black and White version of the PS5 coming out on sale.
                        </p>
                        <p className="imgGoToLink">Shop Now</p>
                    </div>
                </div>
                <div
                    className="gridItem2"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        height: 284,
                        backgroundColor: "#000000",
                        position: "relative",
                        borderRadius: "3px",
                    }}
                >
                    <div
                        className=""
                        style={{
                            marginTop: "auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            paddingLeft: 30,
                            paddingBottom: 30,
                            width: "33%",
                        }}
                    >
                        <p className="imgTitle">Women’s Collections</p>
                        <p className="imgText">
                            Featured woman collections that give you another vibe.
                        </p>
                        <p className="imgGoToLink">Shop Now</p>
                    </div>
                    <img
                        src={WomenWithHatImg}
                        alt=""
                        className=""
                        style={{ height: "100%" }}
                    />
                </div>
                <div
                    className="gridItem3"
                    style={{
                        height: 284,
                        backgroundColor: "#000000",
                        position: "relative",
                        borderRadius: "3px",
                    }}
                >
                    <img
                        src={AmazonEchoImg}
                        alt=""
                        className=""
                        style={{ height: "100%" }}
                    />
                    <div
                        className=""
                        style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            position: "absolute",
                            bottom: 30,
                            left: 25,
                        }}
                    >
                        <p className="imgTitle">Speakers</p>
                        <p className="imgText">Amazon wireless speakers</p>
                        <p className="imgGoToLink">Shop Now</p>
                    </div>
                </div>
                <div
                    className="gridItem4"
                    style={{
                        height: 284,
                        backgroundColor: "#000000",
                        position: "relative",
                        borderRadius: "3px",
                    }}
                >
                    <img
                        src={PerfumeImg}
                        alt=""
                        className=""
                        style={{ height: "100%" }}
                    />
                    <div
                        className=""
                        style={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            position: "absolute",
                            bottom: 30,
                            left: 25,
                        }}
                    >
                        <p className="imgTitle">Perfume</p>
                        <p className="imgText">GUCCI INTENSE OUD EDP</p>
                        <p className="imgGoToLink">Shop Now</p>
                    </div>
                </div>
            </div>
            <div className="" style={{display:'flex',justifyContent:'space-around',alignItems:'center' }}>
                {
                    data.map((item)=>{
                        return <div className="newBoxInfo" key={item.id}>
                        <img src={item.icon} alt="" className="newBoxInfoIcon" />
                        <p className="newBoxInfoText">{item.text}</p>
                        <p className="newBoxInfoSmallText">
                            {item.smallText}
                        </p>
                </div>
                    })
                }
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
        //flexDirection:"" as ""
    },
    cardText: {
        fontSize: "1rem",
    },
};

export default NewArrival;
