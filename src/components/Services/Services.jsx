import { MdOutlineCastForEducation } from "react-icons/md";
import { FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { GiAchievement } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Live Classes",
    link: "#",
    icon: <MdOutlineCastForEducation />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "One-One Mentorship",
    link: "#",
    icon: <FaChalkboardTeacher />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Live ChatBot",
    link: "#",
    icon: <RiRobot2Line />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Gamified Learning",
    link: "#",
    icon: <GiAchievement />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Course Materials",
    link: "#",
    icon: <FaBookOpen />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 Support",
    link: "#",
    icon: <MdSupportAgent />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
