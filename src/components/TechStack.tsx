import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";
import { FeatureDetailsModal } from "./FeatureDetailsModal";

const reactFeatures = [
  "React.js Frontend",
  "Modern UI/UX",
  "Lightning Fast",
  "Unlimited Landing Pages",
  "Edit Order Feature",
  "29 Admin Features"
];

export const TechStack = () => {
  const [phpModalOpen, setPhpModalOpen] = useState(false);
  const [reactModalOpen, setReactModalOpen] = useState(false);

  return (
    <section id="tech-stack" className="py-24 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
               Technology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Build Your Store With the Right Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pick the platform that best fits your technical requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto place-items-center">

          
          {/* React Version */}
          <Card className="border-2 border-primary hover:shadow-strong transition-all duration-500 group relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-bl-full blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            
            <CardHeader className="space-y-4 relative">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-base px-4 py-1 border-primary">React.js</Badge>
                <Badge className="bg-primary text-primary-foreground">Modern</Badge>
              </div>
              <CardTitle className="text-3xl group-hover:text-primary transition-colors duration-300">React E-Commerce</CardTitle>
              <CardDescription className="text-base">
                Next-generation e-commerce with enhanced features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              <ul className="space-y-3">
                {reactFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 group/item">
                    <div className="h-2 w-2 rounded-full bg-primary group-hover/item:scale-125 transition-transform" />
                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 space-y-3">
                <Button 
                  onClick={() => setReactModalOpen(true)}
                  variant="outline"
                  className="w-full group/btn border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Sparkles className="mr-2 h-4 w-4 group-hover/btn:animate-pulse" />
                  See All Features (53+)
                </Button>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  asChild
                >
                  <a href="https://user-demo.dokanxbd.com/" target="_blank" rel="noopener noreferrer">
                    View User Panel
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-primary"
                  asChild
                >
                  <a href="https://admin-demo.dokanxbd.com/Admin/" target="_blank" rel="noopener noreferrer">
                    View Admin Dashboard
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <FeatureDetailsModal 
        isOpen={phpModalOpen} 
        onClose={() => setPhpModalOpen(false)} 
        type="php" 
      />
      <FeatureDetailsModal 
        isOpen={reactModalOpen} 
        onClose={() => setReactModalOpen(false)} 
        type="react" 
      />
    </section>
  );
};
