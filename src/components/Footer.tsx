
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">CarinfoHub.com</h3>
            <p className="text-gray-300 text-sm">
              Your one-stop hub for car details in Bangladesh.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-300 text-sm">
              Dhaka, Bangladesh<br />
              Phone: 01924075629<br />
              Email: info@carinfohub.com
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-gray-300 text-sm">
              <li className="mb-1"><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li className="mb-1"><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li className="mb-1"><a href="#" className="hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          © 2025 CarinfoHub.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
