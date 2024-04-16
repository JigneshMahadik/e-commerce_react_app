import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
    movie: null, // Initially set to null
};

// Define slice
const categorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers: {
        getCategory: (categoryState, action) => {
            // const resData = async()=>{
            //     await axios.get("http://127.0.0.1:8000/api/categories");
            // }
            categoryState.movie = action.payload;
            // console.log("payload",action.payload);
        },
    },
});

// Export action
export const { getCategory } = categorySlice.actions;

// Async function to fetch data
export const fetchCate = async () => {
    try {
        const res = await axios.get("https://ecomm.techrenuka.com/api/categories");
       // dispatch(getCategory(res.data)); // Dispatch action with fetched data
       return res.data;
        // console.log("data",res.data);
    } catch (error) {
        // Handle errors if any
        console.error("Error fetching categories:", error);
    }
};

// Export reducer
export default categorySlice.reducer;


