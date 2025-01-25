import WhiteButton from "../../commonComponents/Buttons/WhiteButton";
import JustForYou from "../../commonComponents/JustForYou/JustForYou";
import SingleProduct from "../../commonComponents/SingleProduct/SingleProduct";
import "./WishList.css"
const WishList = () => {
    return <div className="wishListContainer">
        <div className="wishListTitleContainer">
            <div className="wishListTitle">Wishlist {'(4)'}</div>
            <WhiteButton text="Move All To Bag" handleNavigation={undefined} width={'auto'} />
        </div>
            <div className="cards">
                {[1,2,3,4].map((item)=>{
                    return <div className="card" key={item}><SingleProduct isDeleteIcon={true} isEyeIcon={false} isHeartIcon={false}/></div>
                })}
            </div>
            <JustForYou/>
    </div>
}

export default WishList;