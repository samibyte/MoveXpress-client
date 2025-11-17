import React from "react";
import { Link } from "react-router";
import { Button } from "./button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CtaBtn = (props: {
  ctaHref: string;
  ctaText: string;
  className?: string;
}) => {
  return (
    <Link to={props.ctaHref} className="flex cursor-pointer items-center">
      <Button
        className={cn(
          "text-xl font-bold cursor-pointer px-8 rounded-md shadow-sm h-12",
          props.className
        )}
      >
        {props.ctaText}
      </Button>
      <div className="rounded-full w-10 h-10 flex justify-center items-center bg-primary-foreground">
        <ArrowUpRight color="#CAEB66" />
      </div>
    </Link>
  );
};

export default CtaBtn;
