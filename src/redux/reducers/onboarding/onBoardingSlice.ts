import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userData:
    {
        name: "",
        email: "",
        password: "",
    },
    isUserLoggedIn: false

}

export const onBoarding = createSlice({
    name: "onBoarding",
    initialState,
    reducers: {
        handleSubmitAction(state, action) {
            state.userData = action.payload
            localStorage.setItem("userData", JSON.stringify(action.payload));
            state.isUserLoggedIn = true
        },
        handleLogOutAction(state) {
            localStorage.removeItem("userData");
            state.isUserLoggedIn = false
        },
        handleGetLocalData(state) {
            const data = localStorage.getItem("userData")
            if (data && JSON.parse(data).email) {
                state.userData = JSON.parse(data)
                state.isUserLoggedIn = true
            }
        }
    }
})

export const { handleLogOutAction, handleSubmitAction, handleGetLocalData } = onBoarding.actions
export default onBoarding.reducer