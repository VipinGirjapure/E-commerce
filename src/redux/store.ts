import { configureStore } from "@reduxjs/toolkit";
import onBoarding from "./reducers/onboarding/onBoardingSlice";
import products from "./reducers/products/ProductsSlice";

const store= configureStore({
    reducer: {
        onBoarding,
        products
      },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;