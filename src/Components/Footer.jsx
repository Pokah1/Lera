import React from "react";
import Logo from "../assets/Logo.svg";
 import Facebook from "../assets/Facebook.png"
 import Instagram from "../assets/Instagram.png"
 import LinkedIn from "../assets/LinkedIn.png"
 import Youtube from"../assets/Youtube.png"
 import X from"../assets/X.png"
 import "../Styles/Footer.css"

 const Footer = () => {
    return(
<footer className="footer">
<div className="footer-container">
    {/* Contact Info */}
    <address className="footer-top">
        16B, House 2, Ademola Adetokunbo, Wuse II, Abuja. | +234-9-2918264 | <a href="mailto:info@lera.org"> info@lera.org</a>
    </address>
      
    <div className="footer-divider" />

      {/* Main Footer Content */}
    <section className="footer-grid">
        <div className="footer-brand">
            <img src={Logo} alt="LERA Logo" className="logo-img"/>
        </div>
         
         {/* Useful Links */}
        <nav className="footer-links" aria-label="Useful Links">
        <h3>Useful Links</h3>

            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contacts Us</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        </nav>
  
        {/* Our Projects */}
        <nav className="footer-project" aria-label="Our Project">
            <h3>Our Project</h3>
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Partnerships</a></li>
            </ul>
        </nav>

        {/* Subscribe */}
        <section className="footer-subscribe" aria-label="Newsletter Signup">
            <h3>Subscribe</h3>
            <p>Join our community to receive updates</p>
            <form className="subscribe-form">
            {/* <label htmlFor="email" className="sr-only">Email addr</label> */}
<input id="email" type="email" placeholder="Enter your email" required />

              <button type="submit">Subscribe</button>
            </form>
            <p className="disclaimer">
              By subscribing, you agree to our <a href="#">Privacy Policy</a>
            </p>
          </section>
    </section>

  {/* Footer Bottom */}
  <section className="footer-bottom">
    {/* Social Icons */}
    <div className="social-icons" aria-label="Social media links">
        <a href="#"><img src={Facebook} alt="Facebook" /></a>
        <a href="#"><img src={Instagram} alt="Instagram" /></a>
        <a href="#"><img src={LinkedIn} alt="LinkedIn" /></a>
        <a href="#"><img src={Youtube} alt="Youtube" /></a>
        <a href="#"><img src={X} alt="Twitter" /></a>
    </div>

    {/* Policy Links */}
    <nav className="policy-links" aria-label="Policy Links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
    </nav>

    {/* copyright */}
    <div className="copyright">
    &copy; {new Date().getFullYear()} Gender Dynamix. All rights reserved.
    </div>
  </section>
</div>
</footer>
    )
 }
 export default Footer