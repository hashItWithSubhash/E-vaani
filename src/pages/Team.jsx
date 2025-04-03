import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Lead Instructor",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Course Developer",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Data Science Mentor",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Blockchain Specialist",
    img: "https://via.placeholder.com/150",
  },
];

const Team = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-6">Meet Our Team</h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-lg text-gray-600 text-center px-6 max-w-2xl mx-auto"
        >
          Our team is made up of experts passionate about education and technology.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col items-center p-6 py-8 hover:bg-white hover:scale-105 duration-300 hover:shadow-2xl"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{member.name}</h2>
              <p className="text-center text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;