
const skills = [
  "Treasury Management Systems",
  "IT2",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git / GitHub",
  "Figma",
  "VS Code",
]

const education = [
  {
    degree: "BCom Economics and Risk Management",
    school: "North West University, South Africa",
    period: "January 2020 – November 2022",
    note: "Graduated with Distinction",
  },
  {
    degree: "Software Development",
    school: "CodeSpace, South Africa",
    period: "May 2025 – Present",
    note: "",
  },
]

const languages = [
  { lang: "English", level: "Fluent" },
  { lang: "Afrikaans", level: "Native" },
]

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2 className="section-title">Skills & Competencies</h2>
      <div className="section-divider"></div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>

      <h2 className="section-title skills-section-gap">Education</h2>
      <div className="section-divider"></div>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3 className="education-degree">{edu.degree}</h3>
              <span className="education-period">{edu.period}</span>
            </div>
            <p className="education-school">{edu.school}</p>
            {edu.note && <p className="education-note">{edu.note}</p>}
          </div>
        ))}
      </div>

      <h2 className="section-title skills-section-gap">Languages</h2>
      <div className="section-divider"></div>
      <div className="languages-list">
        {languages.map((l, index) => (
          <div key={index} className="language-item">
            <p className="language-name">{l.lang}</p>
            <p className="language-level">{l.level}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills