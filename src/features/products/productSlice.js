import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import { productService } from "./productService";
const getUserfromLocalStorage = localStorage.getItem("product")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const productState = {
    product: getUserfromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:"",
}


export const getAllProducts = createAsyncThunk(
    'product/get',
    async( thunkAPI) => {
        try{
            return await productService.getProducts()
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
             return thunkAPI.rejectWithValue(message)
        }
    }
)

export const addToWishlist = createAsyncThunk(
    'product/wishlist',
    async(prodId, thunkAPI) => {
        try{
            return await productService.addToWishlist(prodId)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
             return thunkAPI.rejectWithValue(message)
        }
    }
)


export const productSlice = createSlice({
    name:'product',
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase( getAllProducts.pending,  (state)=> {
            state.isLoading =  true;
        })
        .addCase(getAllProducts.fulfilled, (state, action )=> {
            state.isError =false;
            state.isSuccess = true;
            state.isLoading =  false;
            state.message =  action.error;
            state.product = action.payload;
            if (state.isSuccess === true) {
                toast.info("Product created successfully");
            }
        })
        .addCase(getAllProducts.rejected, (state, action )=> {
            state.isError =true;
            state.isSuccess = false;
            state.isLoading =  false;
            state.message = action.payload;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })
        .addCase(addToWishlist.pending,  (state)=> {
            state.isLoading =  true;
        })
        .addCase(addToWishlist.fulfilled, (state, action )=> {
            state.isError =false;
            state.isSuccess = true;
            state.isLoading =  false;
            state.message =  action.error;
            state.wishlist = action.payload;
            if (state.isSuccess === true) {
                toast.info("Added to wishlist successful");
            }
        })
        .addCase(addToWishlist.rejected, (state, action )=> {
            state.isError =true;
            state.isSuccess = false;
            state.isLoading =  false;
            state.message = action.error;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })
    }
})

export const { reset } = productSlice.actions
export default productSlice.reducer;
