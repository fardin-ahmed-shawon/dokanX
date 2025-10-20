import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface FeatureDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "php" | "react";
}

const phpFeatures = [
  "User Registration & Login",
  "All Products View",
  "Specific Category's Product View",
  "Product Main Category & Sub Category",
  "Product Search Bar",
  "Mobile Menu Bar",
  "Product Purchase (Add to Cart & Order Now button)",
  "Shopping Cart (Add Cart, Update Cart, View Cart, Remove Cart)",
  "Product Short & Long Description",
  "Product Ratings & Reviews",
  "Manual Payment Option (Mobile Banking)",
  "Customer Dashboard (Dashboard, Change User Info, Change Password, View Orders)",
  "Responsive For All The Mobile Devices",
  "Coupon Code option",
  "Discount option",
  "Wishlist",
  "CTA Option Add (Whatsapp, Phone, Messenger)",
  "Add to Cart & Order Now option",
  "Order Tracking System",
  "Guest Order Option",
  "Product Size Option",
  "Product Color Option",
  "Related Product List",
  "Image Slider, Banner Image, Campaign Text Slider",
];

const phpAdminFeatures = [
  "Admin Login",
  "Admin Dashboard",
  "Monitor (Total Products, Total Customers, Total Product Categories, Total Active Orders)",
  "Product Add, Edit & Delete",
  "Product Main & Sub Categories Add, Edit & Delete",
  "Product & Category List Preview",
  "Slider, Banner & Posters Management",
  "Customer Management & Information Preview",
  "Advance Order Management Features (Multiple Searching & Sorting Option)",
  "Payment Management",
  "Invoice Management, Download & Print",
  "Purchase History Management",
  "Responsive For All The Mobile Devices",
  "Coupons & Discount Management",
  "Accounts (Dashboard, Total Collection, Expense Category, Add Expense, All Expenses, Yearly & Monthly Statement Preview/Download)",
  "Inventory Management",
  "Product Searching & Sorting",
  "Website Information & Content Customization",
  "Website Theme Customization",
  "Roles & Permission Customization",
  "Role Based Access Control",
  "Attribute Based Access Control",
  "User Role Management (Admin, Accountant, Manager, etc.)",
  "Fraud Customer Checker",
  "Dynamic Sizes, Colors & Others Product Attributes Management",
  "Create Order Option",
  "Courier Integrate - Steadfast (One Click Entry, Parcel Status, All Parcel Management, Missing Parcel Report)",
];

const reactFeatures = [
  ...phpFeatures,
];

const reactAdminFeatures = [
  ...phpAdminFeatures,
  "Edit Order Option",
  "Unlimited Landing Page Create Option",
];

export const FeatureDetailsModal = ({ isOpen, onClose, type }: FeatureDetailsModalProps) => {
  const userFeatures = type === "php" ? phpFeatures : reactFeatures;
  const adminFeatures = type === "php" ? phpAdminFeatures : reactAdminFeatures;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Badge variant="outline" className="text-base px-4 py-1">
              {type === "php" ? "PHP" : "React.js"}
            </Badge>
            Complete Feature List
          </DialogTitle>
          <DialogDescription>
            Explore all {userFeatures.length + adminFeatures.length} features included in this package
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-8">
            {/* User Panel Features */}
            <div className="space-y-4">
              <div className="sticky top-0 bg-background pb-2 border-b">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  User Panel Features ({userFeatures.length})
                </h3>
              </div>
              <div className="grid gap-3">
                {userFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="mt-0.5 p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admin Panel Features */}
            <div className="space-y-4">
              <div className="sticky top-0 bg-background pb-2 border-b">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Admin Panel Features ({adminFeatures.length})
                </h3>
              </div>
              <div className="grid gap-3">
                {adminFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="mt-0.5 p-1 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
