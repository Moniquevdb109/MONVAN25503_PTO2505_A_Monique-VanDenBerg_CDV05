// src/components/Hero.jsx

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Treasury & Software</p>
        <h1 className="hero-title">Monique<br />Van Den Berg</h1>
        <p className="hero-description">
          Accomplished Treasury professional with a track record of managing 
          high-value transactions and enhancing operational workflows. Now 
          expanding my impact through software development.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Get In Touch</a>
          <a href="#projects" className="btn-outline">View Projects</a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/profile.jpg" alt="Monique Van Den Berg" />
      </div>
    </section>
  )
}

export default Hero