import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {authService} from "./authService";
import {toast} from "react-toastify";
const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
    user: getUserfromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:"",
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async(userData, thunkAPI) => {
        try{
            return await authService.register(userData)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
             return thunkAPI.rejectWithValue(message)
        }
    }
)

export const editUserAccount = createAsyncThunk(
    'auth/edit',
    async(userData, thunkAPI) => {
        try{
            const token = JSON.parse(localStorage.getItem('user'))
            return authService.editUserAcc(userData, token)
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const loginUser = createAsyncThunk(
    "auth/login",
    async(userData, thunkAPI) => {
        try {
            return authService.login(userData)
        } catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async(userData, thunkAPI) => {
        try{
            return authService.logout()
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const deleteUser = createAsyncThunk(
    'auth/delete',
    async(userData, thunkAPI) => {
        try{
            const token = JSON.parse(localStorage.getItem('user'))
            return authService.deleteuserAccount(token.token)

        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getCurrentUser = createAsyncThunk(
    'auth/user',
    async(user, thunkAPI) => {
        try{
            const token = JSON.parse(localStorage.getItem('user'))
            return authService.CurrentUser(token)
        } 
        catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase( registerUser.pending,  (state)=> {
            state.isLoading =  true;
        })
        .addCase(registerUser.fulfilled, (state, action )=> {
            state.isError =false;
            state.isSuccess = true;
            state.isLoading =  false;
            state.message =  action.error;
            state.user = action.payload;
            if (state.isSuccess === true) {
                toast.info("user created successfully");
            }
        })
        .addCase(registerUser.rejected, (state, action )=> {
            state.isError =true;
            state.isSuccess = false;
            state.isLoading =  false;
            state.message = action.payload;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })
        .addCase( loginUser.pending,  (state)=> {
            state.isLoading =  true;
        })
        .addCase(loginUser.fulfilled, (state, action )=> {
            state.isError =false;
            state.isSuccess = true;
            state.isLoading =  false;
            state.message =  action.error;
            state.user = action.payload;
            if (state.isSuccess === true) {
                toast.info("User created successfully");
            }
        })
        .addCase(loginUser.rejected, (state, action )=> {
            state.isError =true;
            state.isSuccess = false;
            state.isLoading =  false;
            state.message = action.payload;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })
        .addCase(logoutUser.fulfilled, (state, action )=> {
            state.isError =false;
            state.isSuccess = true;
            state.isLoading =  false;
            state.message =  action.error;
            state.user = action.payload;
            if (state.isSuccess === true) {
                toast.info("User created successfully");
            }
        })
        .addCase( getCurrentUser.pending,  (state)=> {
            state.isLoading =  true;
        })
        .addCase(getCurrentUser.fulfilled, (state, action )=> {
            state.isError =false;
            state.isSuccess = true;
            state.isLoading =  false;
            state.message =  action.error;
            state.user = action.payload;
            if (state.isSuccess === true) {
                toast.info("user created successfully");
            }
        })
        .addCase(getCurrentUser.rejected, (state, action )=> {
            state.isError =true;
            state.isSuccess = false;
            state.isLoading =  false;
            state.message = action.payload;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer;
