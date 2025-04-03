import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-6">Contact Us</h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-lg text-gray-600 text-center px-6 max-w-2xl mx-auto"
        >
          Have questions? Reach out to us and we’ll be happy to help.
        </motion.p>

        <div className="max-w-lg mx-auto mt-10 bg-[#f4f4f4] p-8 rounded-xl shadow-lg">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700">
            Or reach us at:{" "}
            <span className="font-semibold text-blue-600">support@evaani.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;