import React from "react";
import {
  PackageSearch,
  Wallet,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: (
      <PackageSearch className="w-10 h-10 text-secondary" strokeWidth={1.6} />
    ),
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <Wallet className="w-10 h-10 text-secondary" strokeWidth={1.6} />,
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <Building2 className="w-10 h-10 text-secondary" strokeWidth={1.6} />,
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: (
      <BriefcaseBusiness
        className="w-10 h-10 text-secondary"
        strokeWidth={1.6}
      />
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-12 mb-25">
      <div className="max-w-10/12 mx-auto px-6">
        <h2 className="text-3xl inter-font font-extrabold text-secondary mb-8">
          How it Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              {step.icon}

              <h3 className="mt-4 font-semibold text-[#003E39] text-lg">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
