
const projects = [
  {
    name: "Kanban Board",
    desc: "A simple Kanban board built with Javascript. It allows users to create, edit, and move tasks across different columns (To Do, In Progress, Done).",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Moniquevdb109/Moniquevdb109-MONVAN25503_PTO2505_A_Monique-VanDenBerg_JSLPP",
    img: "/kanban.png",
  },
  {
    name: "Podcast App",
    desc: "A podcast app that allows users to search for and listen to their favorite podcasts. It provides a user-friendly interface for browsing and playing episodes.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    repo: "https://github.com/Moniquevdb109/MONVAN25503_PTO2502_A_Monique-VanDenBerg_DJS03",
    img: "/podcast.png",
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="section-divider"></div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.img} alt={project.name} />
            </div>
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
              <a href={project.repo} target="_blank" rel="noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
