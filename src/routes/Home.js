
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar" 
import Trip from "../components/Trip";
import HomeImg from "../assests/home.jpeg";



function Home (){
    return(
    <>
    <Navbar/>
    <Hero
    cName="hero"
    // heroImg="https://images.unsplash.com/photo-1499591934245-40b55745b905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
    heroImg={HomeImg}
    title="Your Journey Your Story"
    text="Choose your destination"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
    )

}

export default Home;