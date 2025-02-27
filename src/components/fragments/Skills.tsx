import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

const SkillIcon = ({ icon, color }: { icon?: string; color: string }) => (
  <div className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg pointer">
    <i className={`bx bxl-${icon} text-2xl ${color}`} />
  </div>
);

const skills = [
  {
    icon: "html5",
    name: "HTML",
    color: "text-orange-500",
  },
  {
    icon: "css3",
    name: "CSS",
    color: "text-blue-500",
  },
  {
    icon: "tailwind-css",
    name: "Tailwind",
    color: "text-blue-500",
  },
  {
    icon: "bootstrap",
    name: "Bootstrap",
    color: "text-purple-500",
  },
  {
    icon: "javascript",
    name: "JavaScript",
    color: "text-yellow-500",
  },
  {
    icon: "typescript",
    name: "TypeScript",
    color: "text-blue-500",
  },
  {
    icon: "react",
    name: "React",
    color: "text-blue-500",
  },
  {
    icon: "git",
    name: "Git",
    color: "text-orange-500",
  },
  {
    icon: "github",
    name: "Github",
    color: "text-white-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="skill-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M50 30 L50 70 M30 50 L70 50"
                stroke="currentColor"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#skill-pattern)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-center">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-purple-400 group-hover:scale-105 group-hover:pointer-events-none transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
