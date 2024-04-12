import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";


useEffect(()=>{
    getData();
});

const [initialState, setInitialState] = useState();

async function getData(){
    const options = {
        method: 'GET',
        url: 'https://real-time-product-search.p.rapidapi.com/search',
        params: {
          q: 'all',
          country: 'us',
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': '416989c663msh15a2d1c56ea3abep191e1fjsn8e1bd9673eaa',
          'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
        //   console.log(response.data);
        setInitialState(
            {
                categories : [res.data]
            }
        )
        console.log(initialState);
      } 
      catch (error) {
          console.error(error);
      }
}


// const ProductSlice = createSlice({
//     name : 'Category',
//     initialState,
//     reducers:{
//         getCategory:(categoryState, action)=>{
//             categoryState.movie = action.payload.name
//         }
//     }
// });


// export const { getCategory } = ProductSlice.actions;
// export default ProductSlice.reducer;

