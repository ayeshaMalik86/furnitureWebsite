import React from 'react';
import { useEffect } from 'react';
import "../styles/aboutComponents/ImageGallery.css"

const ImageGallery = () => {
   useEffect(() => {
      const images = document.querySelectorAll(".grid-image");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const image = entry.target;
              image.classList.remove("fly-in");
              void image.offsetWidth;
              image.classList.add("fly-in");
            }
          });
        },
        { threshold: 0.1}
      );
  
      images.forEach((image) => observer.observe(image));
  
      return () => observer.disconnect(); 
    }, []);

  return (
    <div className="image-gallery">
      <div className="quote-section">
        <img src="/assets/icons/quote.png" alt="Quote" className='quote-img'></img>
        <p className="quote">
          "Hendrerit ac in aliquet sed etiam interdum ultricies pellentesque egestas convallis etiam elementum enim nisl cursus sit fames malesuada morbi arcu."
        </p>
        <div className="author">
          <img src="assets/icons/user.png" alt="Victor Sullivan" className="author-image" />
          <span className="author-info">
            <strong>Ayesha Malik</strong>
            <br />
            Founder, CEO
          </span>
        </div>
      </div>
      <div className="image-grid">
        <img src="assets/images/desk01.jpg" alt="Desk setup 1" className="grid-image" />
        <img src="assets/images/desk02.jpg" alt="Desk setup 2" className="grid-image" />
        <img src="assets/images/desk03.jpg" alt="Desk setup 3" className="grid-image" />
        <img src="assets/images/desk04.jpg" alt="Desk setup 4" className="grid-image" />
        <img src="assets/images/desk05.jpg" alt="Desk setup 5" className="grid-image" />
        <img src="assets/images/desk06.jpg" alt="Desk setup 6" className="grid-image" />
      </div>
    </div>
  );
};

export default ImageGallery;
