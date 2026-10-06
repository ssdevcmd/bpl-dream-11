import { Suspense, useState } from "react";
import Banner from "./components/navbar/homepage/banner/Banner"
import Players from "./components/navbar/homepage/players/Players";
import Navbar from "./components/navbar/Navbar"
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";


const fetchPlayer = async()=>{
  const res = await fetch('/players.json');
  return res.json();
}

function App() {

  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(5000000);

  return (
    <>

    <Navbar coin ={coin}></Navbar>
    <Banner></Banner>
    <Suspense
     fallback={<span className="loading loading-dots loading-xl"></span>}>
    <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
    </Suspense>

    {/* react toastify */}
     <ToastContainer />

     <Footer></Footer>



    </>
  )
}

export default App;
