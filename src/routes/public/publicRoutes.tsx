import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/public/home/Home";
import Login from "../../pages/public/login/Login";
import Singup from "../../pages/public/singup/Signup";


export const publicRoutes= () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<Singup />} />
            <Route path="/*" element={<Navigate to={"/"}/>}  />
        </Routes>
    </div>
  )
}
