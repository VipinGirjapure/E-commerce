import { NavLink } from "react-router-dom";
import {
  AppleStoreImg,
  FacebookIcon,
  GooglePlayStore,
  InstagramIcon,
  LinkedinIcon,
  QrCodeImg,
  SendIcon,
  TwitterIcon,
} from "../../assets/Assets";
import GoToTop from "../GoToTop/GoToTop";
import "./index.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          bottom: "240px",
          right: 0,
          left: "96%",
        }}
      >
        <GoToTop />
      </div>
      <div className="footerContentContainer">
        <div className="gridItem">
          <p className="gridItemHeadingLogo">Exclusive</p>
          <p className="gridItemHeading">Subscribe</p>
          <p className="gridItemText">Get 10% off your first order</p>
          <div className="sendEmailInputContainer">
            <input
              type="email"
              id="emailInputField"
              placeholder="Enter your email"
            />
            <img
              src={SendIcon}
              alt=""
              className="sendIcon"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="gridItem">
          <p className="gridItemHeading">Support</p>
          <p className="gridItemText">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="gridItemText">exclusive@gmail.com</p>
          <p className="gridItemText">+88015-88888-9999</p>
        </div>
        <div className="gridItem">
          <p className="gridItemHeading">Account</p>
          <p className="gridItemText">My Account</p>
          <p className="gridItemText">Login / Resgister</p>
          <p className="gridItemText">Cart</p>
          <p className="gridItemText">Wishlist</p>
          <p className="gridItemText">Shop</p>
        </div>
        <div className="gridItem">
          <NavLink className="gridItemHeading" to={""}>Quick Link</NavLink>
          <NavLink to={""} className="gridItemText">Privacy Policy</NavLink>
          <NavLink to={""} className="gridItemText">Terms Of Use</NavLink>
          <NavLink to={""} className="gridItemText">FAQ</NavLink>
          <NavLink to={""} className="gridItemText">Contact</NavLink>
        </div>
        <div className="gridItem">
          <NavLink className="gridItemHeading" to={""}>Download App</NavLink>
          <NavLink to={""} className="gridItemSmallText">Save $3 with App New User Only</NavLink>
          <div className="downloadAppContainer">
            <img src={QrCodeImg} alt="" className="qrCode" />
            <div className="downloadAppImgContainer">
              <img src={GooglePlayStore} alt="" className="downloadAppImg" />
              <img src={AppleStoreImg} alt="" className="downloadAppImg" />
            </div>
          </div>
          <div className="footerSocialIconContainer">
            <img src={FacebookIcon} alt="" className="footerSocialIcon" />
            <img src={TwitterIcon} alt="" className="footerSocialIcon" />
            <img src={InstagramIcon} alt="" className="footerSocialIcon" />
            <img src={LinkedinIcon} alt="" className="footerSocialIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
