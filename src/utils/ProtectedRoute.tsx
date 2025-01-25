import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}:any) => {
    const isUserLoggedIn = useSelector(
        (state: {
          onBoarding: {
            isUserLoggedIn:boolean
          };
        }) => state.onBoarding.isUserLoggedIn
      );
    let location = useLocation();

    if(!isUserLoggedIn) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;