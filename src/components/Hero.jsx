import AmazoneImage from "../assets/amazon.png";
import FlipkartImage from "../assets/flipkart.png";
import HeroImage from "../assets/shoe_image.png";

const Hero = () => {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button>Category</button>
          </div>
          <div className="hero-shoping">
            <p>Also Available on</p>
            <div className="brand-img">
              <img src={AmazoneImage} alt="Amazone" />
              <img src={FlipkartImage} alt="Flipkart" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img className="shoes-img" src={HeroImage} alt="Nike Shoes" />
        </div>
      </main>
    </>
  );
};

export default Hero;
