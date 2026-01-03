import { Link } from "react-router-dom";
import { treatmentData } from "../../data/servicesAndTreatments";

const MenopauseAndWomensHealthSupport = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative">
        <img
          src="/menopause-care.jpeg"
          alt="Menopause & Women’s Health Support"
          className="w-full h-[70vh] object-cover mt-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Menopause
              <span className="block text-pink-400">
                & Women’s Health Support
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-8">
              Personalized care to help women manage hormonal changes, relieve
              symptoms, and maintain long-term health during and after
              menopause.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="https://u.tatvacare.in/r/SPtEZB"
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Understanding Menopause & Women’s Health
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Menopause is a natural stage in a woman’s life, usually occurring
              between the ages of 45–55. Hormonal changes may begin years
              earlier during perimenopause. While natural, these changes can
              cause physical, emotional, and hormonal symptoms that benefit from
              specialized medical care.
            </p>
          </div>

          {/* STAGES */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Stages of Menopause
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Perimenopause
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Irregular periods</li>
                  <li>Hot flashes</li>
                  <li>Mood swings</li>
                  <li>Sleep disturbances</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Menopause
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Hot flashes & night sweats</li>
                  <li>Vaginal dryness</li>
                  <li>Reduced libido</li>
                  <li>Weight gain</li>
                  <li>Mood changes & joint pain</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Post-Menopause
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Osteoporosis risk</li>
                  <li>Heart disease</li>
                  <li>Urinary issues</li>
                  <li>Hormone-related changes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Our Menopause & Women’s Health Support Services
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  1. Hormonal Health Evaluation
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Hormone level testing</li>
                  <li>Thyroid profile</li>
                  <li>Bone density evaluation</li>
                  <li>Vitamin D & calcium levels</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  2. Menopause Symptom Management
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Hot flashes & night sweats</li>
                  <li>Mood swings & low energy</li>
                  <li>Sleep disturbances</li>
                  <li>Vaginal dryness & urinary discomfort</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  3. Hormone Replacement Therapy (HRT) Counselling
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Benefits & risks discussion</li>
                  <li>Pills, patches, gels & creams</li>
                  <li>Personalized suitability assessment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  4. Bone, Joint & Heart Health Support
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Osteoporosis prevention</li>
                  <li>Calcium & Vitamin D plans</li>
                  <li>Heart & metabolic health monitoring</li>
                  <li>Diet & exercise guidance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  5. Sexual, Mental & Emotional Wellbeing
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Low libido & painful intercourse support</li>
                  <li>Anxiety, mood swings & depression care</li>
                  <li>Stress management & counselling</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  6. General Women’s Health Beyond Pregnancy
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>PCOS & thyroid disorders</li>
                  <li>Breast & urinary health</li>
                  <li>Weight, skin & hair concerns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-gradient-to-br from-pink-50 to-white p-10 rounded-3xl shadow">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Our Menopause Care?
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li>✔ Experienced women’s health specialists</li>
              <li>✔ Personalized, evidence-based care</li>
              <li>✔ Confidential & compassionate support</li>
              <li>✔ Holistic physical, emotional & sexual care</li>
              <li>✔ Long-term post-menopause health planning</li>
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

export default MenopauseAndWomensHealthSupport;
