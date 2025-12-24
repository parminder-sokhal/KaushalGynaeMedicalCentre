import { Link } from "react-router-dom";
import { treatmentData } from "../../data/servicesAndTreatments";

const GynaeSurgicalProcedures = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/gynae-surgery.jpeg"
          alt="Gynae-Surgical Procedures"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Gynae-Surgical
              <span className="block text-pink-400">Procedures</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Advanced gynecological surgical care using minimally invasive
              techniques to ensure safety, faster recovery, and effective
              treatment outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Book Consultation
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
              What Are Gynecological Surgical Procedures?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Gynecological surgical procedures are performed to diagnose,
              treat, or manage conditions affecting the female reproductive
              system. We offer a wide range of advanced surgeries, including
              minimally invasive laparoscopic procedures and essential
              reproductive surgeries, with a focus on patient safety and quicker
              recovery.
            </p>
          </div>

          {/* LAPAROSCOPY */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              1. Laparoscopy
            </h2>

            <p className="text-gray-700 mb-4">
              Laparoscopy is a minimally invasive surgical technique where small
              incisions are used instead of large cuts. A camera-equipped
              laparoscope allows the surgeon to view and treat internal organs
              with precision.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Why Laparoscopy Is Performed
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Chronic pelvic pain</li>
              <li>Endometriosis diagnosis and treatment</li>
              <li>Ovarian cyst removal</li>
              <li>Fibroid treatment</li>
              <li>Infertility evaluation</li>
              <li>Removal of adhesions (scar tissue)</li>
              <li>Minimally invasive hysterectomy</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Benefits of Laparoscopy
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Smaller incisions</li>
              <li>Less bleeding and pain</li>
              <li>Faster recovery</li>
              <li>Minimal scarring</li>
              <li>Shorter hospital stay</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How the Procedure Works
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Small incisions are made on the abdomen</li>
              <li>A laparoscope is inserted for visualization</li>
              <li>Carbon dioxide gas expands the abdomen</li>
              <li>Surgical instruments perform the procedure</li>
              <li>Incisions are closed with small sutures</li>
            </ul>
          </div>

          {/* OOPHORECTOMY */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              2. Oophorectomy
            </h2>

            <p className="text-gray-700 mb-4">
              Oophorectomy is the surgical removal of one or both ovaries. It is
              recommended when ovarian health is severely affected or to reduce
              cancer risk in high-risk patients.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              When Oophorectomy Is Needed
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Large or painful ovarian cysts</li>
              <li>Ovarian tumors (benign or malignant)</li>
              <li>Severe ovarian endometriosis</li>
              <li>BRCA gene mutation risk reduction</li>
              <li>Ovarian torsion</li>
              <li>Pelvic inflammatory disease complications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Types of Oophorectomy
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Unilateral: Removal of one ovary</li>
              <li>Bilateral: Removal of both ovaries</li>
            </ul>

            <p className="text-gray-700">
              The procedure is usually performed laparoscopically. Recovery is
              smooth, with counselling provided for hormonal or reproductive
              changes if both ovaries are removed.
            </p>
          </div>

          {/* SALPINGECTOMY */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              3. Salpingectomy
            </h2>

            <p className="text-gray-700 mb-4">
              Salpingectomy is the surgical removal of one or both fallopian
              tubes. It is often performed to treat tubal diseases or prevent
              serious complications.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              When Salpingectomy Is Needed
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Ectopic pregnancy</li>
              <li>Blocked or damaged fallopian tubes</li>
              <li>Hydrosalpinx causing infertility</li>
              <li>Severe pelvic infections</li>
              <li>Cancer risk reduction</li>
              <li>Permanent contraception</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Recovery
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Quick recovery (1–2 weeks for laparoscopy)</li>
              <li>Minimal pain and discomfort</li>
              <li>Improved IVF success in selected cases</li>
            </ul>
          </div>

          {/* APPROACH */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Approach to Gynecological Surgery
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li>✔ Highly experienced gynecologists & surgeons</li>
              <li>✔ Advanced laparoscopic operation theaters</li>
              <li>✔ Personalized surgical planning</li>
              <li>✔ Complete post-operative care & follow-up</li>
              <li>✔ Compassionate, patient-focused treatment</li>
            </ul>
          </div>

          {/* SUMMARY */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Summary</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our Gynae-Surgical Procedures include advanced treatments such as
              Laparoscopy, Oophorectomy, and Salpingectomy. With modern
              technology, expert surgeons, and a minimally invasive approach, we
              ensure safer procedures, faster healing, and excellent medical
              outcomes for women.
            </p>
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

export default GynaeSurgicalProcedures;
