import { motion } from "motion/react";

interface ServicesCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServicesCard = ({ title, description, icon }: ServicesCardProps) => {
  const cardVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group flex flex-col h-72 items-center justify-start p-8 bg-card border border-border/50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
    >
      {/* Icon Container */}
      <motion.div
        variants={iconVariants}
        className="w-16 h-16 flex items-center justify-center bg-secondary rounded-2xl mb-6 group-hover:bg-secondary/20 transition-colors duration-300"
      >
        <div className="text-primary">{icon}</div>
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-card-foreground mb-4 leading-tight group-hover:text-card-foreground/90 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-card-foreground/80 group-hover:text-card-foreground/90 text-sm leading-relaxed transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
