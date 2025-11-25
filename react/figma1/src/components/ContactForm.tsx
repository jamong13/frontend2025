import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="mb-2 uppercase tracking-wide">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Have a project in mind? Let's talk about it.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-cyan-400 text-white px-8 py-3 rounded-full hover:bg-cyan-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <div className="mt-20 pt-12 border-t border-gray-200 flex flex-wrap gap-6 justify-center text-gray-600">
        <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Facebook</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
      </div>
    </div>
  );
}
