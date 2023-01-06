// import Navbar from "../components/Navbar"
// import Hero from "../components/Hero";
// import AboutImg from "../assests/about.jpg"


// function About(){
//     return(
//       <>
//       <Navbar/>
//       <Hero
//       cName ="hero-mid"
//       heroImg={AboutImg}
//       title="About Us"
//       />
//       </>
     
//     )

// }

// export default About;


import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/about.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us "
        // btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
