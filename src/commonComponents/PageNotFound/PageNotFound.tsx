import { useNavigate } from "react-router-dom";
import RedButton from "../Buttons/RedButton";
import "./index.css"
const PageNotFound = () => {
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate('/')
    }
    return <div className="notFoundContainer">
        <h1 className="notFoundText" style={{fontSize:'3rem'}}>
            404 Page Not Found
        </h1>
        <h5 className="notFoundText" style={{marginBottom:'4rem',marginTop:0}}>
        Your visited page not found. You may go to home page.
        </h5>
        <RedButton text={"Back to home page"} handleNavigation={handleNavigation} width={'254px'}/>
    </div>
}

export default PageNotFound;