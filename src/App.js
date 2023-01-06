import "./styles.css";
// import Navbar from "./components/Navbar"
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Service from "./routes/Service";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import SignUp from "./routes/SignUp";
import ConnectUs from "./routes/ConnectUs";
// import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/connectus" element={<ConnectUs/>}/>
      </Routes>

      {/* <Navbar/> */}
    
    {/* <Contact/>
    <About/>
    <Service/> */}
    </div>
  )
}

export default App;
