import { Link } from "react-router-dom";
import { treatmentData } from "../../data/servicesAndTreatments";

const FamilyPlanningAndContraceptiveServices = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/family-planning.jpeg"
          alt="Family Planning & Contraceptive Services"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Family Planning
              <span className="block text-pink-400">
                & Contraceptive Services
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Personalized contraceptive counselling and safe birth-control
              options to help women and couples plan their families with
              confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Consultation
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
      <section className="max-w-7xl mx-auto px-6 lg:px-6 py-16 grid lg:grid-cols-4 gap-12">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-14">
          {/* INTRO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 ">
              What Is Family Planning?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Family planning helps individuals and couples make informed
              decisions about when to have children, how many children to have,
              and how to prevent or delay pregnancy safely. Our services focus
              on privacy, comfort, and clear medical guidance tailored to each
              woman’s health needs and lifestyle.
            </p>
          </div>

          {/* WHY IMPORTANT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Family Planning Is Important
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Helps prevent unwanted or unplanned pregnancies",
                "Protects maternal health",
                "Allows proper spacing between children",
                "Supports financial and emotional preparedness",
                "Reduces risk of complications in future pregnancies",
                "Gives women control over reproductive choices",
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
              Our Family Planning & Contraceptive Services
            </h2>

            <div className="space-y-10">
              {/* SERVICE 1 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  1. Contraceptive Counselling
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>How different contraceptive methods work</li>
                  <li>Effectiveness and duration</li>
                  <li>Possible side effects</li>
                  <li>Suitability based on medical history & lifestyle</li>
                  <li>Short-term and long-term options</li>
                </ul>
              </div>

              {/* SERVICE 2 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  2. Temporary (Reversible) Contraceptive Methods
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>
                    <strong>Oral Contraceptive Pills:</strong> Daily pills to
                    prevent ovulation
                  </li>
                  <li>
                    <strong>Condoms (Male & Female):</strong> Hormone-free
                    protection against pregnancy & STIs
                  </li>
                  <li>
                    <strong>Injectable Contraceptives:</strong> Hormonal
                    injections effective for 1–3 months
                  </li>
                  <li>
                    <strong>IUD / Copper-T / Hormonal IUD:</strong> Long-term
                    protection for 3–10 years
                  </li>
                  <li>
                    <strong>Emergency Contraception:</strong> Pills taken within
                    72 hours after unprotected intercourse
                  </li>
                </ul>
              </div>

              {/* SERVICE 3 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  3. Long-term & Permanent Contraceptive Methods
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>
                    <strong>Tubal Ligation:</strong> Permanent female
                    sterilization
                  </li>
                  <li>
                    <strong>Vasectomy Counselling:</strong> Safe and effective
                    male sterilization guidance
                  </li>
                </ul>
              </div>

              {/* SERVICE 4 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  4. Pre-Conception Counselling
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Health assessments & screenings</li>
                  <li>Nutritional guidance</li>
                  <li>Genetic & medical risk evaluation</li>
                  <li>Ideal timing & lifestyle planning</li>
                </ul>
              </div>

              {/* SERVICE 5 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  5. Fertility Awareness & Natural Methods
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Cycle tracking</li>
                  <li>Understanding fertile days</li>
                  <li>Safe-period method guidance</li>
                  <li>Non-hormonal, natural options</li>
                </ul>
              </div>
            </div>
          </div>

          {/* WHO SHOULD CONSIDER */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who Should Consider Family Planning Services?
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Newly married couples</li>
              <li>Couples wanting to delay pregnancy</li>
              <li>Women seeking temporary or long-term contraception</li>
              <li>Individuals needing safe birth spacing</li>
              <li>Couples who have completed their family</li>
            </ul>
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Our Clinic for Family Planning?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li>✔ Experienced gynaecologists & counsellors</li>
              <li>✔ Wide range of safe contraceptive options</li>
              <li>✔ Privacy-focused, personalized care</li>
              <li>✔ Guidance based on health & lifestyle</li>
              <li>✔ Complete reproductive health support</li>
            </ul>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="bg-gray-50 p-6 rounded-2xl h-fit shadow">
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

export default FamilyPlanningAndContraceptiveServices;
