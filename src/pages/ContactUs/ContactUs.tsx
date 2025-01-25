import { Paper } from "@mui/material";
import "./ContactUs.css";
import { MailIcon, PhoneIcon } from "../../assets/Assets";
import RedButton from "../../commonComponents/Buttons/RedButton";
const ContactUs = () => {
    return (
        <div className="contactUsMainContainer">
            <Paper className="contactUsInfoBox">
                <div className="contactUsInfoBoxHeadingContainer">
                    <img src={PhoneIcon} alt="" className="contactUsInfoBoxHeadingIcon" />
                    <p className="contactUsInfoBoxHeading">Call To Us</p>
                </div>
                <div
                    className=""
                    style={{ display: "flex", flexDirection: "column", marginBottom: 40 }}
                >
                    <p
                        className=""
                        style={{ margin: "10px 0 5px 0", fontSize: 18, fontWeight: 500 }}
                    >
                        We are available 24/7, 7 days a week.
                    </p>
                    <p
                        className=""
                        style={{ margin: "10px 0 5px 0", fontSize: 18, fontWeight: 500 }}
                    >
                        Phone: +8801611112222
                    </p>
                </div>
                <div className="line" />

                <div className="contactUsInfoBoxHeadingContainer">
                    <img src={MailIcon} alt="" className="contactUsInfoBoxHeadingIcon" />
                    <p className="contactUsInfoBoxHeading">Write To Us</p>
                </div>
                <div
                    className=""
                    style={{ display: "flex", flexDirection: "column", marginBottom: 40 }}
                >
                    <p
                        className=""
                        style={{ margin: "10px 0 5px 0", fontSize: 18, fontWeight: 500 }}
                    >
                        Fill out our form and we will contact you within 24 hours.
                    </p>
                    <p
                        className=""
                        style={{ margin: "10px 0 5px 0", fontSize: 18, fontWeight: 500 }}
                    >
                        Emails: customer@exclusive.com
                    </p>
                    <p
                        className=""
                        style={{ margin: "10px 0 5px 0", fontSize: 18, fontWeight: 500 }}
                    >
                        Emails: support@exclusive.com
                    </p>
                </div>
            </Paper>
            <Paper className="contactUsFormBox">
                <div className="formInputContainer">
                    <input
                        type="text"
                        className="contactFormInput"
                        placeholder="Your Email"
                        required
                    />
                    <input
                        type="text"
                        className="contactFormInput"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="text"
                        className="contactFormInput"
                        placeholder="Your Phone"
                        required
                    />
                </div>
                <textarea
                    value={""}
                    rows={5}
                    placeholder="Your Message"
                    className="contactFormMessage"
                    required
                />
                <div className="redButtonContainer">
                    <RedButton text="Send Message" handleNavigation={undefined} width={"215px"} />
                </div>
            </Paper>
        </div>
    );
};

export default ContactUs;
