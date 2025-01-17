import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "What is this project?",
      answer:
        "This is a militarized training camp filled with adventure and joy. Our aim is to provide you with the much needed team skills, survival skills, leadership and networking opportunities. We’ve added a little touch of Assassin’s Creed to make this even exciting. Don’t hesitate, apply now and enjoy later.",
    },
    {
      question: "Who is doing this project?",
      answer:
        "This is proudly organised by the Professional Development Avenue of the Rotaract Club of SLIIT.",
    },
    {
      question: "Can anyone take part?",
      answer: "Absolutely!!! ANYONE between the ages 18 - 30 can take part.",
    },
    {
      question: "Is it only for Rotractors?",
      answer: "NO!!! This is literally for ANYONE between the ages 18 - 30. ",
    },
    {
      question: "Is it only for SLIIT students?",
      answer: "NO!!! This is literally for ANYONE between the ages 18 - 30. ",
    },
    {
      question: "How many days is it?",
      answer:
        "This fun will extend beyond just one day. Having an overnight stay this will be carried for TWO amazingly fun filled days. ",
    },
    {
      question: "Where will it be held?",
      answer:
        "Let’s all Assemble at the CHE adventure park (location details will be provided). ",
    },
    {
      question: "What is the approximate price for a head? ",
      answer:
        "All of this GREAT fun for only a small amount of around LKR 4,000 - LKR 5,000.",
    },
    {
      question: "Where can I find more information?",
      answer:
        "The Entire brotherhood of delegates will be added to a WhatsApp group where all messages will be communicated. We will also have a Delegate Handbook ready and made just for YOU. ",
    },
    {
      question: "How can I contact the team?",
      answer:
        "Feel free to contact any of us in the ‘Contact Us’ page of our Official Brotherhood Website.",
    },
    {
      question: "What is this scavenger hunt thing?",
      answer:
        "Shhhhh!!! That’s a secret for now. We will reveal it on the day. But it WILL be fun, competitive and exciting. ",
    },
    {
      question: "How can you ensure safety of this?",
      answer:
        "Our Driving Force, the Team Alpha Organising Committee has successfully figured out all the details in case of an emergency including the locations of the nearest hospitals and transportation facilities have been arranged. ",
    },
    {
      question: "What should I bring?",
      answer:
        "Basically EVERYTHING you need for two camping days including a bit of extra cash for emergencies (will include a checklist in the delegate handbook).",
    },
    {
      question: "Where can we sleep?",
      answer:
        "Comfortable and safe tents will be provided from the Venue itself to provide you with the BEST OF THE BEST camping experience like nothing you’ve ever had. ",
    },
    {
      question: "Is the Internet there good",
      answer: "of course it is",
    },
    {
      question: "When will it be held",
      answer: "we're planning to hold this on 22nd of february 2025",
    },
    {
      question: "How fun will it be?",
      answer: "EXTREMELY F****** Fun my dear creed brother!!!",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
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
      <Footer />
    </>
  );
};

export default FAQ;
