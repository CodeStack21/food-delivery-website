import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignup = (e) => {
    e.preventDefault(); 

    if (!name || !email || !password || !conpassword) {
      alert("All fields are required");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Invalid email format");
      return;
    }

    if (password !== conpassword) {
      alert("Passwords do not match");
      return;
    }

     const existinguser =JSON.parse(localStorage.getItem("user"));
            if(existinguser && existinguser.email === email ){
                alert("User is already present");
                navigate("/login");
                return;
            }
            
    const user = {
      name,
      email,
      password,
      isLoggedIn: false,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created successfully");
    navigate("/login");
  };

  useEffect(()=>{
            const user =JSON.parse(localStorage.getItem("user"));
            if(user && user.isLoggedIn == true ){
                navigate("/home");
            }
    },[])

    const tologin=()=>{
      navigate("/login");
    }

  return (
    <div className="min-h-screen font-serif flex justify-center items-center bg-gray-100">
      <form className="bg-white p-8 rounded-xl shadow-lg w-96" onSubmit={handleSignup}>
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <input className="w-full mb-3 p-2 border rounded-lg" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input className="w-full mb-3 p-2 border rounded-lg" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full mb-3 p-2 border rounded-lg" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input className="w-full mb-3 p-2 border rounded-lg" type="password" placeholder="Confirm Password" onChange={(e) => setConpassword(e.target.value)} />
        <button type="submit" className=" bg-green-600 text-white py-2 w-full rounded-lg hover:bg-green-700 transition">Create Account</button>
        <h2 className="mt-5 text-center text-gray-600 text-md">Already have an account? <span className="text-red-500 cursor-pointer" onClick={tologin}>Login</span></h2>
      </form>
    </div>
    
  );
};

export default Signup;
