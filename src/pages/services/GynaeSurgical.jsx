import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../data/servicesAndTreatments";

const GynaeSurgical = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/medical-team-performing-tummy-tuck-surgery-operating-room.jpg"
          alt="Gynae Surgical Procedures"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Gynae-Surgical
              <span className="block text-green-400">Procedures</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Advanced gynecological surgeries including laparoscopy,
              oophorectomy, and salpingectomy — focused on safety, faster
              recovery, and compassionate care.
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
          {/* LAPAROSCOPY */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              1. Laparoscopy
            </h2>
            <p>
              Laparoscopy is a minimally invasive surgical technique used to
              diagnose and treat gynecological conditions through small
              incisions using a camera-assisted approach.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Why Laparoscopy Is Performed
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Endometriosis diagnosis and treatment</li>
              <li>Ovarian cyst or fibroid removal</li>
              <li>Infertility evaluation</li>
              <li>Chronic pelvic pain</li>
              <li>Minimally invasive hysterectomy</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Benefits of Laparoscopy
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Smaller incisions & minimal scarring</li>
              <li>Less pain and bleeding</li>
              <li>Faster recovery</li>
              <li>Lower infection risk</li>
            </ul>
          </section>

          {/* OOPHORECTOMY */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              2. Oophorectomy
            </h2>
            <p>
              Oophorectomy is the surgical removal of one or both ovaries and is
              recommended for certain ovarian conditions or cancer prevention.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              When Oophorectomy Is Needed
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Large or painful ovarian cysts</li>
              <li>Ovarian tumors</li>
              <li>Severe endometriosis</li>
              <li>BRCA mutation risk reduction</li>
              <li>Ovarian torsion or infection</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Types of Oophorectomy
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Unilateral:</strong> One ovary removed
              </li>
              <li>
                <strong>Bilateral:</strong> Both ovaries removed
              </li>
            </ul>
          </section>

          {/* SALPINGECTOMY */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              3. Salpingectomy
            </h2>
            <p>
              Salpingectomy involves the removal of one or both fallopian tubes
              and is often required for ectopic pregnancy, infertility, or
              preventive care.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              When Salpingectomy Is Needed
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ectopic pregnancy</li>
              <li>Blocked or damaged tubes</li>
              <li>Hydrosalpinx</li>
              <li>Pelvic infection</li>
              <li>Preventive cancer care</li>
            </ul>
          </section>

          {/* APPROACH */}
          <section className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Surgical Approach
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Experienced gynecologists & laparoscopic surgeons</li>
              <li>Modern operation theaters</li>
              <li>Personalized surgical planning</li>
              <li>Post-operative care & follow-ups</li>
              <li>Compassionate patient support</li>
            </ul>
          </section>

          {/* SUMMARY */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p>
              Our Gynae-Surgical Procedures include advanced minimally invasive
              treatments such as Laparoscopy, Oophorectomy, and Salpingectomy,
              ensuring safer surgeries, faster recovery, and excellent outcomes.
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

export default GynaeSurgical;
