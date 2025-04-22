import { useState } from "react";
import { Filter } from "lucide-react";

interface CarDatabasePageProps {
  onViewCarDetails: () => void;
}

const carImageMap: Record<string, string> = {
  "Toyota Camry":
    "https://images.unsplash.com/photo-1511391403515-5160d3236232?auto=format&fit=crop&w=640&q=80", // Blue sedan
  "Honda Civic":
    "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=640&q=80", // Red sedan
  "Toyota Corolla": 
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=640&q=80", // White sedan
  "Nissan X-Trail": 
    "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=640&q=80", // SUV silver
  "Mitsubishi Pajero":
    "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=640&q=80", // SUV white
  "Honda CR-V":
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=640&q=80", // Silver/gray SUV
  "Toyota RAV4":
    "https://images.unsplash.com/photo-1483728642387-b772b3340dce?auto=format&fit=crop&w=640&q=80", // Dark SUV
  "Hyundai Tucson":
    "https://images.unsplash.com/photo-1449426468159-d96aa4897218?auto=format&fit=crop&w=640&q=80", // White SUV
  "Kia Sportage":
    "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?auto=format&fit=crop&w=640&q=80", // Orange SUV
};

const CarDatabasePage = ({ onViewCarDetails }: CarDatabasePageProps) => {
  const [filters, setFilters] = useState({
    make: "",
    year: "",
  });
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  
  const carMakes = ["All", "Toyota", "Honda", "Nissan", "Mitsubishi", "Hyundai", "Kia", "BMW", "Mercedes-Benz"];
  const years = ["All", ...Array.from({ length: 6 }, (_, i) => (2020 + i).toString())];
  
  const sampleCars = [
    { id: 1, make: "Toyota", model: "Camry", year: 2023, price: "45 lakh",
      image: carImageMap["Toyota Camry"] },
    { id: 2, make: "Honda", model: "Civic", year: 2022, price: "38 lakh",
      image: carImageMap["Honda Civic"] },
    { id: 3, make: "Toyota", model: "Corolla", year: 2023, price: "35 lakh",
      image: carImageMap["Toyota Corolla"] },
    { id: 4, make: "Nissan", model: "X-Trail", year: 2022, price: "60 lakh",
      image: carImageMap["Nissan X-Trail"] },
    { id: 5, make: "Mitsubishi", model: "Pajero", year: 2021, price: "75 lakh",
      image: carImageMap["Mitsubishi Pajero"] },
    { id: 6, make: "Honda", model: "CR-V", year: 2023, price: "65 lakh",
      image: carImageMap["Honda CR-V"] },
    { id: 7, make: "Toyota", model: "RAV4", year: 2022, price: "55 lakh",
      image: carImageMap["Toyota RAV4"] },
    { id: 8, make: "Hyundai", model: "Tucson", year: 2023, price: "45 lakh",
      image: carImageMap["Hyundai Tucson"] },
    { id: 9, make: "Kia", model: "Sportage", year: 2022, price: "42 lakh",
      image: carImageMap["Kia Sportage"] },
  ];
  
  const filteredCars = sampleCars.filter((car) => {
    return (
      (filters.make === "" || filters.make === "All" || car.make === filters.make) &&
      (filters.year === "" || filters.year === "All" || car.year.toString() === filters.year)
    );
  });

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Car Database</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <Filter className="h-5 w-5 text-blue-600 mr-2" />
          <h2 className="font-semibold text-lg">Filter Cars</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Make</label>
            <select
              name="make"
              value={filters.make}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {carMakes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Year</label>
            <select
              name="year"
              value={filters.year}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <div 
            key={car.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={onViewCarDetails}
          >
            <div className="h-48 w-full overflow-hidden relative">
              <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{car.make} {car.model}</h3>
              <p className="text-gray-600 mb-2">{car.year}</p>
              <div className="flex justify-between items-center">
                <span className="font-medium">Price: {car.price}</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewCarDetails();
                  }} 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredCars.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-600">No cars match your filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CarDatabasePage;
