import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Style from "./style";
import Footer from "../footer/footer";
import AddBtn from "../addBtn/addBtn";
import toast, { Toaster , useToaster } from "react-hot-toast";
import { useEffect, useState } from "react";


const Layout = () => {
  const [style, setStyle] = useState({})
  const getStyle = ()=>{
    return JSON.parse(localStorage.getItem("theme-colors"))
  }
  useEffect(()=>{
    setStyle(getStyle())
  },[])
  return (
    <div className="bg-1 vh-100 main-dev">
      <Toaster 
      position="top-center"
      toastOptions={{
        style:{
          background: style.color_2,
          color: style.color_4,
          fontSize:20,
        }
      }}
      />
      <Style />
      {/* <Header /> */}
      <Outlet />
      <Footer />
      <AddBtn />
    </div>
  );
};

export default Layout;
