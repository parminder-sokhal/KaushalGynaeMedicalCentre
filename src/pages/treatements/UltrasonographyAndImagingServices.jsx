import { Link } from "react-router-dom";
import { treatmentData } from "../../data/servicesAndTreatments";

const UltrasonographyAndImagingServices = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/ultrasound-imaging.jpeg"
          alt="Ultrasonography & Imaging Services"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Ultrasonography
              <span className="block text-green-400">& Imaging Services</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Safe, accurate, and radiation-free imaging to monitor pregnancy,
              diagnose gynecological conditions, and guide effective treatment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="https://u.tatvacare.in/r/SPtEZB"
                className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Scan
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
              What Is Ultrasonography?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ultrasonography (Ultrasound) is a safe, painless, and
              radiation-free imaging technique that uses sound waves to create
              real-time images of internal organs. It is widely used in
              pregnancy care, gynecology, and infertility management to provide
              accurate and early diagnosis.
            </p>
          </div>

          {/* IMPORTANCE */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Ultrasonography Is Important
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Early pregnancy confirmation",
                "Monitoring baby’s growth and development",
                "Detecting abnormalities or complications",
                "Evaluating uterus, ovaries & pelvic organs",
                "Diagnosing cysts, fibroids, PCOS & tumors",
                "Guiding treatment and surgical planning",
                "Completely safe for mother and baby",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-green-50 p-5 rounded-xl"
                >
                  <span className="w-3 h-3 mt-2 bg-green-500 rounded-full" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Our Ultrasonography & Imaging Services
            </h2>

            {/* PREGNANCY SCANS */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  1. Pregnancy Ultrasound Scans
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                  <li>
                    <strong>Early Pregnancy Scan (6–8 weeks):</strong> Confirms
                    pregnancy, detects heartbeat, and determines gestational age
                  </li>
                  <li>
                    <strong>NT Scan (11–14 weeks):</strong> Screens for
                    chromosomal abnormalities
                  </li>
                  <li>
                    <strong>Anomaly / Level-II Scan (18–22 weeks):</strong>
                    Detailed evaluation of baby’s organs and development
                  </li>
                  <li>
                    <strong>Growth Scan (28–32 weeks):</strong> Measures growth,
                    weight, and detects restrictions
                  </li>
                  <li>
                    <strong>Doppler Ultrasound:</strong> Assesses blood flow in
                    baby, placenta, and umbilical cord
                  </li>
                </ul>
              </div>

              {/* GYNECOLOGICAL */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  2. Gynecological Ultrasounds
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                  <li>
                    <strong>Pelvic Ultrasound:</strong> Examines uterus,
                    ovaries, endometrium & fallopian tubes
                  </li>
                  <li>
                    <strong>Transvaginal Scan (TVS):</strong> High-resolution
                    imaging for early pregnancy, infertility, cysts & polyps
                  </li>
                </ul>
              </div>

              {/* INFERTILITY */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  3. Imaging for Infertility Evaluation
                </h3>
                <p className="text-gray-700 mt-2">
                  Ultrasound plays a key role in infertility treatment by
                  monitoring follicle growth, ovulation timing, uterine lining,
                  and ovarian reserve to plan IUI, ovulation induction, or IVF.
                </p>
              </div>

              {/* EMERGENCY */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  4. Emergency & Diagnostic Imaging
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                  <li>Ectopic pregnancy</li>
                  <li>Ovarian torsion</li>
                  <li>Internal bleeding</li>
                  <li>Ruptured ovarian cysts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="bg-gradient-to-br from-green-50 to-white p-10 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Benefits of Our Ultrasound Services
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li>✔ Safe & radiation-free imaging</li>
              <li>✔ Modern, high-resolution machines</li>
              <li>✔ Experienced radiologists & gynecologists</li>
              <li>✔ Real-time, accurate diagnosis</li>
              <li>✔ Comfortable, patient-friendly environment</li>
              <li>✔ Reliable results for effective treatment</li>
            </ul>
          </div>

          {/* SUMMARY */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our Ultrasonography & Imaging Services provide accurate diagnostic
              support for pregnancy care, gynecological conditions, infertility
              evaluation, and emergency situations. With advanced technology and
              expert specialists, we ensure safe, precise, and reliable imaging
              for better health outcomes.
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

export default UltrasonographyAndImagingServices;
