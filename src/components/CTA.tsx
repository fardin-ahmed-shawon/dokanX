import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary-foreground)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ready to Launch Your Store?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Get started with DokanX today and transform your e-commerce vision into reality
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">

              <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-10 py-7 bg-primary-foreground text-primary hover:bg-background hover:text-foreground transition-all duration-300 shadow-strong group"
              asChild
            >
              <a href="https://user-demo.dokanxbd.com/" target="_blank" rel="noopener noreferrer">
                See Demo
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-10 py-7 bg-primary-foreground text-primary hover:bg-background hover:text-foreground transition-all duration-300 shadow-strong group"
              asChild
            >
              <a href="https://wa.me/8801580741616?text=Hello%20I%20am%20interested" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact 
              </a>
            </Button>
          </div>

          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@dokanxbd.com</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />
    </section>
  );
};
