function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="nav">
      <div className="logo"><i></i>Skillsphere</div>
      <div className="nav-right">
        <nav className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
        </nav>
        <button className="btn ghost step" onClick={onToggleTheme} aria-label="Switch theme">
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </header>
  );
}

export default Navbar;