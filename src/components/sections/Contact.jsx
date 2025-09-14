import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Contact = () => {
  // State for form data and submission status remains the same
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This is the new, real handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); // Reset status on new submission

    try {
      const response = await fetch('https://formspree.io/f/mnnbyaop', { // <-- PASTE YOUR FORM SPREE URL HERE
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(e.target)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 4000); // Hide status message after 4 seconds
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mylabathulaaaronnissi@gmail.com', href: 'mailto:mylabathulaaaronnissi@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 6381198548', href: 'tel:+916381198548' },
    { icon: MapPin, label: 'Location', value: 'Chennai, Tamilnadu, India', href: "https://maps.app.goo.gl/ARjEPm21J3A1weuXA" },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <FadeIn>
          {/* ... The rest of your JSX code for the form ... */}
          {/* No changes are needed below this line, just copy the whole block */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-nothing text-nothing-white mb-4">GET IN TOUCH</h2>
            <p className="text-nothing-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to connect? Feel free to reach out.
            </p>
          </div>
        </FadeIn>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn direction="left" className="space-y-8">
            <h3 className="text-2xl font-nothing text-nothing-white">Contact Info</h3>
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.div key={label} className="flex items-center space-x-4">
                <Icon size={24} className="text-nothing-accent" />
                <div>
                  <p className="text-nothing-gray-400 text-sm">{label}</p>
                  {href ? (
                    <a href={href} className="text-nothing-white hover:text-nothing-gray-300">{value}</a>
                  ) : (
                    <p className="text-nothing-white">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </FadeIn>

          <FadeIn direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="input-nothing w-full p-3 bg-nothing-gray-900 border border-nothing-gray-700 rounded-lg focus:outline-none focus:border-nothing-accent" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="input-nothing w-full p-3 bg-nothing-gray-900 border border-nothing-gray-700 rounded-lg focus:outline-none focus:border-nothing-accent" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows="5" className="input-nothing w-full p-3 bg-nothing-gray-900 border border-nothing-gray-700 rounded-lg focus:outline-none focus:border-nothing-accent"></textarea>
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2">
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;