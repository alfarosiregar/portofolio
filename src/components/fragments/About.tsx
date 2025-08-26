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
              I’m a Fresh Graduate and Front-End Developer Enthusiast passionate
              about building fast, responsive, and secure web applications.
              Currently enhancing my Cloud Computing skills through the AWS
              re/Start program while progressing toward the AWS Cloud
              Practitioner and Developer-Associate certifications. Through the
              program, I have gained knowledge in core AWS services including
              Server, Networking fundamentals (IP addressing, DNS, VPC, subnets,
              routing, and security groups), Storage, Databases, Security,
              Python, Linux, etc. I aim to combine Front-End expertise with
              Cloud Computing knowledge to deliver scalable solutions and
              contribute to innovative teams.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
