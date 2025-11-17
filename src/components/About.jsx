import { Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: "Our Mission",
      description:
        "To provide world-class gynaecological care with compassion and advanced medical technology.",
    },
    {
      icon: <Eye size={32} />,
      title: "Our Vision",
      description:
        "To be the most trusted healthcare provider in the region for women's health and wellness.",
    },
    {
      icon: <Users size={32} />,
      title: "Patient Care",
      description:
        "Patient comfort and safety are at the heart of everything we do.",
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description:
        "Committed to maintaining the highest standards of medical excellence.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Kaushal Gynae & Medical Centre
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2013, we have become one of the leading gynaecology
            hospitals in the city
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/4021773/pexels-photo-4021773.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Medical Centre"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Leading Healthcare Excellence Since 2013
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Kaushal Gynae & Medical Centre has gained a loyal clientele over
              the past years with our commitment to world-class clinical care
              with advanced technology. We are frequently visited by celebrities
              and international patients who trust our expertise.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our facility is equipped with the latest medical equipment and
              advanced surgical instruments, ensuring highly advanced surgical
              capabilities. We pride ourselves on our compassionate approach to
              patient care.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-pink-600 mb-2">5000+</p>
                <p className="text-gray-700 font-semibold">Happy Patients</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-pink-600 mb-2">100%</p>
                <p className="text-gray-700 font-semibold">
                  Patient Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="bg-pink-600 text-white w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
