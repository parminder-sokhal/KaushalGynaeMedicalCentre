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
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Baby size={40} />,
      title: "Antenatal & Pregnancy Care",
      description:
        "Complete antenatal, pregnancy monitoring, and postnatal care for a safe and healthy motherhood journey.",
      link: "/services/antenatal-care",
    },
    {
      icon: <Heart size={40} />,
      title: "Gynaecology & Women’s Health",
      description:
        "Comprehensive gynecological care including routine checkups, menstrual issues, menopause, and hormonal care.",
      link: "/services/gynae-surgical",
    },
    {
      icon: <Stethoscope size={40} />,
      title: "High-Risk Pregnancy Care",
      description:
        "Advanced monitoring and expert medical management for high-risk pregnancies.",
      link: "/treatments/high-risk-pregnancy-management",
    },
    {
      icon: <Activity size={40} />,
      title: "Gynae Laparoscopic Surgery",
      description:
        "Minimally invasive laparoscopic surgeries for faster recovery and better outcomes.",
      link: "/services/gynae-surgical",
    },
    {
      icon: <UserCheck size={40} />,
      title: "Infertility & IUI / IVF",
      description:
        "Advanced fertility evaluation and treatments including IUI, IVF, and hormonal management.",
      link: "/services/infertility-iui",
    },
    {
      icon: <Syringe size={40} />,
      title: "Pain-Free Delivery & Anesthesia",
      description:
        "Safe and comfortable anesthesia services for labor, surgery, and painless delivery.",
      link: "/services/normal-delivery",
    },
    {
      icon: <ClipboardList size={40} />,
      title: "Women’s Health Checkups",
      description:
        "Preventive health screenings and routine checkups for women of all age groups.",
      link: "/services/antenatal-care",
    },
    {
      icon: <Shield size={40} />,
      title: "24×7 Emergency Care",
      description:
        "Round-the-clock emergency obstetric and gynecological care with immediate attention.",
      link: "#contact",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive women’s healthcare services delivered with expertise,
            compassion, and advanced medical technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-500 text-white w-20 h-20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Need Medical Consultation?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Our expert doctors are available to guide you at every stage.
          </p>
          <Link
            to="https://u.tatvacare.in/r/SPtEZB"
            className="inline-block bg-white text-green-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book Appointment Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
