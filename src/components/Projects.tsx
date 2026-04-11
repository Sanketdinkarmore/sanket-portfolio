
const Projects = () => {
  const projects = [
    { id: 1, name: 'Project Name', gradient: 'gradient-box-reverse' },
    { id: 2, name: 'Project Name', gradient: 'gradient-box' },
  ];

  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-5xl font-bold">Some Featured projects</h2>
          <span className="sparkle text-4xl">✦</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.gradient}`}>
              <div className="project-overlay">
                <div className="project-number">{project.id}</div>
                <h3 className="text-2xl font-bold">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;