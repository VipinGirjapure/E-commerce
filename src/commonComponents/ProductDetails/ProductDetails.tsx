import { useState } from "react";
import RelatedItems from "../RelatedItems/RelatedItems";
import { resp } from "./Data";
import ReactImageMagnify, { } from 'react-image-magnify'
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import "./ProductDetails.css";
import { IconButton, Radio, Rating } from "@mui/material";
import { deliveryIconDark, HeartIcon, returnIcon } from "../../assets/Assets";
import { NavLink } from "react-router-dom";

const ProductDetails = () => {
    const [bigImage, setBigImage] = useState("");
    return (
        <div className="productDetailsContainer">
            <div className="" style={{ display: "flex", justifyContent: 'space-between', alignItems: "flex-start", }}>
                <div
                    className="smallImagesColumn"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        className=""
                        style={{
                            width: 200,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginRight:30
                        }}
                    >
                        {resp.productDetailItem.images.map((item) => {
                            return (
                                <button
                                    className=""
                                    style={{
                                        height: 138,
                                        width: 170,
                                        margin: 5,
                                        border: "none",
                                        padding: 0,
                                        backgroundColor: "transparent",
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={() => setBigImage(item.original)}
                                    key={item.original}
                                >
                                    <img
                                        src={item.original}
                                        alt=""
                                        className=""
                                        height={"100%"}
                                        width={"100%"}
                                        style={{ borderRadius: 5 }}
                                    />
                                </button>
                            );
                        })}
                    </div>
                    <div
                        className="mainImage"
                        style={{ height: 600, width: 600, margin: 5, borderRadius: 5, zIndex: 999 }}
                    >
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: "Product",
                                isFluidWidth: true,
                                src: bigImage === ""
                                    ? resp.productDetailItem.images[0].original
                                    : bigImage,
                                height: 600,
                            },
                            largeImage: {
                                src: bigImage === ""
                                    ? resp.productDetailItem.images[0].original
                                    : bigImage,
                                width: 1200,
                                height: 1800,
                            }, style: {
                                borderRadius: 5
                            }
                        }} />
                    </div>
                </div>
                <div
                    className=""
                    style={{ width: "35%", padding: '0 30px' }}
                >
                    <div className="productDetailItemProductInfo">
                        <p className="productDetailItemProductName">
                            {resp.productDetailItem.title}
                        </p>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                margin: '12px 0'
                            }}
                        >
                            <Rating
                            style={{marginLeft:-3}}
                                value={resp.productDetailItem.ratings}
                                readOnly
                                icon={<StarRateRoundedIcon style={{ color: "#FFAD33" }} />}
                                emptyIcon={<StarRateRoundedIcon />}
                            />
                            <div
                                style={{
                                    color: "#000000",
                                    fontSize: "14px",
                                    opacity: 0.5,
                                    fontWeight: "bold",
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <p className="" style={{ marginLeft: 5, marginRight: 5, opacity: 0.5 }}>
                                    {`(${resp.productDetailItem.reviews} Reviews) |`}
                                </p>
                                {resp.productDetailItem.availability ? <p className="inStockGreenText">
                                    {'in stock'}
                                </p> : <p className="outOfStockRedText">
                                    {'out of stock'}
                                </p>}
                            </div>
                        </div>
                        <div className="productDetailItemPrice">
                            <p className="" style={{marginBottom:3,marginRight:2}}>$</p>
                            <p className="">{resp.productDetailItem.price}</p>
                        </div>
                        <p className="productDetailItemDescription">
                            {resp.productDetailItem.description}
                        </p>
                    </div>
                    <div className="line" />

                    <div className="productColorSelect">
                        <p className="labelColor">
                            {"Colours:"}
                        </p>
                        {
                            resp.productDetailItem.color.map((color) => {
                                return < Radio
                                    key={color}
                                    //  checked={selectedValue === 'a'}
                                    //  onChange={handleChange}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                    sx={{
                                        color: '#000000',
                                        '&.Mui-checked': {
                                            color: `${color}`,
                                        },
                                    }}
                                />
                            })
                        }
                    </div>
                    <div className="productSizeSelect">
                        <p className="labelColor">
                            {'Size:'}
                        </p>
                        {resp.productDetailItem.size.map((size) => {
                            return <button className="sizeSmallBox" key={size}>
                                {size}
                            </button>
                        })}
                    </div>
                    <div className="" style={{ margin: "20px 0", height: 44, display: "flex", justifyContent: 'space-between' }}>
                        <div className="quantityFavAndBuyNowContainer">
                            <div className="quantityContainer">
                                <button className="decreaseQuantityBtn"><RemoveIcon /></button>
                                <div className="productDetailItemQuantity">{"2"}</div>
                                <button className="increaseQuantityBtn"><AddIcon /></button>
                            </div>
                        </div>
                        <button className="buyNowbtn">
                            Buy Now
                        </button>
                        <IconButton style={{ border: "1px solid lightgrey", height: '44px', width: '44px', borderRadius: '4px' }}>
                            <img src={HeartIcon} alt="" className="goToButtons" />
                        </IconButton>
                    </div>
                    <div style={{ border: '1px solid lightgrey', width: "100%", borderRadius: 5, marginTop: 40 }} className="">
                        <div className="" style={{ display: "flex", margin: '20px 5px', padding: '10px' }}>
                            <div className="deliveryIconContainer">
                                <img src={deliveryIconDark} alt="" className="" style={{}} />
                            </div>
                            <div className="" style={{ display: "flex", justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: "column", color: '#000000' }}>
                                <div className="" style={{ marginBottom: 5, fontSize: 16, fontWeight: 'bold' }}>Free Delivery</div>
                                <div className="smallNoteText" style={{ textDecoration: 'underline' }}>Enter your postal code for Delivery Availability</div>
                            </div>
                        </div>
                        <div className="" style={{ width: "100%", height: 1, backgroundColor: "lightgray" }} />
                        <div className="" style={{ display: "flex", margin: '20px 5px', padding: '10px' }}>
                            <div className="deliveryIconContainer">
                                <img src={returnIcon} alt="" className="" style={{}} />
                            </div>
                            <div className="" style={{ display: "flex", justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: "column", color: '#000000' }}>
                                <div className="" style={{ marginBottom: 5, fontSize: 16, fontWeight: 'bold' }}>Return Policy</div>
                                <div className="smallNoteText" >Free 30 Days Delivery Returns. <NavLink style={{ color: '#000000' }} to={"return_details_page"}>Details</NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedItems />
        </div>
    );
};
export default ProductDetails;
