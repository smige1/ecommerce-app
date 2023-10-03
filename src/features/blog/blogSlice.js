import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import { blogService } from "./blogService";
const getUserfromLocalStorage = localStorage.getItem("product")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const blogState = {
    blog: getUserfromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:"",
}


export const getAllBlogs = createAsyncThunk(
    'blogs/get',
    async( thunkAPI) => {
        try{
            return await blogService.getBlogs()
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
             return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getABlog = createAsyncThunk(
    'blog/get',
    async(id, thunkAPI) => {
        try{
            return await blogService.getBlog(id)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
             return thunkAPI.rejectWithValue(message)
        }
    }
)

export const blogSlice = createSlice({
    name:'blog',
    initialState: blogState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase( getAllBlogs.pending,  (state)=> {
            state.isLoading =  true;
        })
        .addCase(getAllBlogs.fulfilled, (state, action )=> {
            state.isError =false;
            state.isSuccess = true;
            state.isLoading =  false;
            state.message =  action.error;
            state.blog = action.payload;
            if (state.isSuccess === true) {
                toast.info("Blog created successfully");
            }
        })
        .addCase(getAllBlogs.rejected, (state, action )=> {
            state.isError =true;
            state.isSuccess = false;
            state.isLoading =  false;
            state.message = action.payload;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })
        .addCase( getABlog.pending,  (state)=> {
            state.isLoading =  true;
        })
        .addCase(getABlog.fulfilled, (state, action )=> {
            state.isError =false;
            state.isSuccess = true;
            state.isLoading =  false;
            state.message =  action.error;
            state.singleBlog = action.payload;
            if (state.isSuccess === true) {
                toast.info("Blog created successfully");
            }
        })
        .addCase(getABlog.rejected, (state, action )=> {
            state.isError =true;
            state.isSuccess = false;
            state.isLoading =  false;
            state.message = action.payload;
            if (state.isError === true) {
                toast.error(action.error)
            }
        });
    }
    
})

export const { reset } = blogSlice.actions
export default blogSlice.reducer;
