import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const CSectionDelivery = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/c-section-delivery.jpg"
          alt="C-Section Delivery"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              C-Section Delivery
              <span className="block text-green-400">
                Safe Cesarean Section Care
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Advanced surgical maternity care ensuring safety and comfort for
              both mother and baby when normal delivery is not advised.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="https://u.tatvacare.in/r/SPtEZB"
                className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Consultation
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
              What is a C-Section Delivery?
            </h2>
            <p>
              A C-section delivery, also known as a Cesarean section, is a
              surgical procedure used to deliver a baby through an incision made
              in the mother’s abdomen and uterus. It is performed when a normal
              vaginal delivery is not safe for the mother, baby, or both.
            </p>
            <p className="mt-3">
              C-sections may be planned in advance or performed as an emergency
              procedure to ensure a safe childbirth.
            </p>
          </section>

          {/* WHEN RECOMMENDED */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              When is a C-Section Recommended?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Baby in breech or abnormal position</li>
              <li>Prolonged or obstructed labor</li>
              <li>Fetal distress during labor</li>
              <li>Previous C-section or uterine surgery</li>
              <li>Multiple pregnancies (twins or more)</li>
              <li>Placenta previa or placental complications</li>
              <li>
                Maternal conditions such as high blood pressure or diabetes
              </li>
            </ul>
          </section>

          {/* BENEFITS */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Benefits of C-Section Delivery
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Safe alternative when normal delivery is risky</li>
              <li>Planned and controlled procedure in elective cases</li>
              <li>Reduced risk of birth trauma in specific conditions</li>
              <li>Life-saving for mother and baby in emergencies</li>
            </ul>
          </section>

          {/* PROCEDURE */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How is a C-Section Performed?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Performed under spinal or epidural anesthesia</li>
              <li>Small incision made in the lower abdomen and uterus</li>
              <li>Baby delivered gently, followed by the placenta</li>
              <li>Incision closed carefully with sutures</li>
              <li>Procedure duration: approximately 45–60 minutes</li>
            </ul>
          </section>

          {/* RECOVERY */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Recovery After C-Section
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hospital stay: 3–5 days</li>
              <li>Gradual return to daily activities in a few weeks</li>
              <li>Complete recovery in about 6–8 weeks</li>
            </ul>
            <p className="mt-3">
              Our medical team provides complete post-operative care and
              guidance for a smooth recovery.
            </p>
          </section>

          {/* POST DELIVERY CARE */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Post-Delivery Care for Mother & Baby
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pain management and wound care</li>
              <li>Breastfeeding support</li>
              <li>Monitoring for infection or complications</li>
              <li>Newborn health checks and vaccinations</li>
              <li>Postnatal counseling and follow-up visits</li>
            </ul>
          </section>

          {/* SAFETY */}
          <section className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Is C-Section Safe?
            </h2>
            <p>
              Yes. A C-section is a safe and commonly performed procedure when
              carried out by experienced obstetricians in a well-equipped
              hospital. Any minimal risks are carefully managed by our expert
              team.
            </p>
          </section>

          {/* WHY US */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Us for C-Section Delivery?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>✔ Experienced obstetricians and anesthetists</li>
              <li>✔ 24×7 emergency C-section facility</li>
              <li>✔ Advanced operation theater and NICU support</li>
              <li>✔ Strict safety and hygiene standards</li>
              <li>✔ Compassionate care for mother and newborn</li>
            </ul>
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

export default CSectionDelivery;
