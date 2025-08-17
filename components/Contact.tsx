import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="h-screen pt-28 bg-white overflow-hidden no-scroll">
      <div className="h-full">
        <div className="max-w-5xl mx-auto px-6 h-full">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
            {/* Contact Information */}
            <div>
              <h1 className="text-4xl portfolio-heading mb-6">
                Get In Touch
              </h1>
              
              <div className="w-16 h-0.5 bg-black mb-6" />
              
              <p className="leading-relaxed mb-8">
                I'm always interested in discussing new projects, creative ideas, 
                or opportunities to collaborate. Whether you have a specific project 
                in mind or just want to connect, I'd love to hear from you.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:james@example.com" className="hover:opacity-70 transition-opacity">
                    james@example.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+1234567890" className="hover:opacity-70 transition-opacity">
                    +1 (234) 567-890
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5" />
                  <span>New York, NY</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Connect</h3>
                <div className="space-y-3">
                  <a 
                    href="https://linkedin.com" 
                    className="flex items-center space-x-2 hover:opacity-70 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    className="flex items-center space-x-2 hover:opacity-70 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://behance.net" 
                    className="flex items-center space-x-2 hover:opacity-70 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Behance</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-6">
                <h3 className="font-medium mb-4">Send a Message</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 focus:border-black outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 focus:border-black outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-2 border border-gray-300 focus:border-black outline-none transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full p-2 border border-gray-300 focus:border-black outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-black text-white p-2 hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}