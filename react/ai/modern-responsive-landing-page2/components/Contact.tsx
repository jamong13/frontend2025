import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Contact Us</h2>
          <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">Get In Touch</h3>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100 h-full">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h4>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-slate-900">Email Us</p>
                  <p className="text-slate-600 mt-1">hello@modernweb.com</p>
                  <p className="text-slate-600">support@modernweb.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-slate-900">Call Us</p>
                  <p className="text-slate-600 mt-1">+1 (555) 123-4567</p>
                  <p className="text-slate-600">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-slate-900">Visit Us</p>
                  <p className="text-slate-600 mt-1">123 Innovation Drive</p>
                  <p className="text-slate-600">Tech City, TC 90210</p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 bg-slate-200 rounded-lg overflow-hidden relative">
               {/* Map Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                  <span className="flex items-center gap-2"><MapPin size={20}/> Interactive Map Area</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Send Message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};