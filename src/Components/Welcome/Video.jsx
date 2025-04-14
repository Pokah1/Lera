import React from "react";
import "../../Styles/Video.css"

const YoutubeWatch =  () =>{
    return(
        <section className="wash-project">
            <header className="wash-heading">
                <h2>
                    <h3>Flagship CSR initiative RUGAN ARDO</h3>
                </h2>
                <h3>
                    <h3>"WASH" PROJECT</h3>
                </h3>
            </header>
            <div className="wash-content">
                <div className="wash-video">
                <iframe className="iframe"
                width="500" 
                height="300" 
                src="https://www.youtube.com/embed/RKK7wGAYP6k?si=ucfIiayi8LPzX5Pc" 
                title="WASH Project Video" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                >
                    </iframe>  
                </div>

                <article className="wash-text">
                <p>
            Many public health challenges such as: malnutrition, malaria, water borne diseases etc. faced by
            communities in Nigeria are largely preventable. Several rural communities in Nigeria lack access
            to safe drinking-water, sanitation and hygiene services; malaria prevention and treatment services;
            as well as access to family planning (FP)/childbirth spacing (CBS) services. Women in rural areas
            are more likely to marry earlier than their urban counterparts, increasing the need for modern
            family planning. However, women in rural areas are less likely to use modern contraceptives when
            compared to their urban counterparts.
          </p>
          <a href="#" className="read-more">
                    Read More
                </a>
                </article>
                
            </div>
        </section>
    )
}

export default YoutubeWatch;