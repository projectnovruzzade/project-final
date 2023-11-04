import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Form from './pages/Form/form';
import { Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
function App() {


  const [checkPage,setCheckPage] = useState("closed");


  

  return (
    <>
      <section>
        <Header checkPage={checkPage} setCheckPage={setCheckPage}/>
        <Outlet />
        <Footer />

        <Form checkPage={checkPage} setCheckPage={setCheckPage}/>
      </section>
    </>
  )
}

export default App
