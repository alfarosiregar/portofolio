import { Briefcase, Calendar, Globe, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function Experience() {
  const experiences = [
    {
      company: "Amazon Web Services",
      location: "AWS re/Start",
      period: "July 2025 - Now",
      role: "Cloud Computing",
      responsibilities: [
        "Participating in AWS re/Start, a full-time 12-week (3-month) cloud computing training program",
        "Gained knowledge of AWS services including Server, Networking, Storage, Databases, Security, Python, Linux, etc.",
        "Completed hands-on labs and real-world projects, applying cloud concepts to practical scenarios",
        "Actively preparing for AWS Certified Cloud Practitioner and AWS Certified Developer – Associate",
      ],
    },
    {
      company: "Kampus Merdeka – MSIB Program",
      location: "Studi Independen",
      period: "August 2023 - December 2023",
      role: "Data & Software Engineering - RevoU Tech Academy",
      responsibilities: [
        "Learned software engineering fundamentals and best practices in modern web development",
        "Built responsive web applications using HTML, CSS, JavaScript, React",
        "Gained experience in backend development with Node.js & Express.js",
        "Developed a fullstack capstone project integrating frontend and backend",
      ],
    },
    {
      company: "Kampus Merdeka – MSIB Program",
      location: "Studi Independen",
      period: "August 2022 - December 2022",
      role: "Front-End and Back-End Developer - Dicoding Academy",
      responsibilities: [
        "Learned programming logic, Git/GitHub, and web development basics",
        "Built interactive frontend applications with HTML, CSS, and JavaScript",
        "Explored backend fundamentals and created beginner-level server applications",
        "Completed a capstone project as a final submission",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Experiences" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? (
                    <Globe className="w-6 h-6 mr-2 text-blue-500" />
                  ) : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <UserCheck className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
