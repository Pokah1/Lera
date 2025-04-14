import React from "react";
import '../../Styles/Home.css';
import landingPageImage from "../../assets/landing-Page.jpg"
import Navbar from "../NavBar";
import AboutPage from "./AboutUs";
import CommunityEvents from "./Events";
import YoutubeWatch from "./Video";
import PartnersPage from "./Partner";
import Footer from "../Footer";

const Home = () => {
    return (
        <>
        
        <Navbar textColor="#fff" bgColor="transparent" />
        
        <main className="home">
          
            <img src={landingPageImage} alt="Smiling girl" className="landingPageImg" />
            <aside className="landingInfo">
               
                <h1>
                    Transforming <br />Narratives, <br />Elevating Impact
                </h1>
                <p>Empowering Your Brand with Strategic Communnication <br /> and Innovative Media Solutions</p>
            </aside>
           
        </main>
        <AboutPage/>
        <CommunityEvents/>
        <YoutubeWatch/>
        <PartnersPage/>
        <Footer/>
        </>
    )
}

export default Home;