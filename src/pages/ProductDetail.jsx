import { Navbar } from "../components/Navbar";
import pro2 from "../components/assets/pro-5.jpeg"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function ProductDetail(){

    const [ productDetail, setProductDetail ] = useState([]);
    const param = useParams();
    // console.log(param.product_id);

    useEffect(()=>{
        getProductDetail();
    },[])

    async function getProductDetail(){
        const res = await axios.get(`http://127.0.0.1:8000/api/product/${param.product_id}`)
        setProductDetail(res.data.data);
        // console.log(res.data.data);

    }
    // useEffect(()=>{
    //     getCategories();
    //   })
      
    //   async function getCategories(e){
    //     const res = await axios.get("https://c99d-203-109-66-32.ngrok-free.app/api/categories");
    //     console.log("Res",res);
    //     e.preventDefault();
    //   }
      
    return(
        <div>
            <Navbar/>
            <div class=" py-8 pt-20">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row -mx-4" id="pro-det-card">
                        <div class="md:flex-1 px-4">
                            <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
                                <img class="w-full h-full object-cover" src={productDetail.image} alt="Product Image" />
                            </div>
                            <div class="flex -mx-2 mb-4">
                                <div class="w-1/2 px-2">
                                    <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                                </div>
                                <div class="w-1/2 px-2">
                                    <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex-1 px-4">
                            <h2 class="text-2xl font-bold mb-2">Product Detail</h2>
                            <p class="mb-4 mt-5 font-serif text-base font-bold">
                            {productDetail.product_name}
                            </p>
                            <div class="flex mb-4">
                                <div class="mr-4">
                                    <span class="font-bold">Price:</span>
                                    <span class=""> ₹{productDetail.price}</span>
                                </div>
                                <div>
                                    <span class="font-bold ">Availability:</span>
                                    <span class="">In Stock</span>
                                </div>
                            </div>
                            <div class="mb-4">
                                <span class="font-bold">Select Color:</span>
                                <div class="flex items-center mt-2">
                                    <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                    <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                    <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                    <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                                </div>
                            </div>
                            <div class="mb-4">
                                <span class="font-bold ">Select Size:</span>
                                <div class="flex items-center mt-2">
                                    <button class="bg-gray-300 dark:bg-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                    <button class="bg-gray-300 dark:bg-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                    <button class="bg-gray-300 dark:bg-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                    <button class="bg-gray-300 dark:bg-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                    <button class="bg-gray-300 dark:bg-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                                </div>
                            </div>
                            <div>
                                <span class="font-bold">Product Description:</span>
                                <p class="text-sm mt-2">
                                    {productDetail.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}