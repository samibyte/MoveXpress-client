"use client";

import { motion } from "motion/react";
import { Package, Truck, CreditCard, Archive, Repeat } from "lucide-react";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
    icon: <Package className="w-6 h-6" />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <Archive className="w-6 h-6" />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: <Repeat className="w-6 h-6" />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility, we allow end customers to return or exchange their products with online business merchants.",
    icon: <Package className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="bg-secondary text-center text-secondary-foreground rounded-4xl p-8 md:p-12 lg:p-16 mb-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-medium mx-auto mb-12 max-w-3xl text-lg leading-relaxed"
        >
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServicesCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
