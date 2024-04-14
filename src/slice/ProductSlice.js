import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";


const [initialCategory, setCategory] = useState([{}]);

const res = axios.get("http://127.0.0.1:8000/api/categories");
setCategory(res.data.data);


const initialState = {
    movie : initialCategory
};

const productSlice = createSlice({
    name : 'Category',
    initialState,
    reducers:{
        getCategory:(categoryState, action)=>{
            categoryState.movie = action.payload
            // categoryState = action.payload
        }
    }
});


export const { getCategory } = productSlice.actions;
export default productSlice.reducer;

