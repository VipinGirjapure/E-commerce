import { Paper } from "@mui/material";
import "./EditProfile.css";
import WhiteButton from "../../commonComponents/Buttons/WhiteButton";
import RedButton from "../../commonComponents/Buttons/RedButton";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };
  return (
    <div style={{ padding: "3.3vw" }}>
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          margin: "20px 0 40px 0",
        }}
      >
        <p className="" style={{ marginRight: 5, color: "red" }}>
          Welcome!
        </p>
        <p className="">{"Vipin Girjapure"}</p>
      </div>
      <Paper style={{ padding: "50px 12vw" }}>
        <p className="" style={{ color: "red", fontSize: 20 }}>
          Edit Your Profile
        </p>
        <div className="">
          <div
            className="formRow"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "30px 0",
            }}
          >
            <div className="">
              <p className="" style={{ color: "black" }}>
                First Name
              </p>
              <input
                type="text"
                className="editProfileFormInput"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="">
              <p className="" style={{ color: "black" }}>
                First Name
              </p>
              <input
                type="text"
                className="editProfileFormInput"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div
            className="formRow"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "30px 0",
            }}
          >
            <div className="">
              <p className="" style={{ color: "black" }}>
                First Name
              </p>
              <input
                type="text"
                className="editProfileFormInput"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="">
              <p className="" style={{ color: "black" }}>
                First Name
              </p>
              <input
                type="text"
                className="editProfileFormInput"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div
            className="formRow"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              margin: "30px 0",
            }}
          >
            <div className="" style={{ width: "100%" }}>
              <p className="" style={{ color: "black" }}>
                Password Changes
              </p>
              <input
                type="text"
                className="editProfileFormInput"
                placeholder="Current Password"
                required
                style={{ width: "97%", marginBottom: 10 }}
              />
              <input
                type="text"
                className="editProfileFormInput"
                placeholder="New Password"
                required
                style={{ width: "97%", marginBottom: 10 }}
              />
              <input
                type="text"
                className="editProfileFormInput"
                placeholder="Confirm New Password"
                required
                style={{ width: "97%", marginBottom: 10 }}
              />
            </div>
          </div>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              margin: "20px 0",
            }}
          >
            <div className="" style={{ marginRight: 20, width: "20%" }}>
              <WhiteButton
                text={"Cancel"}
                handleNavigation={handleCancel}
                width={"100%"}
              />
            </div>
            <RedButton
              text={"Save Changes"}
              handleNavigation={undefined}
              width={"20%"}
            />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default EditProfile;
