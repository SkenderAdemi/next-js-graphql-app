export default function Gems({ title, image, countryCode, description }) {
  return (
    <div className="img-card">
      <img src={image} alt="" />
      <span className={`card__flag fi fi-${countryCode}`}></span>
      <span className="card__label">{title}</span>
      <span className="card__text">{description}</span>
    </div>
  );
}
