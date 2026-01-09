export default function Price({oldPrice,newPrice}){
    return (
        <div className="bg-amber-200 m-1 rounded px-2 py-1">
            <span className="line-through text-x">{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span className="text-black text-base ">{newPrice}</span>
        </div>
    )
}
