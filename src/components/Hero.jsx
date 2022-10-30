import photoGrid from '../images/photo-grid.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={photoGrid}
        alt="grid of multiple creative photos"
        className="hero--image"
      />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
