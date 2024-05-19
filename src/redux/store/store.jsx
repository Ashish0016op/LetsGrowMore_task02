import { configureStore } from "@reduxjs/toolkit"
import getUserReducer from "../GetUsers/get_userSlice"

const store = configureStore({
    reducer: {
        getUsers: getUserReducer
    }
});
export default store;