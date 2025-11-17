import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Kaushal Gynae</h3>
            <p className="text-gray-400 mb-4">
              Providing world-class gynaecological care since 2013 with advanced
              technology and compassionate service.
            </p>
            <div className="flex items-center gap-2 text-pink-400">
              <Heart size={20} className="fill-pink-400" />
              <span className="font-semibold">Your Health, Our Priority</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Our Doctors
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Pregnancy Care</li>
              <li>Gynaecology</li>
              <li>Laparoscopic Surgery</li>
              <li>Infertility Treatment</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>
                  SCF 14, Near Sector 20 Panchkula Barrier, Peer Muchalla -
                  140603
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} />
                <a
                  href="tel:9855738386"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  +91 9855738386
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} />
                <a
                  href="mailto:drkaushalruchita@gmail.com"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  drkaushalruchita@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kaushal Gynae & Medical Centre.
            All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Designed with care for your health and wellness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
