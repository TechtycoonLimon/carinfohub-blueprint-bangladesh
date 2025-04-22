
import { ArrowLeft } from "lucide-react";

interface CarDetailsPageProps {
  onBackToDatabase: () => void;
}

const CarDetailsPage = ({ onBackToDatabase }: CarDetailsPageProps) => {
  const car = {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: "45 lakh BDT",
    specs: {
      engine: "2.5L 4-Cylinder",
      transmission: "8-Speed Automatic",
      horsepower: "203 hp @ 6,600 rpm",
      torque: "184 lb-ft @ 5,000 rpm",
      fuelEconomy: "28 city / 39 highway",
      fuelType: "Petrol",
      seating: "5 passengers",
      dimensions: "192.1\" L x 72.4\" W x 56.9\" H",
      weight: "3,310 to 3,595 lbs",
      cargo: "15.1 cubic feet",
    },
    features: [
      "7\" touchscreen infotainment system",
      "Apple CarPlay and Android Auto",
      "Dual-zone automatic climate control",
      "Toyota Safety Sense 2.5+",
      "LED headlights and taillights",
      "17-inch alloy wheels",
      "Push button start",
      "6-speaker sound system",
    ],
    description: "The 2023 Toyota Camry continues to deliver the quality, reliability, and value that have made it a bestseller in Bangladesh. With its comfortable ride, spacious interior, and excellent fuel economy, the Camry remains a top choice for families and professionals alike.",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=800&q=80"
  };

  return (
    <div className="max-w-5xl mx-auto">
      <button 
        onClick={onBackToDatabase}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-1" /> Back to Database
      </button>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Car banner image */}
        <div className="h-64 bg-blue-100 flex items-center justify-center overflow-hidden">
          <img
            src={car.image}
            alt={`${car.make} ${car.model}`}
            className="h-full w-full object-cover rounded-md shadow"
            loading="eager"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{car.make} {car.model} {car.year}</h1>
          <p className="text-xl text-blue-600 font-medium mb-6">Price: {car.price}</p>
          <p className="text-gray-700 mb-8">{car.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Specifications</h2>
              <ul className="space-y-3">
                {Object.entries(car.specs).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Key Features</h2>
              <ul className="space-y-2">
                {car.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Request Test Drive
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
              Compare with Other Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
