import { Link } from "react-router-dom";
import { treatmentData } from "../../data/servicesAndTreatments";

const HighRiskPregnancyManagement = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/high-risk-pregnancy.jpeg"
          alt="High-Risk Pregnancy Management"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              High-Risk Pregnancy
              <span className="block text-pink-400">Management</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Specialized, closely monitored care to ensure the safest outcomes
              for both mother and baby throughout pregnancy and delivery.
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
      <section className="max-w-7xl mx-auto px-6 lg:px-6 py-16 grid lg:grid-cols-4 gap-12">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-3 space-y-14">
          {/* INTRO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Is a High-Risk Pregnancy?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A pregnancy is considered high-risk when the mother, baby, or both
              have an increased chance of complications during pregnancy,
              labour, or delivery. These cases require advanced monitoring,
              frequent checkups, and personalized medical care.
            </p>
          </div>

          {/* WHY HIGH RISK */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              High-Risk Pregnancies Require
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "More frequent antenatal checkups",
                "Advanced maternal & fetal monitoring",
                "Special diagnostic tests",
                "Tailored treatment plans",
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

          {/* CONDITIONS */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Common Conditions That Require High-Risk Management
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  1. Gestational Diabetes
                </h3>
                <p className="text-gray-700">
                  High blood sugar levels during pregnancy requiring glucose
                  monitoring, diet planning, medication if needed, and regular
                  fetal growth assessments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  2. Pregnancy-Induced Hypertension & Preeclampsia
                </h3>
                <p className="text-gray-700">
                  High blood pressure with risks to both mother and baby.
                  Managed with frequent BP monitoring, urine tests, and safe
                  medications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  3. Thyroid Disorders
                </h3>
                <p className="text-gray-700">
                  Both hypo- and hyperthyroidism require regular hormone
                  monitoring and medication adjustments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  4. Previous Miscarriages or Preterm Deliveries
                </h3>
                <p className="text-gray-700">
                  Extra monitoring and preventive care to reduce the risk of
                  early labour or complications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  5. Multiple Pregnancy (Twins / Triplets)
                </h3>
                <p className="text-gray-700">
                  Higher risk of preterm labour and growth issues, requiring
                  frequent ultrasounds and specialised care.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  6. Fetal Growth Restriction (FGR / IUGR)
                </h3>
                <p className="text-gray-700">
                  Babies smaller than expected are monitored closely with
                  Doppler studies and fetal surveillance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  7. Maternal Age Above 35
                </h3>
                <p className="text-gray-700">
                  Increased risk of diabetes, hypertension, and chromosomal
                  abnormalities requiring additional screening.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  8. Placenta-Related Issues
                </h3>
                <p className="text-gray-700">
                  Conditions like placenta previa or placental insufficiency
                  require careful monitoring and delivery planning.
                </p>
              </div>
            </div>
          </div>

          {/* CARE INCLUDES */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              What Our High-Risk Pregnancy Care Includes
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>
                ✔ Frequent antenatal visits & early complication detection
              </li>
              <li>✔ Advanced ultrasonography, Doppler & NST monitoring</li>
              <li>✔ Personalized treatment based on medical history</li>
              <li>✔ Nutrition & lifestyle counselling</li>
              <li>✔ Safe medication management</li>
              <li>✔ Labour & delivery planning (Normal / C-section)</li>
              <li>✔ 24/7 emergency and maternity support</li>
            </ul>
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Us for High-Risk Pregnancy?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li>✔ Experienced obstetricians & gynaecologists</li>
              <li>✔ Latest diagnostic & monitoring technology</li>
              <li>✔ Compassionate, round-the-clock care</li>
              <li>✔ Safe and well-planned deliveries</li>
              <li>✔ Comprehensive neonatal support</li>
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

export default HighRiskPregnancyManagement;
