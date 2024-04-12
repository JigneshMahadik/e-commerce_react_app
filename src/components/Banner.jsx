import "./style.css"
import pro1 from "./assets/pro-3.jpg"
import pro2 from "./assets/pro-4.jpeg"
import pro3 from "./assets/pro-6.jpeg"
import pro4 from "./assets/pro-2.jpg"
import { useEffect, useState } from "react"
import axios from 'axios'

export function Banner(){
    
    
    // const [initialState, setInitialState] = useState();
    
    // async function getData(){
    //     const options = {
    //         method: 'GET',
    //         url: 'https://real-time-product-search.p.rapidapi.com/search',
    //         params: {
    //           q: 'all',
    //           country: 'us',
    //           language: 'en'
    //         },
    //         headers: {
    //           'X-RapidAPI-Key': '416989c663msh15a2d1c56ea3abep191e1fjsn8e1bd9673eaa',
    //           'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
    //         }
    //       };
          
    //       try {
    //           const response = await axios.request(options);
    //         //   console.log(response.data);
    //         setInitialState(
    //             {
    //                 categories : [response.data.categories[0].data]
    //             }
    //         )
    //         console.log(initialState);
    //       } 
    //       catch (error) {
    //           console.error(error);
    //       }
    // }
    // useEffect(()=>{
    //     getData();
    // },[initialState]);
    return(
        <div>
            <div id="banner-main">
                {/* Top Rated Brands and Products */}
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mt-8">
                    <div id="product-head">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 float-left mb-6 mr-14">Top Rated Brands and Products</h2>
                        <select id="dropdown">
                            <option value="">Select Category</option>
                            <option>Mobile</option>
                            <option>Clothes</option>
                            <option>Home Aplliances</option>
                            <option>Cosmetic</option>
                        </select>
                    </div>
                    <div className="mt-6 pt-9 pb-9 pl-4 pr-4 gap-9 rounded-lg border-solid border-y-2 border-" id="pro-main-cont">
                        {/* Product List */}
                        <div className="bg-slate-100 p-3 rounded-lg" id="pro-card">
                            <div id="pro-1">
                                <img src={pro1} id="pro-img"/>
                            </div>
                            <div id="pro-det">
                                <h2>UrGear</h2>
                                <h2>₹500.00</h2>
                            </div>
                            <div id="pro-name">
                                Men Printed, Typography Round Neck Pure Cotton Dark Blue T-Shirt
                            </div>
                            <div id="btn-cart">Add to Cart</div>
                        </div>
                        <div className="w-64 bg-slate-100 p-3 rounded-lg" id="pro-card">
                            <div id="pro-1">
                                <img src={pro2} id="pro-img"/>
                            </div>
                            <div id="pro-det">
                                <h2>UrGear</h2>
                                <h2>₹500.00</h2>
                            </div>
                            <div id="pro-name">
                                Men Printed, Typography Round Neck Pure Cotton Dark Blue T-Shirt
                            </div>
                            <div id="btn-cart">Add to Cart</div>
                        </div>
                        <div className="w-64 bg-slate-100 p-3 rounded-lg" id="pro-card">
                            <div id="pro-1">
                                <img src={pro3} id="pro-img"/>
                            </div>
                            <div id="pro-det">
                                <h2>UrGear</h2>
                                <h2>₹500.00</h2>
                            </div>
                            <div id="pro-name">
                                Men Printed, Typography Round Neck Pure Cotton Dark Blue T-Shirt
                            </div>
                            <div id="btn-cart">Add to Cart</div>
                        </div>
                        <div className="w-64 bg-slate-100 p-3 rounded-lg" id="pro-card">
                            <div id="pro-1">
                                <img src={pro4} id="pro-img"/>
                            </div>
                            <div id="pro-det">
                                <h2>UrGear</h2>
                                <h2>₹500.00</h2>
                            </div>
                            <div id="pro-name">
                                Men Printed, Typography Round Neck Pure Cotton Dark Blue T-Shirt
                            </div>
                            <div id="btn-cart">Add to Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}