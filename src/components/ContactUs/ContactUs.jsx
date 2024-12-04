import { motion } from "framer-motion";
import NavigationBar from "../NavigationBar";
import miyuniHeadshot from "../../assets/miyuniHeadshot.png";

const ContactUs = () => {
  const features = [
    { name: "Role", description: "Partnership Engagement" },
    {
      name: "Phone No",
      description: "123@rotaract.com",
    },
    { name: "Email", description: "+94123920" },
  ];

  return (
    <div
      className="bg-cover bg-center py-8 sm:py-12 lg:py-16"
      style={{ backgroundColor: "#CDB898" }}
    >
      <NavigationBar />

      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 mt-10 sm:mt-0 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Iman Abdeen
          </h2>

          <motion.dl
            className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="border-t pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <img
            alt="Iman Abdeen"
            src={miyuniHeadshot}
            className="rounded-lg bg-gray-100 w-full sm:w-3/4 lg:w-1/2 mx-auto"
          />
        </motion.div>
      </div>

      {/* Duplicate section for the second part */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-4 mt-10 sm:mt-0 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Iman Abdeen
          </h2>

          <motion.dl
            className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="border-t pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <img
            alt="Iman Abdeen"
            src={miyuniHeadshot}
            className="rounded-lg bg-gray-100 w-full sm:w-3/4 lg:w-1/2 mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
