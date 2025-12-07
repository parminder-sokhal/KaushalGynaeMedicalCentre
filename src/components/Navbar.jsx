import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData, treatmentData } from "../data/servicesAndTreatments";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      {/* Top Contact Bar */}
      <div className="bg-pink-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:9855738386" className="flex items-center gap-2 hover:text-pink-200">
              <Phone size={16} />
              <span>9855738386</span>
            </a>
            <a href="mailto:drkaushalruchita@gmail.com" className="flex items-center gap-2 hover:text-pink-200">
              <Mail size={16} />
              <span>drkaushalruchita@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-4">
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Clinic Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-pink-600 font-medium">
                Services
                <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-1 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Treatments Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-pink-600 font-medium">
                Treatments
                <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-1 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {treatmentData.map((treatment) => (
                  <Link
                    key={treatment.id}
                    to={`/treatments/${treatment.id}`}
                    className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    {treatment.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Remaining Links */}
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 hover:text-pink-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {/* Home and About First */}
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => toggleDropdown("services")}
                className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-pink-50 rounded-md font-medium"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "services" && (
                <div className="pl-4 mt-2 space-y-1">
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-3 py-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Treatments Accordion */}
            <div>
              <button
                onClick={() => toggleDropdown("treatments")}
                className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-pink-50 rounded-md font-medium"
              >
                Treatments
                <ChevronDown
                  size={18}
                  className={`transition-transform ${openDropdown === "treatments" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "treatments" && (
                <div className="pl-4 mt-2 space-y-1">
                  {treatmentData.map((treatment) => (
                    <Link
                      key={treatment.id}
                      to={`/treatments/${treatment.id}`}
                      className="block px-3 py-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-md text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {treatment.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining Links */}
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
