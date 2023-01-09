import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Modal: false,
    movie: {}
}

const ModalSlice = createSlice({
    name: "ShowModal",
    initialState,
    reducers:{
        showModal: (state) =>{
            state.Modal = true;
        },
        hideModal:(state) =>{
            state.Modal = false
        },
        addMovie: (state, action) => {
            state.movie = action.payload
        }
    }
})
export const {showModal,hideModal,addMovie} = ModalSlice.actions
export default ModalSlice.reducer