
import { useState } from "react";
import { Search } from "lucide-react";

const carImageByIndex = [
  "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=640&q=80", // Updated Corolla image
  "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=640&q=80", // Updated Civic image
  "https://images.unsplash.com/photo-1568954947940-b71139f95a13?auto=format&fit=crop&w=640&q=80", // Updated CR-V image
];

const SearchPage = () => {
  const [searchParams, setSearchParams] = useState({
    make: "",
    model: "",
    year: "",
  });
  
  const [hasSearched, setHasSearched] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };
  
  const carMakes = ["Toyota", "Honda", "Nissan", "Mitsubishi", "Hyundai", "Kia", "BMW", "Mercedes-Benz"];
  const years = Array.from({ length: 21 }, (_, i) => 2005 + i);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Search Cars</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Make</label>
              <select
                name="make"
                value={searchParams.make}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Make</option>
                {carMakes.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Model</label>
              <input
                type="text"
                name="model"
                placeholder="e.g. Corolla"
                value={searchParams.model}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Year</label>
              <select
                name="year"
                value={searchParams.year}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <Search className="mr-2 h-5 w-5" /> Search
            </button>
          </div>
        </form>
      </div>
      
      {hasSearched && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Results for {searchParams.make} {searchParams.model} {searchParams.year}
          </h2>
          
          <div className="space-y-4">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="border p-4 rounded-md hover:bg-gray-50">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/4 rounded-md overflow-hidden h-32 bg-gray-200">
                    <img
                      src={carImageByIndex[idx - 1]}
                      alt={`Variant ${idx}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">
                      {searchParams.make} {searchParams.model} {searchParams.year} - Variant {idx}
                    </h3>
                    <p className="text-gray-600 mt-1">2.0L 4-Cylinder Engine • Automatic • Petrol</p>
                    <p className="text-gray-800 font-medium mt-2">Price: {30 + idx * 5} lakh BDT</p>
                    <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
