import { GraduationCap, Award, Star } from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Ruchita Kaushal",
      qualification: "MD Gynaecology",
      specialization: "Gynaecology & Obstetrics",
      experience: "10+ Years",
      image:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600",
      expertise: [
        "High-Risk Pregnancy Management",
        "Laparoscopic Surgery",
        "Painless Delivery",
        "Infertility Treatment",
      ],
    },
    {
      name: "Dr. Ankush Kaushal",
      qualification: "MD Anesthesia",
      specialization: "Anesthesiology",
      experience: "10+ Years",
      image:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600",
      expertise: [
        "Painless Delivery Anesthesia",
        "Surgical Anesthesia",
        "Critical Care",
        "Pain Management",
      ],
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Doctors
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our highly qualified and experienced medical professionals are
            dedicated to providing exceptional care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-80">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-1">
                    <Star
                      size={20}
                      className="text-yellow-500 fill-yellow-500"
                    />
                    <span className="font-bold text-gray-900">5.0</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                <div className="flex items-center gap-2 text-pink-500 mb-4">
                  <GraduationCap size={20} />
                  <span className="font-semibold">{doctor.qualification}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Award size={20} />
                  <span>{doctor.specialization}</span>
                </div>
                <p className="text-gray-600 mb-4 font-semibold">
                  {doctor.experience} of Experience
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Areas of Expertise:
                  </h4>
                  <ul className="space-y-2">
                    {doctor.expertise.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
