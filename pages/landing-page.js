import FilterBar from "../components/filter-bar";
import MainCard from "../components/main-card";
import Gems from "../components/gems";

export default function LandingPage({ mostPopulars, hiddenGems }) {
  return (
    <div className="main">
      <div className="hero">
        <div className="hero__layer"></div>
        <div className="hero__info">
          <span className="hero__text">Find your perfect experience</span>
          <FilterBar />
        </div>
      </div>
      <div className="card-container">
        <p className="card-container__title">
          Some of our mos popular destinations
        </p>
        <div className="cards">
          {mostPopulars.map((item) => {
            return (
              <MainCard
                preTitle={item.preTitle}
                title={item.title}
                currency={item.currency}
                fromPrice={item.fromPrice}
                description={item.description}
                image={item.image.url}
                key={item.title}
                countryCode={item.countryCode}
              />
            );
          })}
        </div>
      </div>

      <div className="card-container">
        <div className="card-title-wrapper">
          <span className="divider"></span>
          <p className="card-container__title">Hidden gems</p>
          <span className="divider"></span>
        </div>
        <div className="cards">
          {hiddenGems.map((gem) => {
            return (
              <Gems
                key={gem.title}
                title={gem.title}
                image={gem.image.url}
                countryCode={gem.countryCode}
                description={gem.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
