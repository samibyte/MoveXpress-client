import Footer from "@/components/blocks/footer/footer-simple-01";
import Navbar from "@/pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="max-w-11/12 md:max-w-9/12 mx-auto">
      <header>
        <Navbar />
      </header>
      <main className="min-h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
