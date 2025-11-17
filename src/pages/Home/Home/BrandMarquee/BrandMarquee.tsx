import { useEffect, useRef, useState } from "react";
import brandImg1 from "@/assets/brands/casio.png";
import brandImg2 from "@/assets/brands/amazon.png";
import brandImg3 from "@/assets/brands/moonstar.png";
import brandImg4 from "@/assets/brands/star.png";
import brandImg5 from "@/assets/brands/start_people.png";
import brandImg6 from "@/assets/brands/randstad.png";

const BrandMarquee = () => {
  const brands = [
    { logo: brandImg1 },
    { logo: brandImg2 },
    { logo: brandImg3 },
    { logo: brandImg4 },
    { logo: brandImg5 },
    { logo: brandImg6 },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [marqueeStyle, setMarqueeStyle] = useState({});

  const tripledBrands = [...brands, ...brands, ...brands];

  useEffect(() => {
    const updateAnimation = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const marqueeWidth = containerWidth * 3;
        const duration = marqueeWidth / 60;

        setMarqueeStyle({
          animation: `marquee ${duration}s linear infinite`,
          width: `${marqueeWidth}px`,
        });
      }
    };

    updateAnimation();
    window.addEventListener("resize", updateAnimation);

    return () => window.removeEventListener("resize", updateAnimation);
  }, []);

  return (
    <>
      <h2 className="text-secondary text-center font-extrabold text-3xl">
        We've helped thousands of sales teams
      </h2>
      <div ref={containerRef} className="relative w-full overflow-hidden py-8">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex whitespace-nowrap" style={marqueeStyle}>
          {tripledBrands.map((brand, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt=""
                className="h-12 w-auto object-contain max-w-32"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandMarquee;
