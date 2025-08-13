import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const DentalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-primary shadow-primary">
              <svg className="h-6 w-6 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">
              Dental<span className="text-primary">Quick</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/doctors" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Users className="h-4 w-4" />
              <span>Find Doctors</span>
            </Link>
            <Link 
              to="/treatments" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Calendar className="h-4 w-4" />
              <span>Treatments</span>
            </Link>
            <Link 
              to="/lab-connect" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Lab Connect</span>
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="glass" className="border-primary/30">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="premium">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/doctors" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="h-4 w-4" />
                <span>Find Doctors</span>
              </Link>
              <Link 
                to="/treatments" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="h-4 w-4" />
                <span>Treatments</span>
              </Link>
              <Link 
                to="/lab-connect" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Lab Connect</span>
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="glass" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="premium" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default DentalHeader;