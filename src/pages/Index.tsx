
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import SearchPage from "@/components/SearchPage";
import CarDatabasePage from "@/components/CarDatabasePage";
import CarDetailsPage from "@/components/CarDetailsPage";
import ComparePage from "@/components/ComparePage";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";

const Index = () => {
  const [activePage, setActivePage] = useState("home");

  const renderActivePage = () => {
    switch (activePage) {
      case "home":
        return <HomePage onNavigate={() => setActivePage("search")} />;
      case "search":
        return <SearchPage />;
      case "database":
        return <CarDatabasePage onViewCarDetails={() => setActivePage("details")} />;
      case "details":
        return <CarDetailsPage onBackToDatabase={() => setActivePage("database")} />;
      case "compare":
        return <ComparePage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={() => setActivePage("search")} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        {renderActivePage()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
