import { Link} from "react-router-dom";



const Landing =()=>{
    return(
        <div className=" font-serif min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Welcome</h1>
            <div className="flex gap-4">
                <Link to='/login' className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transistion">Login</Link>
                <Link to='/signup' className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transistion">Singup</Link>
            </div>
        </div>
    )
}
export default Landing;