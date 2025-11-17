import { cn } from "@/lib/utils";
import logoImg from "../../assets/logo.png";

const Logo = ({ className = "" }) => {
  return (
    <div className="relative flex items-end">
      <img className=" absolute -left-5 -top-4" src={logoImg} alt="" />
      <h1 className={cn("font-extrabold text-3xl", className)}>MoveXpress</h1>
    </div>
  );
};

export default Logo;
