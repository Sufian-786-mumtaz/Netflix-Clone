import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice"

const store  = configureStore({
    reducer:{
        modal:modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store
