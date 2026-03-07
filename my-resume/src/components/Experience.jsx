
const experiences = [
  {
    title: "Treasury Analyst",
    company: "Luno",
    period: "December 2025 – Present",
    desc: "I support the daily treasury operations for Luno's OTC trading desk, including settling OTC trades and onboarding new clients. I work closely with the operations team to assist with liquidity management and the movement of funds across accounts, helping ensure trades settle smoothly and treasury processes run efficiently.",
  },
  {
    title: "Specialist: Treasury Operations",
    company: "TreasuryONE",
    period: "March 2025 – November 2025",
    desc: "I managed the day-to-day operations for our mining clients, overseeing Commodity and FX deal confirmations, settlements, cross-border payments, reconciliations, balance management and reporting.",
  },
  {
    title: "Treasury Operations Officer",
    company: "TreasuryONE",
    period: "December 2022 – February 2025",
    desc: "My daily activities included handling FX and Commodity deal confirmations and settlements, managing cross-border payments and receipts, performing account reconciliations, and generating financial reports.",
  },
]

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="section-divider"></div>

      <div className="experience-list">
        {experiences.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3 className="experience-role">{job.title}</h3>
              <span className="experience-period">{job.period}</span>
            </div>
            <p className="experience-company">{job.company}</p>
            <p className="experience-desc">{job.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience