import { ChangeEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginCoverImg } from "../../assets/Assets";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { IUserData } from "./Types";
import { handleSubmitAction } from "../../redux/reducers/onboarding/onBoardingSlice";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Login = () => {
  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    name: "",
    email: "",
    password: "",
  });

//  const userStateData = useSelector(
//    (state: {
//      onBoarding: {
//        userData: IUserData;
//      };
//    }) => state.onBoarding.userData
//  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIsSignUp = () => {
    setUserData({
      ...userData,
      name: "",
    });
    setIsSignUpPage((prev) => !prev);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if(userData.email && userData.password){
        dispatch(handleSubmitAction(userData));
        setUserData({
            ...userData,
            name: "",
            email: "",
            password: "",
        });
        navigate("/")
    }
  };
  return (
    <div className="mainContainer">
      <div className="imageContainer">
        <img src={LoginCoverImg} alt="" className="imageBanner" />
      </div>
      <div className="content">
        <div className="onBoardingForm">
          <p className="mainHeading">
            {isSignUpPage ? "Create an account" : "Log in to Exclusive"}
          </p>
          <p className="smallHeading">Enter your details below</p>

          {isSignUpPage && (
            <input
              type="text"
              className="formInput"
              name="name"
              placeholder="Name"
              value={userData.name}
              onChange={handleOnChange}
            />
          )}
          <input
            type="text"
            className="formInput"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleOnChange}
          />
          <div className="passwordInput">
            <input
              style={{ border: "none",marginBottom:'5px' }}
              type={isVisible ? "text" : "password"}
              className="formInput"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleOnChange}
            />
            <button
              className="passwordEyeBtn"
              onClick={() => setIsVisible((prev) => !prev)}
            >
              {isVisible ? (
                <VisibilityOffOutlinedIcon style={{color:'#bdbdbd'}}/>
              ) : (
                <VisibilityOutlinedIcon style={{color:'#bdbdbd'}}/>
              )}
            </button>
          </div>

          {isSignUpPage ? (
            <div className="">
              <button className="createAccountBtn" onClick={handleSubmit}>
                Create Account
              </button>
              <button className="createAccountBtn googleBtn">
                Sign Up With Google
              </button>
            </div>
          ) : (
            <div className="loginButtons">
              <button
                className="createAccountBtn loginBtn"
                onClick={handleSubmit}
              >
                Login
              </button>

              <NavLink to={"/forgotPassword"} className="forgotPassword">
                Forgot Password?
              </NavLink>
            </div>
          )}

          <div className="bottomNote">
            <p className="bottomNoteText">
              {isSignUpPage
                ? "Already have an account?"
                : "First time visiting?"}
            </p>
            <div className="navText" onClick={handleIsSignUp}>
              {isSignUpPage ? "Log in" : "Sign Up"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
