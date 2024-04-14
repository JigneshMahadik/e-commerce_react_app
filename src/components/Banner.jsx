import "./style.css"
import pro1 from "./assets/pro-3.jpg"
import pro2 from "./assets/pro-4.jpeg"
import pro3 from "./assets/pro-6.jpeg"
import pro4 from "./assets/pro-2.jpg"
import { useEffect, useState } from "react"
import axios from 'axios'
import { NavLink } from "react-router-dom"

export function Banner(){
    
    const [ category, setCategory ] = useState([{}]);
    const [ products, setProducts ] = useState([{}]);    

    useEffect(()=>{
        getCategories();
        getProductOnLoad();
    },[]);
    
    async function getProductOnLoad(){
        const products = await axios.get("http://127.0.0.1:8000/api/products");
        setProducts(products.data.data);
    }

    async function getCategories(){
        const res = await axios.get("http://127.0.0.1:8000/api/categories");
        // console.log(res.data.data);
        setCategory(res.data.data);
    }
    async function selectedCategory(id){
        if(id.target.value != 0){
            // console.log("products",id.target.value);
            const res = await axios.get(`http://127.0.0.1:8000/api/category/${id.target.value}/product`);
            // console.log("products",res.data.data);
            setProducts(res.data.data);
        }
    }

    return(
        <div>
            <div id="banner-main">
                {/* Top Rated Brands and Products */}
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mt-8">
                    <div id="product-head">
                        {/* {console.log("Jack",category)} */}
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 float-left mb-6 mr-14">Top Rated Brands and Products</h2>
                        <select id="dropdown" onChange={selectedCategory}>
                            <option value={0}>Select a category</option>
                            {
                                category.map((item,id)=>{
                                    return(<option key={id} value={item.id}>{item.category_name}</option>)
                                })
                            }
                            {/* <option value="">Select Category</option>
                            <option>Mobile</option>
                            <option>Clothes</option>
                            <option>Home Aplliances</option>
                            <option>Cosmetic</option> */}
                        </select>
                    </div>
                    <div className="mt-6 pt-9 pb-9 pl-4 pr-4 gap-9 rounded-lg border-solid border-y-2 border-" id="pro-main-cont">
                        {/* Product List */}
                        {
                            products.map((pro,index)=>{
                                return(
                                    <div className="bg-slate-100 p-3 rounded-lg" id="pro-card" key={index}>
                                        <NavLink to={`/product-detail/${pro.id}`}>
                                        <div id="pro-1">
                                            <img src={pro.image} id="pro-img"/>
                                        </div>
                                        <div id="pro-det">
                                            {/* <h2>{pro.product_name}</h2> */}
                                            <h2>₹{pro.price}</h2>
                                        </div>
                                        <div id="pro-name">
                                            {pro.product_name}
                                        </div>
                                        </NavLink>
                                        <div id="btn-cart">Add to Cart</div>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="w-64 bg-slate-100 p-3 rounded-lg" id="pro-card">
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
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}