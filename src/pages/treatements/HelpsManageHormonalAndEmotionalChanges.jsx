import { Link } from "react-router-dom";
import { treatmentData } from "../../data/servicesAndTreatments";
const HelpsManageHormonalAndEmotionalChanges = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/helps-manage-hormonal-and-emotional-changes.jpeg"
          alt="Post-natal Care & Lactation Counselling"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Post-natal Care
              <span className="block text-pink-400">
                & Lactation Counselling
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Complete physical, emotional, and breastfeeding support to help
              mothers recover confidently and care for their newborn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Appointment
              </Link>

              <Link
                to="/treatments"
                className="bg-white/90 text-pink-600 hover:bg-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Other Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-6 py-16 grid lg:grid-cols-4 gap-12">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-14">
          {/* INTRO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Is Post-natal Care?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The post-natal period begins immediately after childbirth and lasts
              up to six weeks. This phase involves significant physical,
              emotional, and hormonal changes. Proper post-natal care ensures
              healthy recovery for the mother and optimal growth and nutrition
              for the baby.
            </p>
          </div>

          {/* WHY IMPORTANT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Post-natal Care Is Important
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Helps manage hormonal and emotional changes",
                "Monitors the baby’s health, feeding, and development",
                "Prevents complications for both mother and baby",
                "Provides expert guidance during the transition into motherhood",
                "Ensures proper breastfeeding for the baby’s nutrition",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-pink-50 p-5 rounded-xl"
                >
                  <span className="w-3 h-3 mt-2 bg-pink-600 rounded-full" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Our Post-natal Care & Lactation Counselling Services
            </h2>

            {/* SERVICE 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                1. Physical Recovery Support for the Mother
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Normal delivery & C-section recovery</li>
                <li>Pain management & wound care</li>
                <li>Monitoring bleeding (lochia)</li>
                <li>Pelvic floor recovery</li>
                <li>Nutritional advice & safe physical activity</li>
              </ul>
            </div>

            {/* SERVICE 2 */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                2. Breastfeeding & Lactation Counselling
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Correct positioning & latching support</li>
                <li>Managing low or excess milk supply</li>
                <li>Relief from sore nipples & engorgement</li>
                <li>Pumping, storage & feeding schedules</li>
                <li>Exclusive breastfeeding guidance (first 6 months)</li>
              </ul>
            </div>

            {/* SERVICE 3 */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                3. Newborn Care Guidance
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Baby bathing & hygiene</li>
                <li>Umbilical cord care</li>
                <li>Sleep patterns & soothing techniques</li>
                <li>Understanding feeding cues</li>
                <li>Routine health monitoring</li>
              </ul>
            </div>

            {/* SERVICE 4 */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                4. Mental & Emotional Wellbeing
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Post-partum blues & anxiety support</li>
                <li>Sleep-related emotional issues</li>
                <li>Post-partum depression awareness</li>
                <li>Professional referrals when needed</li>
              </ul>
            </div>

            {/* SERVICE 5 */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                5. Nutrition, Lifestyle & Family Counselling
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Balanced diet & hydration guidance</li>
                <li>Foods supporting milk production</li>
                <li>Gradual return to exercise</li>
                <li>Family & partner emotional support</li>
              </ul>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Our Post-natal & Lactation Services?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li>✔ Experienced gynaecologists & paediatricians</li>
              <li>✔ Certified lactation experts</li>
              <li>✔ Evidence-based medical guidance</li>
              <li>✔ Confidential & compassionate care</li>
              <li>✔ Personalized mother & baby plans</li>
            </ul>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="bg-gray-50 p-6 rounded-2xl h-fit shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Other Treatments
          </h3>
          <ul className="space-y-3 text-pink-600 font-medium">
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

export default HelpsManageHormonalAndEmotionalChanges;
