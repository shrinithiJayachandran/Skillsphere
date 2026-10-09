import { useEffect } from 'react';

const levelNames = ['', 'Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];

function SkillModal({ skill, isFav, onToggleFav, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="fav modal-close" onClick={onClose} aria-label="Close">✕</button>
        <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
        <span className="tag">{skill.category}</span>
        <h2 id="modal-title">{skill.name}</h2>
        <p>{skill.description}</p>
        <div className="level" role="img" aria-label={`Level ${skill.level} of 5`}>
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n} className={n <= skill.level ? 'on' : ''}></span>
          ))}
        </div>
        <p>Level: <strong>{levelNames[skill.level]}</strong></p>
        <button className="btn step" onClick={onToggleFav}>
          {isFav ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>
    </div>
  );
}

export default SkillModal;