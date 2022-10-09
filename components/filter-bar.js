export default function FilterBar() {
  return (
    <div className="filter-bar">
      <div className="filter-bar__main-info">
        <div className="filter-bar__item">
          <span className="filter-bar__item--main">Where to go</span>
          <span className="filter-bar__item--secondary">Search for place</span>
        </div>
        <div className="filter-bar__dates">
          <div className="filter-bar__item">
            <span className="filter-bar__item--main">From</span>
            <span className="filter-bar__item--secondary">Add dates</span>
          </div>
          <div className="filter-bar__item to-date">
            <span className="filter-bar__item--main">To</span>
            <span className="filter-bar__item--secondary">Add dates</span>
          </div>
        </div>
      </div>

      <div className="filter-bar__item search__item">
        <i className="bi bi-search"></i>
        <span>Search</span>
      </div>
    </div>
  );
}
