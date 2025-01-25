import { Paper } from "@mui/material";
import "./CartPage.css"
import WhiteButton from "../../commonComponents/Buttons/WhiteButton";
import RedButton from "../../commonComponents/Buttons/RedButton";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
    const navigate = useNavigate()
    const handleUpdateCart = () => {
    }
    const handleReturnShop = () => {
        navigate('/')
    }
    return <div className="mainCartPage">
        <Paper className="cartPageMainTitleContainer">
            <div className="cartPageMainTitleItems">
                Product
            </div>
            <div className="cartPageMainTitleItems">
                Price
            </div>
            <div className="cartPageMainTitleItems">
                Quantity
            </div>
            <div >
                Subtotal
            </div>
        </Paper>
        <div className="" style={{ marginTop: 30 }}>
            {
                [1, 2].map((item) => {
                    return <Paper style={{ marginTop: 20 }} className="cartPageMainTitleContainer" key={item}>

                        <div className="cartPageMainTitleItems">
                            <div className="" style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={''} alt="" className="" style={{ height: 54, width: 54, marginRight: 20 }} />
                                <p className="">{'LCD Monitor'}</p>
                            </div>
                        </div>
                        <div className="cartPageMainTitleItems">
                            {'$650'}
                        </div>
                        <div className="cartPageMainTitleItems">
                            <input type="number" className="" style={{ height: '44px', width: '52px', border: '1px solid #000000', borderRadius: 5, fontSize: '16px', padding: '0 5px' }} pattern="\d*" maxLength={2} />
                        </div>
                        <div>
                            {'$650'}
                        </div>
                    </Paper>
                })
            }
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", marginTop: '30px' }}>
            <WhiteButton text="Return To Shop" handleNavigation={handleReturnShop} width={"218px"} />
            <WhiteButton text="Update Cart" handleNavigation={handleUpdateCart} width={"195px"} />
        </div>
        <div className="" style={{ display: 'flex', justifyContent: "space-between", alignItems: "flex-start", marginTop: 50 }}>
            <div className="couponInputAndBtnContainer" style={{}} >
                <input type="text" placeholder="Coupon Code" className="" style={{ height: '53px', width: '300px', border: '1px solid #000000', borderRadius: 5, fontSize: '16px', padding: '0 22px', marginRight: 20 }} />
                <RedButton text={"Apply Coupon"} handleNavigation={undefined} width={"211px"} />
            </div>
            <div className="cartTotalBox" style={{ border: '1.5px solid black', width: 470, height: 324, borderRadius: 4, padding: 30 }}>
                <p className="" style={{ fontSize: 24, fontWeight: '500', marginBottom: 40, }}>Cart Total</p>
                <div className="" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, marginTop: 20 }}>
                    <p className="" style={{ fontSize: 20, fontWeight: '300' }}>Sub Total:</p>
                    <p className="" style={{ fontSize: 20, fontWeight: '300' }}>{'$1750'}</p>
                </div>
                <div className="line" />
                <div className="" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, marginTop: 20 }}>
                    <p className="" style={{ fontSize: 20, fontWeight: '300' }}>Shipping:</p>
                    <p className="" style={{ fontSize: 20, fontWeight: '300' }}>{'Free'}</p>
                </div>
                <div className="line" />
                <p className="" style={{ fontSize: 20, fontWeight: '300', marginBottom: 20, marginTop: 20 }}>Total:</p>
                <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <RedButton text={"Process To Checkout"} handleNavigation={undefined} width={"260px"} />
                </div>
            </div>
        </div>
    </div>
}

export default CartPage;