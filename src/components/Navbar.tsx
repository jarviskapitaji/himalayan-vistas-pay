import { Link, useLocation } from "react-router-dom";
import { Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Work", path: "/work" },
    { name: "Donations", path: "/donations" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105 duration-300">
            <Mountain className="h-10 w-10" />
            <div>
              <h1 className="text-2xl font-bold">YOOO Pahad Foundation</h1>
              <p className="text-xs text-primary-foreground/80">Empowering Mountain Communities</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={`text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10 ${
                    location.pathname === link.path ? "bg-primary-foreground/10" : ""
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <Link to="/donations">
              <Button variant="secondary" size="lg" className="ml-4">
                Donate Now
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Link to="/donations">
              <Button variant="secondary">Donate</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
