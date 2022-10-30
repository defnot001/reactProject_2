import katieZaferes from '../images/katie-zaferes.png';
import starIcon from '../images/star.png';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <img src={katieZaferes} alt="Katie Zaferes" className="card--image" />
      <div className="card--stats">
        <img src={starIcon} alt="star icon" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136 </span>/ person
      </p>
    </div>
  );
};

export default Card;
