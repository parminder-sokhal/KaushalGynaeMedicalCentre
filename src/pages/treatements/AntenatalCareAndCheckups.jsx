import { Link } from "react-router-dom";
import { treatmentData } from "../../data/servicesAndTreatments";

const AntenatalCareAndCheckups = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/antenatal-care.jpeg"
          alt="Ante-natal Pregnancy Care & Checkups"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Ante-natal Care
              <span className="block text-pink-400">& Pregnancy Checkups</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Complete medical care, monitoring, and guidance to ensure a
              healthy pregnancy and safe childbirth for both mother and baby.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="https://u.tatvacare.in/r/SPtEZB"
                className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Appointment
              </Link>

              <Link
                to="/treatments"
                className="bg-white/90 text-pink-500 hover:bg-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Other Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6  py-16 grid lg:grid-cols-5 gap-12">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-14">
          {/* INTRO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Is Ante-natal Care?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ante-natal care refers to the complete medical care, monitoring,
              and guidance a woman receives throughout pregnancy. Regular
              checkups help ensure the health of both mother and baby, detect
              complications early, and prepare mothers confidently for labor,
              delivery, and breastfeeding.
            </p>
          </div>

          {/* IMPORTANCE */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Ante-natal Care Is Important
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ensures healthy growth and development of the baby",
                "Monitors the mother’s physical and emotional health",
                "Detects high-risk conditions early",
                "Provides diet, lifestyle, and supplement guidance",
                "Prepares mothers for labor, delivery, and breastfeeding",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-pink-50 p-5 rounded-xl"
                >
                  <span className="w-3 h-3 mt-2 bg-pink-500 rounded-full" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              What Is Included in Ante-natal Care?
            </h2>

            <div className="space-y-10">
              {/* CHECKUPS */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  1. Regular Pregnancy Checkups
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Blood pressure monitoring</li>
                  <li>Weight and growth tracking</li>
                  <li>Baby’s heart rate (FHR)</li>
                  <li>Uterus size and fetal position</li>
                  <li>Assessment of symptoms and discomforts</li>
                </ul>
              </div>

              {/* ULTRASOUND */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  2. Ultrasound Scans
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Confirming pregnancy</li>
                  <li>Monitoring baby’s growth</li>
                  <li>Detecting abnormalities</li>
                  <li>Placenta position and amniotic fluid check</li>
                  <li>Trimester-specific scans (NT, anomaly, growth)</li>
                </ul>
              </div>

              {/* BLOOD TESTS */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  3. Blood Tests & Diagnostic Screenings
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Hemoglobin (anemia detection)</li>
                  <li>Blood sugar (gestational diabetes)</li>
                  <li>Thyroid function</li>
                  <li>Blood group & Rh factor</li>
                  <li>Infection and genetic screenings</li>
                </ul>
              </div>

              {/* NUTRITION */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  4. Nutritional & Lifestyle Guidance
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Healthy balanced diet plans</li>
                  <li>Foods to avoid during pregnancy</li>
                  <li>Iron, calcium, folic acid & supplements</li>
                  <li>Hydration and daily activity guidance</li>
                  <li>Safe exercises and yoga (if advised)</li>
                </ul>
              </div>

              {/* HIGH RISK */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  5. Monitoring High-Risk Pregnancies
                </h3>
                <p className="text-gray-700 mt-2">
                  Mothers with conditions such as hypertension, diabetes,
                  thyroid disorders, multiple pregnancies, or previous
                  miscarriages receive closer monitoring and personalized care.
                </p>
              </div>

              {/* VACCINATION */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  6. Vaccination Guidance
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>TT (Tetanus Toxoid)</li>
                  <li>Tdap (whooping cough protection)</li>
                  <li>Flu vaccine (as advised)</li>
                </ul>
              </div>

              {/* EMOTIONAL */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  7. Emotional & Mental Health Support
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Managing mood swings and anxiety</li>
                  <li>Stress reduction and counseling</li>
                  <li>Fear of labor and postpartum concerns</li>
                </ul>
              </div>

              {/* BIRTH PLANNING */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  8. Birth Planning & Preparation
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Recognizing labor signs</li>
                  <li>Delivery planning (normal or C-section)</li>
                  <li>Hospital bag preparation</li>
                  <li>Pain relief and breastfeeding guidance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ante-natal Care & Checkups provide complete medical support for
              expecting mothers. Through regular monitoring, timely tests,
              personalized advice, and emotional care, we ensure a healthy
              pregnancy and a safe, confident childbirth journey.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="bg-gray-50 p-6 rounded-2xl h-fit shadow lg:col-span-2 ">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Other Treatments
          </h3>
          <ul className="space-y-3 text-pink-500 font-medium">
            {treatmentData.map((item) => (
              <li key={item.id}>
                <Link to={`/treatments/${item.id}`}>› {item.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
};

export default AntenatalCareAndCheckups;
