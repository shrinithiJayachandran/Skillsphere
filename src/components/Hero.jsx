function Hero({ total, shown, favorites }) {
  return (
    <>
      <section className="hero" id="about">
        <div className="pixels" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>
        <h1>Every skill, in one place.</h1>
        <p>Search, filter and favorite the skills you use. Click any card to see more.</p>
        <a className="btn step" href="#skills">Browse skills</a>
      </section>
      <div className="stats">
        <div className="stat"><strong>{total}</strong><span>Total skills</span></div>
        <div className="stat"><strong>{shown}</strong><span>Showing now</span></div>
        <div className="stat"><strong>{favorites}</strong><span>Favorites</span></div>
      </div>
    </>
  );
}

export default Hero;