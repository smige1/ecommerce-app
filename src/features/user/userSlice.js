import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {authService} from "./authService";

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

export const registerUser = createAsyncThunk(
    'auth/register',
    async(user, thunkAPI) => {
        try{
            return await authService.register(user)
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
    async(user, thunkAPI) => {
        try {
            return authService.loginUser(user)
        } catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const logoutUser = createAsyncThunk(
    'auth/logout',
    async(user, thunkAPI) => {
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
    async(user, thunkAPI) => {
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
export const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        reset : (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: (builder, fulfilled) => {
        builder
        .addCase( registerUser.pending,  (state)=> {
            state.isLoading =  true
        })
        .addCase(registerUser.fulfilled, (state, action )=> {
            state.isError =false
            state.isSuccess = true
            state.isLoading =  false
            state.message =  ""
            state.user = action.payload  
        })
        .addCase(registerUser.rejected, (state, action )=> {
            state.isError =true
            state.isSuccess = false
            state.isLoading =  false
            state.message = action.payload
            state.user = null
        })
        .addCase( loginUser.pending,  (state)=> {
            state.isLoading =  true            
        })
        .addCase(loginUser.fulfilled, (state, action )=> {
            state.isError =false
            state.isSuccess = true
            state.isLoading =  false
            state.user = action.payload
        })
        .addCase(loginUser.rejected, (state, action )=> {
            state.isError =true
            state.isLoading =  false
            state.message = action.payload
            state.user = null
        })
        .addCase(logoutUser.fulfilled, (state, action )=> {
            state.isError =false
            state.isSuccess = true
            state.isLoading =  false
            state.message =  ""
            state.user = null
        })
        .addCase(getCurrentUser.rejected, (state, action) => {
            state.isError =true
            state.isLoading =  false
            state.message = action.payload
            state.user = null
        })
        .addCase(getCurrentUser.fulfilled, (state, action) => {
            state.isError =false
            state.isLoading =  false
            state.isSuccess = true
            state.user= action.payload
        })
        .addCase(getCurrentUser.pending, state => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = true
        })
    }
})

export const { reset } = AuthSlice.actions
export default AuthSlice.reducer