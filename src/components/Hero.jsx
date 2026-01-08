import { Calendar, Heart, Award, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 sm:pt-44 pb-20 bg-gradient-to-br from-green-50 via-white to-blue-50"
    >
      {/* Background Blur Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              World-Class Clinical Care
              <span className="block text-green-500">
                Powered by Advanced Technology
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10">
              A leading gynaecology hospital serving patients since 2013 with
              compassion, precision, and excellence in women’s healthcare.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="https://u.tatvacare.in/r/SPtEZB"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition shadow-lg"
              >
                Book Appointment
                <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white text-green-500 px-8 py-4 rounded-xl font-semibold border-2 border-green-500 hover:bg-green-50 transition shadow"
              >
                Our Services
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {[
                { icon: Calendar, label: "Since 2013" },
                { icon: Heart, label: "Compassionate Care" },
                { icon: Award, label: "Award Winning" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="bg-green-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <item.icon size={28} />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hospital"
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
              />
              <video
                src="/hero.mp4"
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* EXPERIENCE CARD */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 bg-white px-6 py-4 rounded-2xl shadow-xl text-center">
              <p className="text-4xl font-bold text-green-500">12+</p>
              <p className="text-gray-600 font-semibold text-sm">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
