import { Fragment } from "react";
import { Divider } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./partials/header/Header";
import Home from "./pages/public/home/Home";
import Login from "./pages/public/login/Login";
import Singup from "./pages/public/singup/Signup";
import Footer from "./partials/footer/Footer";

function App() {

  return (
    <Fragment>
     
      <Header />
      
      <Divider />
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/*" element={<Navigate to={"/"}/>}  />
      </Routes>

      <Footer />

    </Fragment>

  );
}

export default App;
