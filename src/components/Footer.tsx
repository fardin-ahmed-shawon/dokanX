import { Github, Facebook, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">DokanX</h3>
            <p className="text-sm text-muted-foreground">
              Complete E-Commerce Platform as a Service. Launch your online store with enterprise-grade features.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors" >Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#demo" className="hover:text-foreground transition-colors">Live Demo</a></li>
              <li><a href="#docs" className="hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#careers" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-foreground transition-colors">Security</a></li>
              <li><a href="#compliance" className="hover:text-foreground transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DokanX by Easy Tech Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/easytechsolutionsx/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/easy-techx-solutions/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            {/* <a href="mailto:contact@easytechx.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a> */}



          </div>
        </div>
      </div>
    </footer>
  );
};
