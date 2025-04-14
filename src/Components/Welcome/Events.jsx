import React from "react";
import heroBackground from "../../assets/Lera4.jpg"
import img1 from "../../assets/Lera5.jpg";
import img2 from "../../assets/Lera6.jpg";
import img3 from "../../assets/Lera7.jpg";
import img4 from "../../assets/Lera8.jpg";
import '../../Styles/Events.css';

const happeningsData = [{
    id: 1,
    img: img1,
    title: "St. Jahi Primary School, Keffi",
    tag: "EVENT, FEATURED"
},
{
    id: 2,
    img: img2,
    title: "Lera CSR at Jahi Primary School, Keffi",
    tag: "EVENT, FEATURED" 
},
{
    id: 3,
    img: img3,
    title: "Lera Renew Commitment to Gender Equality",
    tag: "EVENT, FEATURED"
  },
  {
    id: 4,
    img: img4,
    title: "Lera Renew Commitment to Gender Equality",
    tag: "EVENT, FEATURED"
  }
]
const CommunityEvents = () =>{
return(
    <section className="community-happenings">
        <header
        className="engagement-hero"
       style={{backgroundImage:`url(${heroBackground})`}}       
        >
            <div className="hero-content">
                <h1>Community Engagements</h1>
                <p>  Community engagement and advocacy services include community outreach
            programs, advocacy campaigns, stakeholder engagement, CSR initiatives,
            and public policy advocacy. Community outreach programs design and
            implement initiatives to engage and benefit local communities, fostering
            positive relationships and social impact.</p>
            </div>
        </header>

        {/* What's happening at Lera Section*/}
        <section className="happenings-section">
            <header>
                <h2>What's happening at Lera</h2>
                <p className="intro">
                We believe in the power of collaboration and community-driven solutions.
            That’s why we partner with local leaders and communities to deeply understand
            their unique challenges and opportunities. By listening to their voices and
            insights, we co-create tailored approaches that address their most pressing
            needs and priorities. Our partnerships are built on trust, mutual respect,
            and a shared commitment to driving positive change.   
                </p>
            </header>

            <section className="happenings-grid">
           

{happeningsData.map((item) =>(
    <article key={item.id} className="happening-card">
        <img src={item.img} alt={item.title} />
        <div className="overlay"/>
        <div className="text-content">
            <h4>{item.title}</h4>
            <span>{item.tag}</span>
        </div>
    </article>
))}
            </section>
        </section>
    </section>
)
}
export default CommunityEvents