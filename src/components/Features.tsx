import { 
  ShoppingCart, 
  Users, 
  BarChart, 
  Lock, 
  Smartphone, 
  Package, 
  CreditCard, 
  Star,
  Truck,
  Settings,
  FileText,
  Palette
} from "lucide-react";

const userFeatures = [
  { icon: Users, title: "User Management", description: "Registration, login, and profile management" },
  { icon: ShoppingCart, title: "Shopping Cart", description: "Full cart functionality with updates and removal" },
  { icon: Package, title: "Product Catalog", description: "Categories, search, and filtering" },
  { icon: Star, title: "Reviews & Ratings", description: "Customer feedback and product ratings" },
  { icon: CreditCard, title: "Payment Options", description: "Multiple payment methods including mobile banking" },
  { icon: Truck, title: "Order Tracking", description: "Real-time order status and tracking" },
];

const adminFeatures = [
  { icon: BarChart, title: "Dashboard Analytics", description: "Monitor sales, customers, and orders" },
  { icon: Package, title: "Inventory Control", description: "Product and stock management" },
  { icon: FileText, title: "Invoice Management", description: "Generate, print, and download invoices" },
  { icon: Settings, title: "Role Management", description: "RBAC and ABAC with custom permissions" },
  { icon: Truck, title: "Courier Integration", description: "Steadfast courier with one-click entry" },
  { icon: Palette, title: "Theme Customization", description: "Customize website appearance and content" },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features for both customers and administrators
          </p>
        </div>

        {/* User Panel Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 justify-center">
            <div className="p-2 rounded-lg bg-primary/10">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            Customer Experience
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-strong animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-2xl" />
                
                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Admin Panel Features */}
        <div>
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 justify-center">
            <div className="p-2 rounded-lg bg-accent/10">
              <Lock className="h-6 w-6 text-accent" />
            </div>
            Admin Dashboard
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-background border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-strong animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-primary/0 to-accent/0 group-hover:from-accent/5 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-500 rounded-2xl" />
                
                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
