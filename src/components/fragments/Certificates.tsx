import { motion } from "framer-motion";
import { FileCode } from "lucide-react";

export default function Certificates() {
  const services = [
    {
      icon: <FileCode className="w-12 h-12 min-w-12 min-h-12 text-amber-500" />,
      title: "Intermediate Junior Network Administrator",
      description: "Digital Talent Scholarship",
      link: "https://drive.google.com/file/d/1yWWaMy3vfH6O5Z1rDtpV-HJrxcyVKXy2/view?usp=drive_link",
    },
    {
      icon: <FileCode className="w-12 h-12 min-w-12 min-h-12 text-amber-500" />,
      title: "Fundamental Junior Network Administrator",
      description: "Digital Talent Scholarship",
      link: "https://drive.google.com/file/d/1QKyQXpAjLKdOSN3mkKpZllWt49gkCNSU/view?usp=sharing",
    },
    {
      icon: <FileCode className="w-12 h-12 min-w-12 min-h-12 text-blue-500" />,
      title: "HTML, CSS, JavaScript : Pemula Sampai Mahir",
      description: "Udemy",
      link: "https://drive.google.com/file/d/10h_yRH84HzP6BuNqZC8qrLoRwMFivQ_-/view?usp=sharing",
    },
    {
      icon: <FileCode className="w-12 h-12 min-w-12 min-h-12 text-green-500" />,
      title: "RevoU Tech Academy - Data & Software Engineering",
      description: "RevoU",
      link: "https://drive.google.com/file/d/1DeMpYuulUitLWWNqN3a_VWurYMHj0ig6/view?usp=sharing",
    },
    {
      icon: (
        <FileCode className="w-12 h-12 min-w-12 min-h-12 text-indigo-500" />
      ),
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      description: "Dicoding",
      link: "https://drive.google.com/file/d/1cFS1X5ObxeAhtF6XHRzEN2iT9QwsWWR2/view?usp=sharing",
    },
    {
      icon: <FileCode className="w-12 h-12 min-w-12 min-h-12 text-rose-500" />,
      title: "Meniti Karier sebagai Software Developer",
      description: "Dicoding",
      link: "https://drive.google.com/file/d/1pX_n5VZIK6RNNQz7ntjnLTUbUuXlX9CE/view?usp=sharing",
    },
    {
      icon: <FileCode className="w-12 h-12 min-w-12 min-h-12 text-slate-500" />,
      title: "Belajar Dasar Pemrograman Web",
      description: "Dicoding",
      link: "https://drive.google.com/file/d/19JfKYRGj7B_g__QauZrFG7FcaQjbZEdM/view?usp=sharing",
    },
    {
      icon: <FileCode className="w-12 h-12 min-w-12 min-h-12 text-cyan-500" />,
      title: "Belajar Membuat Front-End Web untuk Pemula",
      description: "Dicoding",
      link: "https://drive.google.com/file/d/1FUhudbhXhrQqpSPnzJ_YBH73wA7xFA3b/view?usp=sharing",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-md md:text-lg lg:text-xl font-semibold ml-4 dark:text-white group-hover:text-blue-600">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {service.title}
                  </a>
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                From: {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
