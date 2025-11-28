import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShoppingCart, Users, Package } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMobileMenuOpen(false);
      }
    };
  const stats = [
    { icon: ShoppingCart, value: "50K+", label: "Orders Processed" },
    { icon: Users, value: "10K+", label: "Active Users" },
    { icon: Package, value: "99.9%", label: "Uptime" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted animate-pulse-glow" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-border bg-card px-6 py-2 text-sm font-medium shadow-elegant">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
            Transform Your E-Commerce Vision
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="block mb-2">DokanX</span>
            <span className="block bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
              Complete E-Commerce
            </span>
            <span className="block bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
              Platform as a Service
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            DokanX is a React. js-powered SaaS e-commerce platform by Easy Tech Solutions, designed for entrepreneurs and SMEs to easily manage products, customers, payments, inventory, and logistics in one seamless, fast, and secure system. Launch your online store in minutes with our powerful, feature-rich platform. 
          
            {/* Launch your online store in minutes with our powerful, feature-rich platform. 
            Choose between PHP or React.js, complete with admin dashboard, payment integration, 
            and 27+ advanced features. */}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
            onClick={() => scrollToSection('tech-stack')}
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-accent hover:border-accent-foreground transition-all duration-300 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-12 w-full max-w-3xl">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-strong animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 rounded-2xl transition-all duration-500" />
                <div className="relative flex flex-col items-center space-y-3">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};
