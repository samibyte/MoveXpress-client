import Logo from "@/components/Logo/Logo";
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
const Navbar = () => {
  const navigationLinks = [
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/coverage",
      label: "Coverage",
    },
    {
      href: "/about-us",
      label: "About Us",
    },
    {
      href: "/pricing",
      label: "Pricing",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <>
      <Navbar01
        className="my-7"
        logo={<Logo />}
        logoHref="/"
        navigationLinks={navigationLinks}
        signInHref="/login"
        ctaText="Sign up"
        ctaHref="sign-up"
      />
    </>
  );
};

export default Navbar;
