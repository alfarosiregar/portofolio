import { motion } from "framer-motion";
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
              I am a Fresh Graduate and Front-End Developer Enthusiast with a
              strong passion for building fast, responsive, and secure web
              applications. Currently, I am advancing my Cloud Computing
              expertise through the AWS re/Start program while preparing for the
              AWS Cloud Practitioner and Developer-Associate certifications.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Through this program, I have gained hands-on experience with core
              AWS services, including Server Management, Networking (IP
              addressing, DNS, VPC, subnets, routing, and security groups),
              Storage, Databases, Security, Python, and Linux. My goal is to
              integrate front-end development skills with cloud computing
              knowledge to deliver scalable, reliable, and innovative solutions
              that create real business impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
