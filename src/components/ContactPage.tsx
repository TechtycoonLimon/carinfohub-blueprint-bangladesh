
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-semibold mb-2">Phone</h2>
          <p className="text-gray-600">01924075629</p>
          <p className="text-gray-600">09:00 AM - 06:00 PM</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p className="text-gray-600">info@carinfohub.com</p>
          <p className="text-gray-600">support@carinfohub.com</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-semibold mb-2">Address</h2>
          <p className="text-gray-600">123 Car Street</p>
          <p className="text-gray-600">Dhaka, Bangladesh</p>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">Your message has been sent successfully. We'll get back to you soon.</p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  subject: "",
                  message: "",
                });
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Car Information">Car Information</option>
                  <option value="Business Proposal">Business Proposal</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                <Send className="mr-2 h-5 w-5" /> Submit Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
