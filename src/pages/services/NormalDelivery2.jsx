import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const NormalDelivery = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/normal-delivery.jpg"
          alt="Normal Delivery"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Normal Delivery
              <span className="block text-green-400">
                Safe & Natural Childbirth
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Comprehensive maternity care focused on a safe, comfortable, and
              natural childbirth experience for both mother and baby.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="https://u.tatvacare.in/r/SPtEZB"
                className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Maternity Consultation
              </Link>

              <Link
                to="/services"
                className="bg-white/90 text-green-500 hover:bg-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-6 py-16 grid lg:grid-cols-4 gap-12">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-10 text-gray-700 leading-relaxed">
          {/* WHAT IS */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What is Normal Delivery?
            </h2>
            <p>
              Normal delivery, also known as vaginal delivery, is the natural
              process of childbirth where the baby is born through the birth
              canal without the need for major surgical intervention. It is the
              most common and preferred method of childbirth when both the
              mother and baby are healthy.
            </p>
            <p className="mt-3">
              Normal delivery promotes faster recovery for the mother and offers
              several health benefits for both mother and newborn.
            </p>
          </section>

          {/* BENEFITS */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Benefits of Normal Delivery
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Faster recovery and shorter hospital stay</li>
              <li>Less post-delivery pain compared to C-section</li>
              <li>Lower risk of infection and complications</li>
              <li>Early bonding and breastfeeding</li>
              <li>Better respiratory health for the baby</li>
              <li>Minimal medical intervention</li>
            </ul>
          </section>

          {/* WHEN POSSIBLE */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              When is Normal Delivery Possible?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pregnancy is full-term and uncomplicated</li>
              <li>Baby is in the correct head-down position</li>
              <li>Mother and baby are stable and healthy</li>
              <li>No medical condition requires surgical delivery</li>
            </ul>
            <p className="mt-3">
              Our doctors continuously monitor the mother and baby to ensure a
              safe and smooth delivery.
            </p>
          </section>

          {/* SERVICES */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Normal Delivery Services Include
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Antenatal care and pregnancy monitoring</li>
              <li>Labor pain management and continuous support</li>
              <li>Continuous fetal monitoring</li>
              <li>Experienced obstetricians and trained nursing staff</li>
              <li>Emergency backup facilities if required</li>
              <li>Post-delivery mother and newborn care</li>
            </ul>
          </section>

          {/* PAIN MANAGEMENT */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Pain Management During Normal Delivery
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Breathing and relaxation techniques</li>
              <li>Emotional and physical labor support</li>
              <li>Medical pain relief when required</li>
            </ul>
            <p className="mt-3">
              Our goal is to ensure maximum comfort and safety for the mother
              during labor.
            </p>
          </section>

          {/* POST CARE */}
          <section className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Post-Delivery Care
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Monitoring of vital signs</li>
              <li>Breastfeeding support and guidance</li>
              <li>Newborn health checkups</li>
              <li>Postnatal counseling and follow-up</li>
            </ul>
          </section>

          {/* WHY US */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Us for Normal Delivery?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>✔ Experienced gynecologists and obstetricians</li>
              <li>✔ 24×7 labor and delivery services</li>
              <li>✔ Clean, safe, and mother-friendly environment</li>
              <li>✔ Personalized care and emotional support</li>
              <li>✔ Advanced monitoring and emergency readiness</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-green-100 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Book Your Maternity Consultation
            </h2>
            <p>
              If you are planning a safe and comfortable normal delivery,
              contact us today. Our expert team is committed to providing
              compassionate, reliable, and high-quality maternity care for you
              and your baby.
            </p>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="bg-gray-50 p-6 rounded-2xl h-fit shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Other Services
          </h3>
          <ul className="space-y-3 text-green-500 font-medium">
            {servicesData.map((item) => (
              <li key={item.id}>
                <Link to={`/services/${item.id}`}>› {item.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
};

export default NormalDelivery;
