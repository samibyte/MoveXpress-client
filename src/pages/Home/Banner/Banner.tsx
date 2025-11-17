import BannerImg1 from "@/assets/banner/banner1.png";
import BannerImg2 from "@/assets/banner/banner2.png";
import BannerImg3 from "@/assets/banner/banner3.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CtaBtn from "@/components/ui/CtaBtn";
import { Link } from "react-router";

const EmblaCarousel = () => {
  return (
    <Carousel
      opts={{ loop: true, containScroll: "trimSnaps" }}
      className="pb-25"
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className=" relative">
          <img src={BannerImg1} alt="" />
          <HeroCta />
        </CarouselItem>
        <CarouselItem className="relative">
          <img src={BannerImg2} alt="" />
          <HeroCta />
        </CarouselItem>
        <CarouselItem className="relative">
          <img src={BannerImg3} alt="" />
          <HeroCta />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default EmblaCarousel;

export const HeroCta = () => {
  return (
    <div className="flex gap-4 items-center absolute bottom-20 left-20 z-10">
      <CtaBtn
        ctaHref="/track"
        ctaText="Track Your Parcel"
        className="rounded-full"
      />
      <Link to="">
        <Button
          variant="outline"
          size="lg"
          className="text-sm h-12 font-bold cursor-pointer hover:bg-gray-200"
        >
          Be A Rider
        </Button>
      </Link>
    </div>
  );
};
