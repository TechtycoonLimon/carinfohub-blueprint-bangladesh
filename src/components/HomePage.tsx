
import { ArrowRight } from "lucide-react";

interface HomePageProps {
  onNavigate: () => void;
}

const popularCars = [
  {
    name: "Toyota Corolla",
    price: "Starting from 30 lakh BDT",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=640&q=80", // Sedan, white
  },
  {
    name: "Honda Civic",
    price: "Starting from 30 lakh BDT",
    image: "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=640&q=80", // Red sedan
  },
  {
    name: "Mitsubishi Pajero",
    price: "Starting from 30 lakh BDT",
    image: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=640&q=80", // SUV, white
  },
  {
    name: "Nissan X-Trail",
    price: "Starting from 30 lakh BDT",
    image: "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=640&q=80", // Silver SUV
  },
];

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to CarinfoHub.com</h1>
          <p className="text-xl mb-8">Your one-stop hub for car details in Bangladesh</p>
          <button 
            onClick={onNavigate}
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium shadow-md hover:bg-gray-100 transition-colors flex items-center mx-auto"
          >
            Search Now <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CarinfoHub?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Accurate Information</h3>
              <p className="text-gray-600 text-center">Get detailed and accurate specifications for all car models available in Bangladesh.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-4.5-8.5L3 15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Quick Comparison</h3>
              <p className="text-gray-600 text-center">Compare different car models side by side to make the best purchase decision.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Easy Search</h3>
              <p className="text-gray-600 text-center">Find exactly what you're looking for with our simple and powerful search tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cars Section */}
      <section className="w-full py-16 bg-gray-100 rounded-lg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Cars in Bangladesh</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCars.map((car, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-40 w-full overflow-hidden relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{car.name}</h3>
                  <p className="text-gray-600 text-sm">{car.price}</p>
                  <button onClick={onNavigate} className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
