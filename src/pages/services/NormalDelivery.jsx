import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const NormalDelivery = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/medical-team-examining-pregnant-woman-delivery-while-man-holding-her-hand.jpg"
          alt="Normal Delivery & Caesarean Section"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Normal Delivery
              <span className="block text-pink-400">& Caesarean Section</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Safe, comfortable, and expert-supported childbirth care for both
              Normal Vaginal Delivery and Caesarean Section.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Appointment
              </Link>

              <Link
                to="/services"
                className="bg-white/90 text-pink-500 hover:bg-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
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
          {/* NORMAL DELIVERY */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Normal Vaginal Delivery (NVD)
            </h2>
            <p>
              Normal Vaginal Delivery is the natural method of childbirth where
              the baby is delivered through the birth canal. It promotes faster
              recovery, less discomfort, and early bonding between mother and
              baby.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Benefits of Normal Vaginal Delivery
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Faster recovery and shorter hospital stay</li>
              <li>Lower risk of infection and complications</li>
              <li>Immediate bonding and breastfeeding support</li>
              <li>Better outcomes for future pregnancies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Our Support for Normal Delivery
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Continuous monitoring of labor and fetal heartbeat</li>
              <li>
                Pain relief options (epidural, breathing techniques, etc.)
              </li>
              <li>Experienced obstetricians and skilled nursing staff</li>
              <li>Mobility and comfortable labor positions</li>
              <li>Emergency backup for complications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Stages of Normal Delivery
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Labor onset with contractions and cervical dilation</li>
              <li>Active labor phase</li>
              <li>Pushing stage and baby’s birth</li>
              <li>Delivery of placenta and post-delivery care</li>
            </ul>
          </section>

          {/* C-SECTION */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Caesarean Section (C-Section)
            </h2>
            <p>
              A Caesarean Section is a surgical procedure to deliver the baby
              through an incision in the abdomen and uterus when normal delivery
              is not safe.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              When C-Section May Be Recommended
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fetal distress or low oxygen levels</li>
              <li>Breech or abnormal baby position</li>
              <li>Placenta previa</li>
              <li>Failure of labor to progress</li>
              <li>Multiple pregnancy (twins/triplets)</li>
              <li>Large baby</li>
              <li>Previous C-section complications</li>
              <li>Maternal health issues</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              How the Procedure Is Done
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Spinal or epidural anesthesia is administered</li>
              <li>A small horizontal incision is made</li>
              <li>Baby and placenta are delivered safely</li>
              <li>Incision is closed with sutures</li>
              <li>Procedure lasts about 40–60 minutes</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Recovery After C-Section
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hospital stay of 2–4 days</li>
              <li>Pain management and wound care</li>
              <li>Gradual return to daily activities</li>
            </ul>
          </section>

          {/* APPROACH */}
          <section className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Delivery Care Approach
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>24/7 obstetric and neonatal support</li>
              <li>Safe, hygienic birthing environment</li>
              <li>Comprehensive postnatal monitoring</li>
              <li>Emotional and breastfeeding support</li>
            </ul>
          </section>

          {/* SUMMARY */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p>
              We provide complete maternity care for both Normal Vaginal
              Delivery and Caesarean Section, combining modern medical
              facilities with compassionate, patient-centered care for a safe
              and positive childbirth experience.
            </p>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="bg-gray-50 p-6 rounded-2xl h-fit shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Other Services
          </h3>
          <ul className="space-y-3 text-pink-500 font-medium">
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
