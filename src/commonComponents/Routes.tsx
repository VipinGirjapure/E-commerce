import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Header from "./Header/Header";
import Login from "../features/OnBoarding/Login";
import Footer from "./Footer/Footer";
import ProtectedRoute from "../utils/ProtectedRoute";
import PageNotFound from "./PageNotFound/PageNotFound";
import WishList from "../pages/WishList/WishList";
import ContactUs from "../pages/ContactUs/ContactUs";
import ProductDetails from "./ProductDetails/ProductDetails";
import CartPage from "../pages/CartPage/CartPage";
import EditProfile from "../pages/EditProfile/EditProfile";


const RoutesComp = () => {
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={
                    <CartPage />
                //<ProtectedRoute>
                //</ProtectedRoute>
            } />
              <Route path="/wishlist" element={
                    <WishList />
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/id" element={<ProductDetails />} />
            <Route path="/update_profile" element={<EditProfile />} />
            <Route
                path="*"
                element={<PageNotFound />}
            />
        </Routes>
        <Footer />
    </BrowserRouter>
}

export default RoutesComp;