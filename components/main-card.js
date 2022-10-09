export default function MainCard({
  preTitle,
  title,
  currency,
  fromPrice,
  description,
  image,
  countryCode,
}) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-wrapper">
        <span className="card__pre-title">{preTitle}</span>
        <span className="card__title">{title}</span>
        <span className="card__text">{description}</span>
        <span className="card__price">
          From {currency} {fromPrice}
        </span>
      </div>
      <span className={`card__flag fi fi-${countryCode}`}></span>
    </div>
  );
}
