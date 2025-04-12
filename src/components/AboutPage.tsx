
const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">About CarinfoHub.com</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          At CarinfoHub.com, we provide accurate car details for enthusiasts and buyers in Bangladesh. 
          Our mission is to empower consumers with comprehensive, reliable information to make informed 
          decisions when purchasing a vehicle.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-700 mb-6">
          Founded in 2023, CarinfoHub.com is Bangladesh's premier automotive information resource. 
          Our team consists of passionate car enthusiasts, automotive experts, and tech professionals 
          dedicated to delivering the most accurate and up-to-date information about vehicles available 
          in the Bangladesh market.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-2 text-blue-700">Comprehensive Database</h3>
            <p className="text-gray-700">
              Detailed specifications for hundreds of car models available in Bangladesh, 
              updated regularly to ensure accuracy.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-2 text-blue-700">Side-by-Side Comparisons</h3>
            <p className="text-gray-700">
              Compare different models across various parameters to find the perfect 
              match for your needs and budget.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-2 text-blue-700">Expert Insights</h3>
            <p className="text-gray-700">
              Reviews, buying guides, and expert opinions to help you make an informed 
              decision about your next vehicle purchase.
            </p>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-2 text-blue-700">Market Updates</h3>
            <p className="text-gray-700">
              Stay informed about the latest trends, new model releases, and price 
              changes in the Bangladesh automotive market.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          <li><span className="font-medium">Accuracy:</span> We verify all information through multiple sources.</li>
          <li><span className="font-medium">Independence:</span> Our reviews and comparisons are unbiased and objective.</li>
          <li><span className="font-medium">Accessibility:</span> Information is presented in a clear, easy-to-understand format.</li>
          <li><span className="font-medium">User-Centric:</span> We continuously improve based on user feedback and needs.</li>
        </ul>
        
        <div className="text-center mt-8">
          <p className="text-gray-700">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
