export const skills = [
  { id: 1, name: 'React', icon: '⚛️', category: 'Frontend', level: 4, description: 'Build fast, interactive interfaces out of reusable components.' },
  { id: 2, name: 'JavaScript', icon: '🟨', category: 'Frontend', level: 5, description: 'The language of the web, from DOM work to async code.' },
  { id: 3, name: 'CSS', icon: '🎨', category: 'Frontend', level: 4, description: 'Layouts, animation and responsive design without frameworks.' },
  { id: 4, name: 'HTML', icon: '📄', category: 'Frontend', level: 5, description: 'Semantic, accessible markup that works on every device.' },
  { id: 5, name: 'Node.js', icon: '🟩', category: 'Backend', level: 3, description: 'Run JavaScript on the server and build small APIs.' },
  { id: 6, name: 'MongoDB', icon: '🍃', category: 'Backend', level: 3, description: 'Store and query flexible document data.' },
  { id: 7, name: 'Git', icon: '🌿', category: 'Tools', level: 4, description: 'Track changes, branch safely and work with a team.' },
  { id: 8, name: 'Vite', icon: '⚡', category: 'Tools', level: 4, description: 'Instant dev server and fast production builds.' },
  { id: 9, name: 'Figma', icon: '🖌️', category: 'Design', level: 3, description: 'Design screens and hand them off to development.' },
  { id: 10, name: 'UI Design', icon: '🧩', category: 'Design', level: 4, description: 'Spacing, color and type choices that feel consistent.' },
];

export const categories = ['All', ...new Set(skills.map((s) => s.category))];