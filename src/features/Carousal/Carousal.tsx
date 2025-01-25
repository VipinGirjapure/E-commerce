import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
      {
        "id": "1",
        "imagePath": 'https://www.apple.com/in/iphone-16/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202412112157',
        "link": "/item/1"
      },
      {
        "id": "2",
        "imagePath": 'https://i.ytimg.com/vi/tdtPtgll-F8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpD6jmVuxImj71WcwQwQpBe7Rheg',
        "link": "/item/2"
      },
      {
        "id": "3",
        "imagePath": 'https://www.apple.com/in/iphone-16/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202412112157',
        "link": "/item/3"
      },
      {
        "id": "4",
        "imagePath": 'https://i.ytimg.com/vi/tdtPtgll-F8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCpD6jmVuxImj71WcwQwQpBe7Rheg',
        "link": "/item/4"
      },
      {
        "id": "5",
        "imagePath": 'https://www.reliancedigital.in/wp-content/uploads/2023/08/Moto_Edge_40_1.jpg',
        "link": "/item/5"
      }
    ]



function Carousal() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows:false,
      fade:true,
      waitForAnimate: false,
    };
  return (
    <div className="slider-container" style={{height:'400px',width:'60vw',marginTop:30}}>
      <Slider {...settings}>
        {data.map((item)=>{
            return <img src={item.imagePath} alt="" className="" style={{borderRadius:'15px',height:'100%'}} key={item.id}/>
        })}
      </Slider>
    </div>
  );
}

export default Carousal;
