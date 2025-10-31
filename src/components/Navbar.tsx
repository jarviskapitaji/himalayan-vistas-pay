import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Work", path: "/work" },
    { name: "Donations", path: "/donations" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105 duration-300">
            <img src={logo} alt="Yooo Pahad Foundation Logo" className="h-16 w-16 object-contain" />
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
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${
                          location.pathname === link.path ? "bg-accent" : ""
                        }`}
                      >
                        {link.name}
                      </Button>
                    </Link>
                  ))}
                  <Link to="/donations" className="mt-4" onClick={() => setIsOpen(false)}>
                    <Button variant="secondary" className="w-full">
                      Donate Now
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
