import React from "react";
import img1 from "../../assets/UN.png";
import img2 from "../../assets/PRB.png";
import img3 from "../../assets/nutrition.png";
import img4 from "../../assets/RD.png";
import img5 from "../../assets/Nigeria.png";
import img6 from "../../assets/WorldBank.png";
import img7 from "../../assets/PowerAfrica.png";
import "../../Styles/Partners.css";

const partners = [
  { id: 1, name: "United Nations", image: img1 },
  { id: 2, name: "PRB", image: img2 },
  { id: 3, name: "Scaling Up Nutrition", image: img3 },
  { id: 4, name: "Results for Development", image: img4 },
  { id: 5, name: "Nigeria Government", image: img5 },
  { id: 6, name: "The World Bank", image: img6 },
  { id: 7, name: "Power Africa", image: img7 },
];

const PartnersPage = () => {
  return (
    <section className="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-row">
        {partners.map((partner) => (
          <figure className="partner" key={partner.id}>
            <img src={partner.image} alt={partner.name} />
            <figcaption>{partner.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default PartnersPage;
