import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationBar from "../NavigationBar";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the purpose of this project?",
      answer:
        "The purpose of this project is to showcase a partnership engagement platform.",
    },
    {
      question: "How can I contact the team?",
      answer:
        "You can contact us via the email or phone number provided on the Contact Us page.",
    },
    {
      question: "Where can I find more information?",
      answer:
        "Additional details are available in the technical specifications section.",
    },
    // Add the rest of your FAQs here...
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="bg-cover bg-center py-8 sm:py-12 lg:py-16"
      style={{ backgroundColor: "#CDB898" }}
    >
      <NavigationBar />
      <div className="max-w-2xl mx-auto mt-12">
        <h2 className="text-[50px] font-bold tracking-tight text-gray-900 text-center mb-8 font-assassin">
          frequently asked questions
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border rounded-lg shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-4 py-3 font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  {faq.question}
                </button>

                {/* Animate the FAQ answer container with AnimatePresence */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, maxHeight: 0 }}
                      animate={{
                        opacity: 1,
                        maxHeight: 1000, // Adjust this value as needed
                      }}
                      exit={{ opacity: 0, maxHeight: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 py-3 text-sm text-gray-700 overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
