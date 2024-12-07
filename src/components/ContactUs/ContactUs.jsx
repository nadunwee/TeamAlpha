import { motion } from "framer-motion";
import NavigationBar from "../NavigationBar";
import ranudiHeadshot from "../../assets/ranudiHeadshot.jpeg";
import ImanHeadshot from "../../assets/ImanHeadshot.jpeg";
import sheniseHeadshot from "../../assets/sheniseHeadshot.jpg";
import miyuniHeadshot from "../../assets/miyuniHeadshot.jpeg";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  const contacts = [
    {
      name: "Miyuni De Almeida",
      role: "Co-Chair",
      phone: "+94 74 064 8721",
      email: "miyunia.racsliit@gmail.com",
      image: miyuniHeadshot,
    },
    {
      name: "Shenise Pronk",
      role: "Co-Chair",
      phone: "+94 76 468 4101",
      email: "imana.racsliit@gmail.com",
      image: sheniseHeadshot,
    },
    {
      name: "Iman Abdeen",
      role: "Participants Engagement and Experience",
      phone: "+94 76 465 5407",
      email: "imana.racsliit@gmail.com",
      image: ImanHeadshot,
    },
    {
      name: "Ranudi Kaluarachchi",
      role: "Participants Engagement and Experience",
      phone: "+94 74 102 9481",
      email: "ranudik.racsliit@gmail.com",
      image: ranudiHeadshot,
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-center py-8 sm:py-12 lg:py-16"
        style={{ backgroundColor: "#CDB898" }}
      >
        <NavigationBar />

        {/* Loop through contacts */}
        {contacts.map((contact, index) => (
          <div
            key={contact.name}
            className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 mt-10 sm:mt-0 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {contact.name}
              </h2>

              <motion.dl
                className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <motion.div
                  className="border-t pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <dt className="font-medium text-gray-900">Role</dt>
                  <dd className="mt-2 text-sm text-gray-500">{contact.role}</dd>
                </motion.div>
                <motion.div
                  className="border-t pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <dt className="font-medium text-gray-900">Phone No</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {contact.phone}
                  </dd>
                </motion.div>
                <motion.div
                  className="border-t pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <dt className="font-medium text-gray-900">Email</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {contact.email}
                  </dd>
                </motion.div>
              </motion.dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              <img
                alt={contact.name}
                src={contact.image}
                className="rounded-lg bg-gray-100 w-full sm:w-3/4 lg:w-1/2 mx-auto object-cover h-64"
              />
            </motion.div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
