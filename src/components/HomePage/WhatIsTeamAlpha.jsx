import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhatIsTeamAlpha = () => {
  const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];
  const stats = [
    { name: "Offices worldwide", value: 12 },
    { name: "Full-time colleagues", value: 300 },
    { name: "Hours per week", value: 40 },
    { name: "Paid time off", value: "Unlimited" },
  ];

  const CountUp = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const endValue = typeof end === "number" ? end : 0;
      const duration = 4000; // 4 seconds for a slower count-up
      const incrementTime = 50; // update every 50 ms

      const increment = (endValue / duration) * incrementTime;

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          clearInterval(timer);
          setCount(endValue);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }, [end]);

    return <span>{count}</span>;
  };

  // Use intersection observer to start animation on scroll
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
    >
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            What Is Team Alpha
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {typeof stat.value === "number" ? (
                    <CountUp end={stat.value} />
                  ) : (
                    stat.value
                  )}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhatIsTeamAlpha;
