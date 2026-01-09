import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Login from './Components/Login'
// import Landing from './Components/Landing'
import ProtectedRoute from './Components/ProtectedRoute'



function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  // JSON.parse --> converts strings to JS obj.

  return (
    
    <Routes>
      {/* it is container->holds all routes */}
      <Route path="/" element={<Login/>}/>
      {/* defines single route(path+Component) */}
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={ <ProtectedRoute><Home/></ProtectedRoute>}/>
    </Routes>
  )
}

export default App
