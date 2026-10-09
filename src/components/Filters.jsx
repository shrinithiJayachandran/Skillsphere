import { categories } from '../Skills';

function Filters({ category, setCategory, sort, setSort, favOnly, setFavOnly }) {
  return (
    <div className="filter-row">
      <div className="chips" role="group" aria-label="Filter by category">
        {categories.map((c) => (
          <button
            key={c}
            className="chip"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="controls">
        <button className="chip" aria-pressed={favOnly} onClick={() => setFavOnly(!favOnly)}>
          Favorites only
        </button>
        <select className="select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort skills">
          <option value="az">Sort: A to Z</option>
          <option value="level">Sort: Highest level</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;