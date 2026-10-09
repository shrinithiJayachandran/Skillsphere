function SkillCard({ skill, isFav, onToggleFav, onOpen }) {
  return (
    <article className="skill-card">
      <div className="card-top">
        <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
        <button
          className="fav"
          onClick={onToggleFav}
          aria-pressed={isFav}
          aria-label={isFav ? `Remove ${skill.name} from favorites` : `Add ${skill.name} to favorites`}
        >
          {isFav ? '♥' : '♡'}
        </button>
      </div>
      <span className="tag">{skill.category}</span>
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
      <div className="level" role="img" aria-label={`Level ${skill.level} of 5`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={n <= skill.level ? 'on' : ''}></span>
        ))}
      </div>
      <button className="btn ghost step" onClick={() => onOpen(skill)}>View details</button>
    </article>
  );
}

export default SkillCard;