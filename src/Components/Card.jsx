// import "./Card.css";
import Price from "./Price.jsx";

export default function Card({product}){
    return (
        <div className="w-[260px]  bg-white rounded-xl shadow-sm hover:shadow-xl transition duratiom-300 cursor-pointer">
            <img className="w-full h-[170px]  object-cover rounded-t-xl" src={product.image} alt={product.title}></img>
            <div className="p-3 font-serif ">
                <h3 className="font-semibold text-lg  text-grey-800">{product.title}</h3>
                <p className="text-sm text-gray-500 truncate">{product.desc}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <Price  oldPrice={product.oldPrice} newPrice={product.newPrice}/>
                    <button className="bg-amber-500 p-1.5 rounded text-white" onClick={()=> alert(`${product.title} added to cart`)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}


