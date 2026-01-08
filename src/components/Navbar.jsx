import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData, treatmentData } from "../data/servicesAndTreatments";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      {/* Top Contact Bar */}
      <div className="bg-green-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <a
              href="tel:9316194659"
              className="flex items-center gap-2 hover:text-green-200"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">9316194659</span>
            </a>

            <a
              href="mailto:drkaushalruchita@gmail.com"
              className="flex items-center gap-2 hover:text-green-200"
            >
              <Mail size={16} />
              <span className="hidden lg:inline">
                drkaushalruchita@gmail.com
              </span>
            </a>
            <Link
              to="https://maps.app.goo.gl/y3cSrrQUfeyhQbRk8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-black"
            >
              <FaMapMarkerAlt size={16} />
              <span className="hidden lg:inline">
                SCF 14, PEERMUCHALA, ZIRAKPUR, Punjab 160104
              </span>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline">
              24/7 Emergency / Ambulance Available
            </span>

            {/* SOCIAL MEDIA */}
            <Link to="https://www.youtube.com/" target="_blank">
              <FaYoutube className="text-xl hover:text-red-500" />
            </Link>
            <Link to="https://www.facebook.com/" target="_blank">
              <FaFacebook className="text-xl hover:text-blue-500" />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <FaInstagram className="text-xl hover:text-green-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex-shrink-0">
              <img src="/logo.png" alt="Clinic Logo" className="h-16 w-auto" />
            </Link>
            <span className="font-bold lg:text-2xl text-sm text-md text-green-500">
              Kaushal Gynae Medical Care
            </span>
            <Link to="/" className="flex-shrink-0">
              <img
                src="/logo2.png"
                alt="Clinic Logo"
                className="sm:h-14 h-5  w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-green-500 font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Services */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-green-500 font-medium">
                Services <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-1 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="block px-4 py-2 hover:bg-green-50 hover:text-green-500"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Treatments */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-green-500 font-medium">
                Treatments <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-1 w-72 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                {treatmentData.map((treatment) => (
                  <Link
                    key={treatment.id}
                    to={`/treatments/${treatment.id}`}
                    className="block px-4 py-2 hover:bg-green-50 hover:text-green-500"
                  >
                    {treatment.title}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-green-500 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-700 hover:text-green-500"
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
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
