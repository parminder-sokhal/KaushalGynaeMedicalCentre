import { Heart, ShieldCheck, Sparkles, Target } from "lucide-react";
import Doctors from "../components/Doctors";

const AboutUs = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* HERO */}
      <section className="relative mt-28">
        <img
          src="/heroimg.jpg"
          alt="About Kaushal Gynae and Medical Centre"
          className="w-full h-[70vh] object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-40 text-white text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              About Us
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-200">
              Compassionate, ethical, and advanced women’s healthcare — trusted
              by thousands since 2013.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-8xl mx-auto px-6 lg:px-40 py-20 space-y-16">
        {/* INTRO */}
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Kaushal Gynae and Medical Centre
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Kaushal Gynae and Medical Centre stands as a trusted name in women’s
            healthcare, known for excellence in gynecology, obstetrics, advanced
            laparoscopic surgeries, and cosmetic gynecology services.
            Established in 2013, the centre has earned the confidence of
            thousands of patients through compassionate, ethical, and
            high-quality care. With a strong focus on modern, minimally invasive
            techniques and personalized treatment, the centre is committed to
            ensuring safety, comfort, and optimal outcomes for every woman.
          </p>
        </div>

        {/* HIGHLIGHT CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Heart,
              title: "Compassionate Care",
              desc: "Every woman is treated with dignity, empathy, and respect.",
            },
            {
              icon: ShieldCheck,
              title: "Ethical Practice",
              desc: "Transparent decisions and patient-first treatment plans.",
            },
            {
              icon: Sparkles,
              title: "Advanced Technology",
              desc: "Modern diagnostics & minimally invasive procedures.",
            },
            {
              icon: Target,
              title: "Clinical Excellence",
              desc: "Evidence-based care aligned with global standards.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white shadow hover:shadow-lg transition"
            >
              <item.icon className="text-green-500 mb-4" size={32} />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* INFRASTRUCTURE */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Infrastructure
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Operating from a modern facility in Peer Muchalla, Zirakpur,
              Kaushal Gynae and Medical Centre is equipped with advanced
              operation theatres, cutting-edge diagnostics, and high-precision
              surgical technology — ensuring safety, accuracy, and faster
              recovery.
            </p>
          </div>

          <img
            src="/hospital-infra1.jpg"
            alt="Hospital Infrastructure"
            className="rounded-3xl shadow-lg"
          />
        </div>

        {/* MISSION / VISION / VALUES */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-green-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To provide accessible, ethical, and compassionate women’s
              healthcare with personalized medical excellence.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-blue-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be a centre of excellence recognized for innovation, integrity,
              and superior patient outcomes.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-green-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Our Values
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Patient-first approach</li>
              <li>• Compassion & empathy</li>
              <li>• Safety & clinical excellence</li>
              <li>• Continuous learning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <Doctors />
    </div>
  );
};

export default AboutUs;
