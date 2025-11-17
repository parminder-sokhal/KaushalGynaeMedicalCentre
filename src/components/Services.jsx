import {
  Baby,
  Heart,
  Stethoscope,
  Activity,
  UserCheck,
  Syringe,
  ClipboardList,
  Shield,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Baby size={40} />,
      title: "Pregnancy Care",
      description:
        "Comprehensive prenatal and postnatal care with advanced monitoring and painless delivery options.",
    },
    {
      icon: <Heart size={40} />,
      title: "Gynaecology",
      description:
        "Complete women's health services including routine check-ups, screenings, and treatments.",
    },
    {
      icon: <Stethoscope size={40} />,
      title: "High-Risk Pregnancy",
      description:
        "Specialized care for high-risk pregnancies with advanced monitoring and expert medical support.",
    },
    {
      icon: <Activity size={40} />,
      title: "Laparoscopic Surgery",
      description:
        "Minimally invasive surgical procedures with advanced equipment and expert surgical team.",
    },
    {
      icon: <UserCheck size={40} />,
      title: "Infertility Treatment",
      description:
        "Advanced fertility treatments and counseling to help you achieve your dreams of parenthood.",
    },
    {
      icon: <Syringe size={40} />,
      title: "Anesthesia Services",
      description:
        "Safe and comfortable anesthesia services provided by MD Anesthesia specialist Dr. Ankush.",
    },
    {
      icon: <ClipboardList size={40} />,
      title: "Health Checkups",
      description:
        "Comprehensive health screenings and preventive care for women of all ages.",
    },
    {
      icon: <Shield size={40} />,
      title: "Emergency Care",
      description:
        "24/7 emergency obstetric and gynaecological care with immediate medical attention.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive women's healthcare services with advanced technology
            and compassionate care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white w-20 h-20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Need Medical Consultation?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Our expert doctors are available for consultation. Book your
            appointment today!
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book Appointment Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
