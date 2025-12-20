import { Link } from "react-router-dom";

const Antenatal_Care = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/antenatal-care.jpeg"
          alt="Antenatal Care & Pregnancy Checkups"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Antenatal Care
              <span className="block text-pink-400">
                Healthy Pregnancy, Healthy Baby
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Comprehensive pregnancy checkups, early screening, and expert
              guidance to ensure the best possible care for both mother and baby
              throughout every trimester.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center bg-pink-600 hover:bg-pink-700 transition px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Appointment
              </Link>

              <Link
                to="/treatments"
                className="inline-flex justify-center items-center bg-white/90 text-pink-600 hover:bg-white transition px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Our Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-40 py-16 space-y-14">
        {/* INTRO */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Is Antenatal Care?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Antenatal care refers to regular medical checkups and monitoring
            during pregnancy to ensure the health and well-being of both mother
            and baby. Early detection, timely intervention, and expert guidance
            help prevent complications and promote a smooth pregnancy journey.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Antenatal Services We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Routine Pregnancy Checkups",
              "Ultrasound & Growth Scans",
              "Blood & Urine Investigations",
              "Blood Pressure & Weight Monitoring",
              "Fetal Heart Rate Monitoring",
              "Screening for Gestational Diabetes",
              "Anemia & Thyroid Screening",
              "Vaccinations During Pregnancy",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-100 shadow hover:shadow-lg transition bg-white"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {item}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Regular monitoring and evidence-based care to support a safe
                  and healthy pregnancy.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CARE HIGHLIGHTS */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Antenatal Care Includes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Scheduled antenatal visits across all trimesters",
              "Early detection of pregnancy-related risks",
              "Personalized nutrition & supplement guidance",
              "Monitoring maternal & fetal health",
              "Timely vaccinations and screenings",
              "Lifestyle & exercise counselling",
              "Emergency support when needed",
            ].map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-pink-50"
              >
                <span className="w-3 h-3 mt-2 bg-pink-600 rounded-full" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us for Antenatal Care?
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <li>✔ Experienced obstetricians & gynecologists</li>
            <li>✔ Modern diagnostic & ultrasound facilities</li>
            <li>✔ Personalized pregnancy care plans</li>
            <li>✔ Compassionate & supportive approach</li>
            <li>✔ Continuous monitoring for mother & baby</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Summary
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Antenatal care plays a crucial role in ensuring a healthy pregnancy
            and safe delivery. Through regular checkups, expert supervision, and
            compassionate care, we support mothers at every stage of their
            pregnancy journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Antenatal_Care;
