import { Navigate } from "react-router-dom";


const ProtectedRoute=({children}) =>{
    // ProtectedRoute checks login status and either shows the gage or redirects to login
    // children means --> whatever component is wrapped inside ProtectedRoute
    const user= JSON.parse(localStorage.getItem("user"));
    if(!user){
        return <Navigate to ="/login"/>;
    }
    return children;
}
export default ProtectedRoute;