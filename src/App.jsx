import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaChartLine,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setFormStatus("Thank you! We'll be in touch 🚀");
        form.current.reset();
      })
      .catch(() => setFormStatus("Something went wrong. Try again."));
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-50 to-indigo-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Interncred
          </div>
          <div className="hidden md:flex space-x-10">
            <a
              href="#features"
              className="text-gray-700 hover:text-purple-700 transition"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-purple-700 transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-700 transition"
            >
              Join
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-linear-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
            Launch Your Frontend Career
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Join our self-paced Frontend Development Fellowship. Build real
            projects, grow your skills, and unlock certification +
            recommendation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-12 py-6 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Start Your Journey
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              className="border-2 border-purple-600 text-purple-700 px-12 py-6 rounded-full font-bold hover:bg-purple-50 transition-all"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </section>

      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-purple-800">
            Why Join the Fellowship?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: FaRocket,
                title: "Hands-on Projects",
                desc: "Build real-world apps using HTML, CSS, JS, React & more — portfolio-ready from day one.",
              },
              {
                icon: FaUsers,
                title: "Self-Paced Learning",
                desc: "Flexible timing, choose your resources — fit the fellowship around your schedule.",
              },
              {
                icon: FaChartLine,
                title: "Certification & LoR",
                desc: "Earn official certificate + Letter of Recommendation after completing 3 tasks.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-linear-to-br from-white to-purple-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-purple-100"
              >
                <feature.icon className="text-6xl text-purple-600 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-purple-800">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="py-24 px-6 bg-linear-to-b from-indigo-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-purple-800">
            What Fellows Say
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Ama K.",
                role: "Junior Developer",
                quote:
                  "The projects helped me land my first frontend role. The LoR was gold!",
              },
              {
                name: "Kwame T.",
                role: "Self-taught Dev",
                quote:
                  "Flexible pace + real skills. Best decision for my tech career.",
              },
              {
                name: "Efua M.",
                role: "UI Designer",
                quote: "From theory to portfolio in weeks. Highly recommend!",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-xl border border-purple-100"
              >
                <p className="text-gray-700 italic text-lg mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-purple-200 mr-4" />
                  <div>
                    <p className="font-bold text-purple-800">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-purple-800">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Subscribe for updates or send us a message to join the fellowship.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-lg mx-auto space-y-6"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your email address"
              required
              className="w-full p-5 border border-purple-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white py-5 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </button>
            {formStatus && (
              <p
                className={`mt-4 text-lg ${formStatus.includes("success") ? "text-green-600" : "text-red-600"}`}
              >
                {formStatus}
              </p>
            )}
          </form>

          <div className="mt-12">
            <p className="text-lg text-gray-700 mb-4">Or reach out directly:</p>
            <div className="flex justify-center space-x-10 text-5xl">
              <a
                href="https://wa.me/233554539994"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp className="text-green-600 hover:text-green-700 transition" />
              </a>
              <a href="mailto:info@interncred.com">
                <FaEnvelope className="text-purple-600 hover:text-purple-700 transition" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-linear-to-r from-purple-900 to-indigo-900 text-white py-12 text-center">
        <p>© {new Date().getFullYear()} Interncred Fellowship Program</p>
      </footer>
    </div>
  );
}

export default App;
