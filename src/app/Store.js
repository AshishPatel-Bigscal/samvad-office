import { applyMiddleware, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import UserSlice from "../services/UserSlice"
import thunk from "redux-thunk"
const Store = configureStore({
    reducer: {
        user: UserSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk),
})

export default Store