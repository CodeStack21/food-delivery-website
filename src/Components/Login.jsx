import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate= useNavigate();
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");

    useEffect(()=>{
            const user =JSON.parse(localStorage.getItem("user"));
            if(user.isLoggedIn == true){
                navigate("/home");
            }
    },[])

    const handlesighup=()=>{
        navigate("/signup");
    }

    const handleLogin =()=>{
        const user =JSON.parse(localStorage.getItem("user"));

        if(!user){
            alert("No user found.please signup");
            return;
        }

        if(email === user.email && password === user.password){
            user.isLoggedIn =true;
            localStorage.setItem("user",JSON.stringify({...user,isLoggedIn:true}));
            navigate("/home");
        }else{
            alert("inavaild crediential");
        }
    };

    return(
        <div className="min-h-screen flex justify-center items-center bg-gray-100 font-serif">
            <diV className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <input className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
                <input className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="password" type="password" onChange={(e)=> setPassword(e.target.value)}/>
                <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Login</button>
                <h1  className="text-gray-600 mt-5 text-center text-md">New to Foodie? <span onClick={handlesighup} className="text-blue-500 cursor-pointer">Create Account</span></h1>
            </diV>
        </div>
    );
}