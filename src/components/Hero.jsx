import { Calendar, Heart, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              World Class Clinical Care with Advanced Technology
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              One of the leading gynaecology hospitals of the city, serving patients since 2013 with compassion, precision, and excellence.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-teal-600"
              >
                Our Services
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar size={32} />
                </div>
                <p className="text-sm font-semibold text-gray-700">Since 2013</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart size={32} />
                </div>
                <p className="text-sm font-semibold text-gray-700">Compassionate Care</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award size={32} />
                </div>
                <p className="text-sm font-semibold text-gray-700">Award Winning</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-teal-600 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hospital"
                className="w-full h-[500px] object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold text-teal-600">10+</p>
              <p className="text-gray-600 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
