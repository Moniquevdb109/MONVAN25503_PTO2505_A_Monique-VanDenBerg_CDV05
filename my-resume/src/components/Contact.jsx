
import { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="section-divider"></div>

      <div className="contact-details">
        <div className="contact-card">
          <p className="contact-label">Email</p>
          <a href="mailto:moniquevdb109@gmail.com" className="contact-value">moniquevdb109@gmail.com</a>
        </div>
        <div className="contact-card">
          <p className="contact-label">Phone</p>
          <a href="tel:+27783446400" className="contact-value">+27 (0)78 344 6400</a>
        </div>
        <div className="contact-card">
          <p className="contact-label">Location</p>
          <p className="contact-value">Somerset West, Western Cape</p>
        </div>
      </div>

      {sent ? (
        <div className="contact-success">
          <p className="contact-success-title">Message sent! 🎉</p>
          <p className="contact-success-desc">Thanks for reaching out — I'll get back to you soon.</p>
        </div>
      ) : (
        <div className="contact-form">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="form-input"
              value={form.name}
              onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="form-input"
              value={form.email}
              onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              rows={4}
              placeholder="Hi Monique, I'd love to chat about..."
              className="form-input"
              value={form.message}
              onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
            />
          </div>
          <button className="btn-primary" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
      )}
    </section>
  )
}

export default Contact