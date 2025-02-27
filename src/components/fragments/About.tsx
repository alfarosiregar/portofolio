import { motion } from "framer-motion";
import { Code, Database, Server, Zap } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col items-center gap-12 text-justify">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a Frontend Developer passionate about creating
              high-performance digital solutions with the latest web
              technologies. I focus on building scalable, efficient applications
              for seamless user experiences.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              With expertise in modern frameworks like Next.js, I write clean,
              efficient code and stay updated with industry trends to deliver
              cutting-edge solutions. As technology evolves, I continuously
              learn and adapt to new tools and best practices to refine my
              skills.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center items-center text-center gap-2 m-auto bg-white dark:bg-gray-400 p-6 rounded-lg shadow-md">
              <Image src={`/next.png`} alt="next" width={50} height={50} />
              <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-gray-900">
                NextJS
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
