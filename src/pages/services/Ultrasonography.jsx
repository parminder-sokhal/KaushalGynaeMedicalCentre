import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const Ultrasonography = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/pregnant-woman-receiving-ultrasound-scan-stomach.jpg"
          alt="Ultrasonography Services"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Ultrasonography
              <span className="block text-green-400">Diagnostic Imaging</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              High-resolution, radiation-free ultrasound services for accurate
              diagnosis, fertility evaluation, and pregnancy monitoring.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="https://u.tatvacare.in/r/SPtEZB"
                className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Appointment
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
          {/* PELVIC */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Pelvic Ultrasonography
            </h2>
            <p>
              Pelvic ultrasound visualizes the uterus, ovaries, and fallopian
              tubes to diagnose structural or hormonal conditions affecting
              reproductive health.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Detection of uterine fibroids and ovarian cysts</li>
              <li>Endometrial thickness measurement</li>
              <li>Evaluation of pelvic pain or irregular bleeding</li>
              <li>Monitoring gynecological abnormalities</li>
            </ul>
          </section>

          {/* OBSTETRIC */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Obstetric Ultrasonography
            </h2>
            <p>
              Obstetric ultrasound is essential throughout pregnancy to monitor
              fetal development, heartbeat, growth, and early detection of
              complications.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Early pregnancy viability & dating scans</li>
              <li>NT scan for chromosomal screening</li>
              <li>Anomaly scan for organ development</li>
              <li>Growth and well-being scans in later trimesters</li>
            </ul>
          </section>

          {/* FOLLICULAR */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Follicular Monitoring
            </h2>
            <p>
              Follicular monitoring tracks ovarian follicle growth and ovulation
              timing, crucial for fertility treatments such as IUI and IVF.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Monitoring follicle size and development</li>
              <li>Assessing endometrial thickness</li>
              <li>Accurate ovulation timing for conception</li>
              <li>Planning IUI and IVF cycles</li>
            </ul>

            <p className="mt-2">
              This painless, non-invasive procedure provides valuable fertility
              insights.
            </p>
          </section>

          {/* APPROACH */}
          <section className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Diagnostic Approach
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Latest high-resolution ultrasound machines</li>
              <li>Experienced sonologists & gynecologists</li>
              <li>Radiation-free and completely safe imaging</li>
              <li>Accurate reports with patient counseling</li>
              <li>Available for routine and emergency scans</li>
            </ul>
          </section>

          {/* SUMMARY */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p>
              Ultrasonography plays a vital role in women’s healthcare — from
              fertility evaluation to pregnancy monitoring. Our advanced imaging
              services ensure accurate diagnosis, patient safety, and better
              clinical outcomes.
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

export default Ultrasonography;
