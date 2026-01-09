import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import products from "./data";
import Card from "./Card";
export default function Home(){
    const navigate = useNavigate();
    const user= JSON.parse(localStorage.getItem("user"));
    const logout = ()=>{
        localStorage.setItem("user",JSON.stringify({...user, isLoggedIn:false}));  
        navigate("/login");
    };
    useEffect(()=>{
        const user =JSON.parse(localStorage.getItem("user"));
        if(user.isLoggedIn == false){
            navigate("/login");
        }
    },[])

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    //SEARCH LOGIC
    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    // SORT LOGIC
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sort === "low") return a.newPrice - b.newPrice; // < 0 = keep order, > 0 =swap ,0 =no change  
        if (sort === "high") return b.newPrice - a.newPrice;
        return 0;
    });
    
    return(
        <div className="px-25  bg-[#F2F2F2]">
            <div className="w-full px-5 py-7 fix rounded-lg ">
                <div className="flex item-center justify-center gap-5 font-serif ">
                    <h1 className="text-4xl font-bold absolute left-35">Foodie</h1>
                    <input className="w-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 "
                        type="text"
                        placeholder="Search food..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
            
                    <select className="w-30 border border-gray-300 rounded-md" value ={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="">Sort by price</option>
                        <option value="low">Low → High</option>
                        <option value="high">High → Low</option>
                    </select>

                    <button onClick={logout} className="absolute top-7.5 right-35 px-6 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-600">Logout</button>
                </div>
            </div>
            <h1 className="font-serif flex justify-center text-2xl p-5">Food Menu</h1>
                  
                  {/* CARD LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
                {sortedProducts.map((item) => (
                    <Card key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
}
