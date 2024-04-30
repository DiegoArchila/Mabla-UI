import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/public/home/Home";
import Login from "../../pages/public/login/Login";
import Singup from "../../pages/public/singup/Signup";
import Products from "../../pages/private/products/Products";


export const PublicRoutes= () => {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />

        <Route path="/products" element={<Products />} />

        <Route path="/*" element={<Navigate to={"/"}/>}  />
    </Routes>

  )
}
