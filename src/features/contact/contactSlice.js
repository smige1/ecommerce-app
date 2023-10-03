import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import { contactService } from "./contactService";
const getUserfromLocalStorage = localStorage.getItem("contact")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const contactState = {
    contact: getUserfromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:"",
}


export const createQuery = createAsyncThunk(
    "contact/post",
    async(contactData, thunkAPI) => {
        try{
            return await contactService.postQuery(contactData)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
             return thunkAPI.rejectWithValue(message)
        }
    }
)

// export const addToWishlist = createAsyncThunk(
//     'product/wishlist',
//     async(prodId, thunkAPI) => {
//         try{
//             return await productService.addToWishlist(prodId)
//         }catch(error){
//             const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//              return thunkAPI.rejectWithValue(message)
//         }
//     }
// )


export const contactSlice = createSlice({
    name:'contact',
    initialState: contactState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase( createQuery.pending,  (state)=> {
            state.isLoading =  true;
        })
        .addCase(createQuery.fulfilled, (state, action )=> {
            state.isError =false;
            state.isSuccess = true;
            state.isLoading =  false;
            state.message =  action.error;
            state.contact = action.payload;
            if (state.isSuccess === true) {
                toast.info("Enquiry Submitted");
            }
        })
        .addCase(createQuery.rejected, (state, action )=> {
            state.isError =true;
            state.isSuccess = false;
            state.isLoading =  false;
            state.message = action.payload;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })
        // .addCase(addToWishlist.pending,  (state)=> {
        //     state.isLoading =  true;
        // })
        // .addCase(addToWishlist.fulfilled, (state, action )=> {
        //     state.isError =false;
        //     state.isSuccess = true;
        //     state.isLoading =  false;
        //     state.message =  action.error;
        //     state.wishlist = action.payload;
        //     if (state.isSuccess === true) {
        //         toast.info("Added to wishlist successful");
        //     }
        // })
        // .addCase(addToWishlist.rejected, (state, action )=> {
        //     state.isError =true;
        //     state.isSuccess = false;
        //     state.isLoading =  false;
        //     state.message = action.error;
        //     if (state.isError === true) {
        //         toast.error(action.error)
        //     }
        // })
    }
})

export const { reset } = contactSlice.actions
export default contactSlice.reducer;
