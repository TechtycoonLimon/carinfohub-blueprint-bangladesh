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
  image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=640&q=80",
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
  image: "https://images.unsplash.com/photo-1582639510494-c80b5de9f148?auto=format&fit=crop&w=640&q=80",
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
            <option>Toyota Camry 2023</option>
            <option>Honda Civic 2023</option>
            <option>Nissan X-Trail 2022</option>
            <option>Mitsubishi Pajero 2023</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Car 2</label>
          <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select Car 2</option>
            <option>Honda Accord 2023</option>
            <option>Toyota Corolla 2023</option>
            <option>Hyundai Tucson 2022</option>
            <option>Kia Sportage 2023</option>
          </select>
        </div>
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
