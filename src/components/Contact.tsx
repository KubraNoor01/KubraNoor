import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Let's Connect</h3>
            <p className="text-gray-300 text-base sm:text-lg">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Github className="w-6 h-6" />, link: "https://github.com/KubraNoor01" },
                { icon: <Linkedin className="w-6 h-6" />, link: "https://www.linkedin.com/in/kubra-noor-45a495325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { icon: <Twitter className="w-6 h-6" />, link: "#" },
                { icon: <Mail className="w-6 h-6" />, link: "mailto:cae707988" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-purple-400 hover:bg-purple-500 hover:text-white transition-all transform hover:scale-110"
                  aria-label="Social Link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/60 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400 transition-all text-base sm:text-lg"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400 transition-all text-base sm:text-lg"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400 transition-all resize-none text-base sm:text-lg"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity text-base sm:text-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;