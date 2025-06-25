import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are?</h3>
          <p>
            ZeeCare Medical Institute is a forward-thinking healthcare organization dedicated to delivering high-quality, patient-centric medical services through innovation and compassion.

            We combine modern healthcare practices with efficient digital solutions to provide seamless care experiences for patients and smarter management tools for medical professionals. Our mission is to make healthcare more accessible, transparent, and responsive to the needs of every individual.

            At ZeeCare, we believe in blending technology with empathy — ensuring that every interaction, whether in person or through our systems, reflects our commitment to care, trust, and excellence.
          </p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
