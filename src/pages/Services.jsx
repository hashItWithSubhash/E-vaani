import { motion } from "framer-motion";
import { FaLaptopCode, FaChalkboardTeacher, FaBrain } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Interactive Learning",
    description:
      "Experience hands-on learning with AI-powered courses and live mentorship.",
    icon: <FaLaptopCode className="text-4xl text-blue-600" />,
  },
  {
    id: 2,
    title: "Expert-Led Sessions",
    description:
      "Learn from top industry experts through structured video lessons.",
    icon: <FaChalkboardTeacher className="text-4xl text-green-600" />,
  },
  {
    id: 3,
    title: "Personalized Roadmaps",
    description:
      "Get customized learning paths tailored to your goals and skill level.",
    icon: <FaBrain className="text-4xl text-red-600" />,
  },
];

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-6">Our Services</h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-lg text-gray-600 text-center px-6 max-w-2xl mx-auto"
        >
          Explore our wide range of services designed to enhance your learning experience.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-6 py-8 hover:bg-white hover:scale-105 duration-300 hover:shadow-2xl"
            >
              {service.icon}
              <h2 className="text-xl font-semibold text-center">{service.title}</h2>
              <p className="text-center text-gray-600 px-3">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;