import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Modal: false,
    movie: {},
    subsciption:false,
    user:{},
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
        },
        setSubscription: (state) =>{
            if(state.user === null){
                state.subsciption = false
            }else{
                state.subsciption = true
            }
        },
        loginUser: (state, action) =>{
            state.user = action.payload
        },
    }
})
export const {showModal,hideModal,addMovie,setSubscription,loginUser} = ModalSlice.actions
export default ModalSlice.reducer