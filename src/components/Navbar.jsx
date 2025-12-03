import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData, treatmentData } from "../data/servicesAndTreatments";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [treatmentsDropdown, setTreatmentsDropdown] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="bg-pink-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:9855738386"
              className="flex items-center gap-2 hover:text-pink-200"
            >
              <Phone size={16} />
              <span>9855738386</span>
            </a>
            <a
              href="mailto:drkaushalruchita@gmail.com"
              className="flex items-center gap-2 hover:text-pink-200"
            >
              <Mail size={16} />
              <span>drkaushalruchita@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-4">
          <div className="flex-shrink-0">
          <img
              className="h-20 w-auto"
              src="/logo.png"
              alt="Medical Clinic Logo"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200">
                Services
                <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={`/service/${service.id}`}
                    className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    onClick={() => setServicesDropdown(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200">
                Treatments
                <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {treatmentData.map((treatment) => (
                  <Link
                    key={treatment.id}
                    to={`/treatment/${treatment.id}`}
                    className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    onClick={() => setTreatmentsDropdown(false)}
                  >
                    {treatment.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="px-3 py-2">
              <button
                className="w-full text-left text-gray-700 font-medium flex items-center justify-between"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                Services
                <ChevronDown size={18} className={`transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdown && (
                <div className="pl-4 space-y-1 mt-2">
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      to={`/service/${service.id}`}
                      className="block px-3 py-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-md text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setServicesDropdown(false);
                      }}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-3 py-2">
              <button
                className="w-full text-left text-gray-700 font-medium flex items-center justify-between"
                onClick={() => setTreatmentsDropdown(!treatmentsDropdown)}
              >
                Treatments
                <ChevronDown size={18} className={`transition-transform ${treatmentsDropdown ? 'rotate-180' : ''}`} />
              </button>
              {treatmentsDropdown && (
                <div className="pl-4 space-y-1 mt-2">
                  {treatmentData.map((treatment) => (
                    <Link
                      key={treatment.id}
                      to={`/treatment/${treatment.id}`}
                      className="block px-3 py-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-md text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setTreatmentsDropdown(false);
                      }}
                    >
                      {treatment.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
