import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
              DokanX
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('tech-stack')} className="text-sm font-medium hover:text-primary transition-colors">
              Technology
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              Get Demo
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('tech-stack')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              Technology
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full mt-4 bg-primary text-primary-foreground">
              Get Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
