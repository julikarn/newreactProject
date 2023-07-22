import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios';
// export const showUser = createAsyncThunk("showUser", async (args,{rejectWithValue}) => {

//     const options = {
//         method: 'GET',
//         url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
//         params: { q: 'eminem' },
//         headers: {
//             'X-RapidAPI-Key': '9ccdbeac79msh5cabc162fd65978p19fd84jsna9067d14ada8',
//             'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
//         }
//     };
//     try {
//         const response = await axios.request(options);
        
//         // console.log(response.data.data);
//         return response;
//     } catch (error) {
//         console.error(error);
//         return rejectWithValue(error)

//     }

// })
export const showUser = createAsyncThunk(
    "showUser",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
  
      try {
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchDatas: []
    },
    reducers: {

      searchUser: (state, action)=>{
        state.searchDatas = action.payload;
      }

    },
   extraReducers:{
      
        [showUser.pending]: (state)=>{
            state.loading = true;
        },
        [showUser.fulfilled]: (state,action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        
      },
   
   
})

export default userDetail.reducer;
export const {searchUser} = userDetail.actions;