import React from "react";
import "../styles/aboutComponents/AboutUs.css"

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-header" style={{
        backgroundImage: "url('/assets/images/about-bg.jpg')",
      }}>
        <h1>ABOUT US</h1>
        <p>Porta tellus suscipit eget arcu eu nec quis scelerisque nam vitae,
        turpis integer iaculis tristique vivamus mattis egestas.</p>
      </div>
      <div className="about-us__story">
        <h2 className="about-us__story-heading">Our Story</h2>
        <h3 className="about-us__story-title">
          The fascination of workspace furniture
        </h3>
        <p className="about-us__story-paragraph">
          Blandit massa, eleifend eget morbi morbi in eleifend gravida in id
          lorem erat donec ipsum nunc est et arcu dolor ut enim mi eu tempus,
          maecenas pharetra eget pretium ultrices mollis facilisi.
        </p>
        <p className="about-us__story-paragraph">
          Arcu erat turpis sed ullamcorper viverra amet, vel laoreet massa eu
          consequat ultricies accumsan, a magna morbi egestas augue proin
          sagittis, sit neque volutpat nisi elit mattis aenean eget eget
          facilisis massa duis volutpat purus diam nec at orci lacinia lectus id
          enim diam vivamus euismod nibh venenatis.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
