import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { AlertCircle } from "lucide-react";

const Grievance = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookingRef: "",
    grievanceType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Grievance Submitted",
      description: "We've received your grievance and will respond within 48 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      bookingRef: "",
      grievanceType: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <AlertCircle className="text-primary" size={40} />
            <h1 className="font-heading font-bold text-4xl md:text-5xl">Grievance Portal</h1>
          </div>

          <Card className="p-8 mb-8">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground">
                We are committed to providing excellent service to all our clients. If you have experienced any issues 
                or concerns regarding our services, please use this portal to submit your grievance. We take all 
                complaints seriously and will investigate and respond within 48 hours.
              </p>

              <h2 className="font-heading font-bold text-xl mt-6 mb-3">When to Use This Portal</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Service quality concerns</li>
                <li>Billing or payment disputes</li>
                <li>Appointment or scheduling issues</li>
                <li>Privacy or confidentiality concerns</li>
                <li>Any other service-related complaints</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 88265 04708"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="bookingRef">Booking Reference (if applicable)</Label>
                  <Input
                    id="bookingRef"
                    value={formData.bookingRef}
                    onChange={(e) => setFormData({ ...formData, bookingRef: e.target.value })}
                    placeholder="e.g., BK12345"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="grievanceType">Type of Grievance *</Label>
                <Input
                  id="grievanceType"
                  value={formData.grievanceType}
                  onChange={(e) => setFormData({ ...formData, grievanceType: e.target.value })}
                  placeholder="e.g., Service quality, Billing issue"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Please provide a detailed description of your grievance, including dates, times, and any relevant information..."
                  rows={8}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Grievance
              </Button>
            </form>
          </Card>

          <Card className="p-6 bg-muted">
            <h3 className="font-heading font-bold text-lg mb-4">Resolution Process</h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex">
                <span className="font-bold mr-2">1.</span>
                <span>Your grievance will be acknowledged within 24 hours</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">2.</span>
                <span>We will investigate the matter thoroughly</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">3.</span>
                <span>You will receive a detailed response within 48 hours</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">4.</span>
                <span>If needed, we will schedule a call to discuss resolution options</span>
              </li>
            </ol>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Grievance;
