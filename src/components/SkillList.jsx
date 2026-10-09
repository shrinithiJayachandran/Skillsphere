import SkillCard from './SkillCard';

function SkillList({ skills, favorites, onToggleFav, onOpen }) {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      {skills.length > 0 ? (
        <div className="skills-list">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              isFav={favorites.includes(skill.id)}
              onToggleFav={() => onToggleFav(skill.id)}
              onOpen={onOpen}
            />
          ))}
        </div>
      ) : (
        <p className="empty">No skills found. Try another search or clear the filters.</p>
      )}
    </section>
  );
}

export default SkillList;