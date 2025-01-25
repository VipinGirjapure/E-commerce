import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ActiveUserIcon,
  CancelIcon,
  CartIcon,
  HeartIcon,
  LightUserIcon,
  LogoutIcon,
  MallBagIcon,
  ReviewsIcon,
  UserIcon,
} from "../../assets/Assets";
import AdHeader from "./AdHeader";
import "./index.css";
import "../../utils/ColorsFile.css";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleGetLocalData, handleLogOutAction, } from "../../redux/reducers/onboarding/onBoardingSlice";
const profileMenuListOptions = [
  {
    label: "Manage My Account",
    icon: LightUserIcon,
    path: "/update_profile",
  },
  {
    label: "My Order",
    icon: MallBagIcon,
    path: "/orders",
  },
  {
    label: "My Cancellations",
    icon: CancelIcon,
    path: "/orders/cancellations",
  },
  {
    label: "My Reviews",
    icon: ReviewsIcon,
    path: "/reviews",
  },
  {
    label: "Logout",
    icon: LogoutIcon,
    path: "",
  },
];
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const isUserLoggedIn = useSelector(
    (state: {
      onBoarding: {
        isUserLoggedIn: boolean;
      };
    }) => state.onBoarding.isUserLoggedIn
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOptionClick = (item: any) => {
    if (item.label.toLowerCase() === "logout") {
      dispatch(handleLogOutAction());
      navigate("");
    } else {
      navigate(item.path);
    }
  };

  useEffect( ()=>{
    dispatch(handleGetLocalData());
    console.log("VIPIN-----")
  },[])

  return (
    <div className="main">
      <AdHeader />
      <div className="header">
        <div className="logoContainer">
          <p className="logo">Exclusive</p>
        </div>
        <div className="navItemContainer">
          <NavLink
            className={({ isActive }) =>
              ["navItem", isActive ? "active" : null].filter(Boolean).join(" ")
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ["navItem", isActive ? "active" : null].filter(Boolean).join(" ")
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              ["navItem", isActive ? "active" : null].filter(Boolean).join(" ")
            }
          >
            About
          </NavLink>
          {isUserLoggedIn ? (
            <NavLink
              to="/deals"
              className={({ isActive }) =>
                ["navItem", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Deals
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                ["navItem", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              Sign Up
            </NavLink>
          )}
        </div>
        <div className="lastHeaderItem">
          <input
            className="searchInput"
            placeholder={`What are you looking for?`}
          />
          <div className="headerIcons">
            <Badge
              badgeContent={4}
              color="error"
              onClick={() => navigate("/wishlist")}
            >
              <img src={HeartIcon} alt="" className="goToButtons" />
            </Badge>
            <Badge
              badgeContent={4}
              color="error"
              sx={{ margin: "0 15px" }}
              onClick={() => navigate("/cart")}
            >
              <img src={CartIcon} alt="" className="goToButtons cartIconBtn" />
            </Badge>
            {isUserLoggedIn && (
              <div className="userContainer">
                {isActive ? (
                  <div
                    className="activeProfileBtn goToButtons"
                    onClick={() => setIsActive((prev) => !prev)}
                  >
                    <img src={ActiveUserIcon} alt="" className="goToButtons" />
                    <div className="profileMenuList">
                      {profileMenuListOptions.map((item) => {
                        return (
                          <button
                            className="listItem"
                            key={item.label}
                            onClick={() => handleOptionClick(item)}
                          >
                            <img
                              src={item.icon}
                              alt=""
                              className="goToButtons menuListIcon"
                            />
                            <p
                              style={{ color: "#FFFFFF" }}
                              className="menuItemText"
                            >
                              {item.label}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <img
                    src={UserIcon}
                    alt=""
                    className="goToButtons"
                    onClick={() => setIsActive((prev) => !prev)}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
