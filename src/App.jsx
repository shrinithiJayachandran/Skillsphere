import { useState, useEffect, useMemo } from 'react';
import './App.css';
import { skills } from "./Skills";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Searchbar from './components/Searchbar';
import Filters from './components/Filters';
import SkillList from './components/SkillList';
import SkillModal from './components/SkillModal';
import Footer from './components/Footer';

const load = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};
const save = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ }
};

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('az');
  const [favOnly, setFavOnly] = useState(false);
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useState(() => load('favorites', []));
  const [theme, setTheme] = useState(() =>
    load('theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    save('theme', theme);
  }, [theme]);

  useEffect(() => save('favorites', favorites), [favorites]);

  const toggleFav = (id) =>
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    return skills
      .filter((s) => category === 'All' || s.category === category)
      .filter((s) => !favOnly || favorites.includes(s.id))
      .filter((s) => !q || s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q))
      .sort((a, b) => (sort === 'level' ? b.level - a.level : a.name.localeCompare(b.name)));
  }, [search, category, sort, favOnly, favorites]);

  return (
    <div className="wrap">
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Hero total={skills.length} shown={visible.length} favorites={favorites.length} />
      <div className="toolbar" id="skills">
        <Searchbar search={search} setSearch={setSearch} />
        <Filters
          category={category} setCategory={setCategory}
          sort={sort} setSort={setSort}
          favOnly={favOnly} setFavOnly={setFavOnly}
        />
      </div>
      <SkillList
        skills={visible}
        favorites={favorites}
        onToggleFav={toggleFav}
        onOpen={setSelected}
      />
      {selected && (
        <SkillModal
          skill={selected}
          isFav={favorites.includes(selected.id)}
          onToggleFav={() => toggleFav(selected.id)}
          onClose={() => setSelected(null)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;