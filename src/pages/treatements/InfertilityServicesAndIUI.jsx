import { Link } from "react-router-dom";
import { treatmentData } from "../../data/servicesAndTreatments";

const InfertilityServicesAndIUI = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/infertility-iui.jpeg"
          alt="Infertility Services & IUI"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Infertility Services
              <span className="block text-green-400">& IUI Treatment</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Comprehensive fertility evaluation, advanced treatments, and
              compassionate support to help couples achieve a healthy pregnancy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="https://u.tatvacare.in/r/SPtEZB"
                className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Consultation
              </Link>

              <Link
                to="/treatments"
                className="bg-white/90 text-green-500 hover:bg-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
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
              Understanding Infertility
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Infertility is defined as the inability to conceive after one year
              of regular, unprotected intercourse (or six months for women above
              35). It can be caused by female factors, male factors, or a
              combination of both. Our fertility specialists focus on
              identifying the cause and offering personalized treatment options.
            </p>
          </div>

          {/* CAUSES */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Common Causes of Infertility
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Female Factors
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Ovulation problems (PCOS, hormonal imbalance)</li>
                  <li>Blocked or damaged fallopian tubes</li>
                  <li>Endometriosis</li>
                  <li>Uterine fibroids or abnormalities</li>
                  <li>Age-related decline in egg quality</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Male Factors
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Low sperm count</li>
                  <li>Poor sperm motility</li>
                  <li>Abnormal sperm shape</li>
                  <li>Erectile or ejaculation issues</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Combined / Unexplained Factors
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Stress and lifestyle factors</li>
                  <li>Thyroid disorders</li>
                  <li>Obesity</li>
                  <li>Unexplained infertility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Our Infertility Services
            </h2>

            {/* EVALUATION */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  1. Comprehensive Fertility Evaluation
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
                  <li>Detailed medical & fertility history</li>
                  <li>Hormonal blood tests</li>
                  <li>Ultrasound to assess ovaries & uterus</li>
                  <li>Ovulation tracking</li>
                  <li>Semen analysis</li>
                  <li>Advanced tests (AMH, HSG, thyroid, etc.)</li>
                </ul>
              </div>

              {/* OVULATION */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  2. Ovulation Induction
                </h3>
                <p className="text-gray-700 mt-2">
                  For women with irregular cycles or anovulation, medications
                  are prescribed to stimulate egg release, improving the chances
                  of fertilization.
                </p>
              </div>

              {/* IUI */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  3. Intrauterine Insemination (IUI)
                </h3>

                <p className="text-gray-700 mt-2 mb-4">
                  IUI is a simple and minimally invasive fertility treatment
                  where processed, high-quality sperm are placed directly into
                  the uterus during ovulation to increase the chances of
                  pregnancy.
                </p>

                <h4 className="font-semibold text-gray-800 mb-2">
                  Who Can Benefit from IUI?
                </h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                  <li>Low sperm count or motility</li>
                  <li>Unexplained infertility</li>
                  <li>Ejaculation problems</li>
                  <li>Cervical mucus issues</li>
                  <li>Mild endometriosis</li>
                  <li>Couples seeking a less invasive option before IVF</li>
                </ul>

                <h4 className="font-semibold text-gray-800 mb-2">
                  How IUI Works
                </h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Ovulation monitoring via scans & blood tests</li>
                  <li>Sperm collection & laboratory preparation</li>
                  <li>Placement of sperm into uterus using a thin catheter</li>
                  <li>Painless procedure without anesthesia</li>
                  <li>Pregnancy test after 14 days</li>
                </ul>

                <p className="text-gray-700 mt-4">
                  Success depends on age, diagnosis, sperm quality, and timing.
                  IUI is often recommended before moving to IVF.
                </p>
              </div>

              {/* SUPPORT */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  4. Lifestyle, Diet & Emotional Support
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
                  <li>Nutrition & diet counselling</li>
                  <li>Weight management guidance</li>
                  <li>Stress reduction techniques</li>
                  <li>Emotional and couple counselling</li>
                </ul>
              </div>

              {/* PLANS */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  5. Personalized Fertility Treatment Plans
                </h3>
                <p className="text-gray-700 mt-2">
                  Each couple receives a customized treatment plan based on
                  medical findings, age, infertility duration, previous
                  treatments, and personal preferences.
                </p>
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our Infertility Services and IUI treatment provide hope and
              effective solutions for couples trying to conceive. With advanced
              diagnostics, expert fertility specialists, and compassionate care,
              we strive to improve your chances of achieving a healthy
              pregnancy.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="bg-gray-50 p-6 rounded-2xl h-fit shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Other Treatments
          </h3>
          <ul className="space-y-3 text-green-500 font-medium">
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

export default InfertilityServicesAndIUI;
