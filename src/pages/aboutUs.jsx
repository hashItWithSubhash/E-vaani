import { motion } from "framer-motion";
import { FaBookReader, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const SlideUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay, ease: "easeInOut" },
  },
});

const AboutUs = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">About Us</h1>
        <motion.p
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-lg text-gray-700 text-center px-6 max-w-3xl mx-auto"
        >
          We are a cutting-edge e-learning platform dedicated to empowering
          learners with interactive and engaging educational experiences.
          Through our expert-led courses, one-on-one mentorship, and
          gamified learning, we aim to make education accessible, enjoyable,
          and effective.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {/* Our Mission */}
          <motion.div
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-6 py-8 hover:bg-white hover:scale-105 duration-300 hover:shadow-2xl"
          >
            <FaBookReader className="text-4xl text-blue-600" />
            <h2 className="text-xl font-semibold text-center">Our Mission</h2>
            <p className="text-center text-gray-600 px-3">
              To revolutionize education through personalized and innovative
              learning experiences.
            </p>
          </motion.div>

          {/* Our Approach */}
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-6 py-8 hover:bg-white hover:scale-105 duration-300 hover:shadow-2xl"
          >
            <FaChalkboardTeacher className="text-4xl text-green-600" />
            <h2 className="text-xl font-semibold text-center">Our Approach</h2>
            <p className="text-center text-gray-600 px-3">
              Combining expert-led live classes, AI-powered mentorship, and
              gamified learning to enhance engagement.
            </p>
          </motion.div>

          {/* Our Community */}
          <motion.div
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-6 py-8 hover:bg-white hover:scale-105 duration-300 hover:shadow-2xl"
          >
            <FaUsers className="text-4xl text-red-600" />
            <h2 className="text-xl font-semibold text-center">Our Community</h2>
            <p className="text-center text-gray-600 px-3">
              A global network of students, educators, and mentors fostering
              a culture of continuous learning.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;