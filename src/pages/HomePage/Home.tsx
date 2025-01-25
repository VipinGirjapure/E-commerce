import BestSelling from "../../commonComponents/BestSelling/BestSelling";
import BrowseByCategory from "../../commonComponents/BrowseByCategory/BrowseByCategory";
import ExploreOurProducts from "../../commonComponents/ExploreOurProducts/ExploreOurProducts";
import FlashSales from "../../commonComponents/FlashSales/FlashSales";
import NavigationMenu from "../../commonComponents/NavigationMenu/NavigationMenu";
import NewArrival from "../../commonComponents/NewArrival/NewArrival";
import Carousal from "../../features/Carousal/Carousal";
import "./index.css";
const adSource  = 'https://i.ytimg.com/vi/tdtPtgll-F8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpD6jmVuxImj71WcwQwQpBe7Rheg'
const Home = () => {
  return (
    <div className="homeContainer" >
      <div className="navMenu"></div>
      <div className="banner"></div>
      <div className="container">
        <div className="menu" style={{display:"flex",justifyContent:"space-between"}}>
          <NavigationMenu/>
        <div className="" style={{  width:1,backgroundColor:'lightgray',marginTop:'-3px'}}></div>
        </div>
        <div className="content">
          <Carousal/>
        </div>
        <div className="footer">
        </div>
      </div>
      <div>
        <FlashSales/>
        <div className="line"/>
       <BrowseByCategory/>
        <div className="line"/>
        <BestSelling/>
        <div className="adImgae">
        <img src={adSource} alt="" className="adImgaeItem"  />
        </div>
        <ExploreOurProducts/>
        <NewArrival/>
      </div>
    </div>
  );
};

export default Home;
