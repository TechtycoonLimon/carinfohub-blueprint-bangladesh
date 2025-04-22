
import React from 'react';

const carA = {
  make: "Toyota",
  model: "Camry",
  year: 2023,
  price: "45 lakh BDT",
  engine: "2.5L 4-Cylinder",
  horsepower: "203 hp",
  transmission: "8-Speed Automatic",
  fuelEconomy: "28 city / 39 highway",
  seating: "5 passengers",
  image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=640&q=80", // Toyota Camry
};

const carB = {
  make: "Honda",
  model: "Accord",
  year: 2023,
  price: "47 lakh BDT",
  engine: "1.5L Turbo 4-Cylinder",
  horsepower: "192 hp",
  transmission: "CVT Automatic",
  fuelEconomy: "30 city / 38 highway",
  seating: "5 passengers",
  image: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?auto=format&fit=crop&w=640&q=80", // Honda Accord
};

// Add more example images for other cars to avoid blanks
const carImages: Record<string, string> = {
  "Toyota Camry": "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=640&q=80",
  "Honda Accord": "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?auto=format&fit=crop&w=640&q=80",
  "Honda Civic": "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=640&q=80",
  "Nissan X-Trail": "https://images.unsplash.com/photo-1579372786545-d24232dfa6be?auto=format&fit=crop&w=640&q=80",
  "Mitsubishi Pajero": "https://images.unsplash.com/photo-1680975745161-92dd4a5b9f7c?auto=format&fit=crop&w=640&q=80",
  "Toyota Corolla": "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=640&q=80",
  "Hyundai Tucson": "https://images.unsplash.com/photo-1656468014942-ce119011b38f?auto=format&fit=crop&w=640&q=80",
  "Kia Sportage": "https://images.unsplash.com/photo-1635341814747-51c3c39d02a3?auto=format&fit=crop&w=640&q=80"
};

const comparisonPoints = [
  { label: "Price", keyA: "price", keyB: "price" },
  { label: "Engine", keyA: "engine", keyB: "engine" },
  { label: "Horsepower", keyA: "horsepower", keyB: "horsepower" },
  { label: "Transmission", keyA: "transmission", keyB: "transmission" },
  { label: "Fuel Economy", keyA: "fuelEconomy", keyB: "fuelEconomy" },
  { label: "Seating", keyA: "seating", keyB: "seating" },
];

const ComparePage = () => (
  <div className="max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold text-center mb-8">Compare Cars</h1>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-3">
        {/* Header */}
        <div className="p-4 bg-gray-100 font-semibold text-center">Feature</div>
        <div className="p-4 bg-blue-600 text-white text-center">
          {carA.make} {carA.model} {carA.year}
        </div>
        <div className="p-4 bg-blue-500 text-white text-center">
          {carB.make} {carB.model} {carB.year}
        </div>
        
        {/* Images */}
        <div className="p-4 bg-gray-50"></div>
        <div className="h-48 flex items-center justify-center bg-blue-100">
          <img
            src={carA.image}
            alt={`${carA.make} ${carA.model}`}
            className="object-cover h-44 rounded-md shadow-md"
          />
        </div>
        <div className="h-48 flex items-center justify-center bg-blue-50">
          <img
            src={carB.image}
            alt={`${carB.make} ${carB.model}`}
            className="object-cover h-44 rounded-md shadow-md"
          />
        </div>
        
        {/* Comparison Points */}
        {comparisonPoints.map((point, index) => (
          <React.Fragment key={index}>
            <div className={`p-4 font-medium ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              {point.label}
            </div>
            <div className={`p-4 text-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              {carA[point.keyA as keyof typeof carA]}
            </div>
            <div className={`p-4 text-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              {carB[point.keyB as keyof typeof carB]}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
    
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Compare Different Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Car 1</label>
          <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select Car 1</option>
            <option value="Toyota Camry">Toyota Camry 2023</option>
            <option value="Honda Civic">Honda Civic 2023</option>
            <option value="Nissan X-Trail">Nissan X-Trail 2022</option>
            <option value="Mitsubishi Pajero">Mitsubishi Pajero 2023</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Car 2</label>
          <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select Car 2</option>
            <option value="Honda Accord">Honda Accord 2023</option>
            <option value="Toyota Corolla">Toyota Corolla 2023</option>
            <option value="Hyundai Tucson">Hyundai Tucson 2022</option>
            <option value="Kia Sportage">Kia Sportage 2023</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {/* Show car images for all car options below the selectors */}
        {["Toyota Camry", "Honda Civic", "Nissan X-Trail", "Mitsubishi Pajero", "Honda Accord", "Toyota Corolla", "Hyundai Tucson", "Kia Sportage"].map((name) => (
          <div key={name} className="flex flex-col items-center w-32">
            <img src={carImages[name]} alt={name} className="h-20 w-full object-cover rounded-md shadow mb-2 bg-gray-200" />
            <span className="text-xs text-center">{name}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
          Compare Cars
        </button>
      </div>
    </div>
  </div>
);

export default ComparePage;
