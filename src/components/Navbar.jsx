import { NavLink } from "react-router-dom"
import "./style.css"
import cart from "./assets/cart-1.png"
import stack from "./assets/stack.png"
// import { fireStore } from "../firebase"
import { db } from "../firebase"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
// import { useState } from "react"

export function Navbar(){

    const [user, setUser] = useState("");

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('user'));
        if(data != "")
        {
            setUser(data);
            // console.log(data);
        }
    });

    function signup(){
        let htmlFormsignup = document.getElementById("signupform");
        // htmlFormsignup.style.position = "fixed";
        htmlFormsignup.style.display = "block";
        // htmlFormsignup.style.background = "red";
        // htmlFormsignup.style.left = "50%";
        // document.getElementById("nav").style.overflowY = "hidden";
    }

    async function btnSignUp(e){
        e.preventDefault();
        let phone = document.getElementById("mobile").value;
        // setUser(fn);
        try{
            await setDoc(doc(db,"users", phone),{
                firstName : document.getElementById("fname").value,
                lastName : document.getElementById("lname").value,
                mobile : phone,
                email : document.getElementById("email").value,
                password : document.getElementById("password").value,
                address : document.getElementById("address").value,
                pinCode : document.getElementById("pincode").value,
            });
            // alert("Sign up successfully");
            localStorage.setItem("user", JSON.stringify(document.getElementById("fname").value+" "+document.getElementById("lname").value));
            location.replace(location.href);
            // document.getElementById("signupform").style.display = "none";
        }
        catch (error) {
            console.error("Error adding document: ", error);
            alert("Error signing up. Please try again later.");
        }
    }
    // async function getData(e){
    //     e.preventDefault();
    //     const res = await getDoc(doc(db, "users", "1231231233"));
    //     if(res.exists()){
    //         console.log("exists");
    //     }
    //     else{
    //         console.log("not !");
    //     }
    //     location.replace(location.href);
        // console.log(res.data());
        // document.getElementById("signupform").style.display = "none";
    // }

    function logout(){
        // localStorage.setItem("user","");
        localStorage.removeItem("user");
        location.replace(location.href);
    }

    return(
        <div>
            {/* <div id="nav-1"></div> */}
            <header className="text-gray-600 body-font" id="nav">
                <div className="container mx-auto flex flex-wrap p-3 md:flex-row justify-between">
                    <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl" id="logo-text">E-Cart</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center" id="menu">
                        <NavLink to="/" className="mr-5 ml-16 text-stone-950 text-lg font-medium" id="menu1">Home</NavLink>
                        <NavLink to="/orders" className="mr-5 text-stone-950 text-lg font-medium" id="menu2">Orders</NavLink>
                        {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
                    </nav>
                    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Dark Mode
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button> */}
                    {/* Dark Mode */}
                    {
                        user ?(<p id="logged-user" onClick={logout}>{user}</p>):(<p id="signup" onClick={signup}>Sign Up</p>)
                    }
                    {/* <p id="signup" onClick={signup}>Sign Up</p> */}
                    <NavLink to="/cart">
                        <div id="cart-cont">
                            <img src={cart} width={30} className="mr-1" id="cart-icon"/>
                            <p id="cart-count">9</p>
                        </div>
                    </NavLink>
                    <input type="checkbox" id="checkboxInput" />
                        <label htmlFor="checkboxInput" className="toggleSwitch" id="toggleSwitch">
                    </label>
                    <img src={stack} id="stack-icon"/>
                </div>
            </header>

            {/* Sign up page */}
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="signupform">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 top-0">
                        <div className="flex min-h-full flex-col justify-center px-6 pb-5 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-6" action="#">
                                <div className=" flex gap-6">
                                    <div className="w-2/4">
                                        <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                                        <div className="mt-2">
                                        <input id="fname" name="fname" type="text" autoComplete="fname" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                                    <div className="w-2/4">
                                        <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                                        <div className="mt-2">
                                        <input id="lname" name="lname" type="text" autoComplete="lname" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
                                    <div className="mt-2">
                                    <input id="mobile" name="mobile" type="text" autoComplete="mobile" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        {/* <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
                                    </div>
                                    </div>
                                    <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                                    <div className="mt-2">
                                    <input id="address" name="address" type="text" autoComplete="address" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="pincode" className="block text-sm font-medium leading-6 text-gray-900">Pin Code</label>
                                    <div className="mt-2">
                                    <input id="pincode" name="pincode" type="text" autoComplete="pincode" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div>
                                    <button onClick={btnSignUp} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                                    {/* <button onClick={getData} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button> */}
                                </div>
                                </form>

                                <p className="mt-10 text-center text-sm text-gray-500">
                                Already have an account?
                                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</a>
                                </p>
                            </div>
                        </div>
                        </div>
                        {/* <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div> */}
                    </div>
                    </div>
                </div>
            </div>


        </div>
    )
}