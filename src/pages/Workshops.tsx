import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { workshops } from "@/data/mockData";
import { Calendar, Clock, Users, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import wellness from '@/assets/welcome.jpg';

const Workshops = () => {
  const { toast } = useToast();

  const handlePayNow = (workshopTitle: string) => {
    toast({
      title: "Payment Processing",
      description: `Redirecting to payment gateway for ${workshopTitle}...`,
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 style={{ fontFamily: 'Inter, sans-serif', color: '#444444', fontWeight: "bold" }} className="font-heading font-semibold text-[50px] md:text-[50px] mb-2 tracking-tight">Upcoming Workshops</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our interactive workshops to deepen your understanding of
            functional nutrition and practical wellness strategies
          </p>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => {
            const spotsLeft = workshop.capacity - workshop.enrolled;
            const isAlmostFull = spotsLeft <= 5;

            return (
              <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              >
              <Card className="overflow-hidden h-[500px] w-[500px] flex flex-col hover:shadow-xl transition-shadow mx-auto">
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {isAlmostFull && (
                  <Badge className="absolute top-4 right-4 bg-secondary">
                  Only {spotsLeft} spots left!
                  </Badge>
                )}
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-lg mb-2">{workshop.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 flex-1">{workshop.description}</p>

                {/* Details */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar size={16} className="mr-2 text-primary" />
                  <span>{new Date(workshop.date).toLocaleDateString('en-IN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                  <Clock size={16} className="mr-2 text-primary" />
                  <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                  <Users size={16} className="mr-2 text-primary" />
                  <span>{workshop.enrolled} / {workshop.capacity} enrolled</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center">
                  <IndianRupee size={20} className="text-primary" />
                  <span className="font-heading font-bold text-xl">{workshop.price}</span>
                  </div>
                  <Button 
                  onClick={() => handlePayNow(workshop.title)}
                  disabled={spotsLeft === 0}
                  >
                  {spotsLeft === 0 ? 'Sold Out' : 'Pay Now'}
                  </Button>
                </div>
                </div>
              </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Wellness & Corporate Workshops Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto my-16"
        >
          <Card className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-heading font-bold text-2xl mb-2 text-secondary">
                Wellness & Corporate Workshops
              </h2>
              <p className="text-muted-foreground mb-4">
                Elevate your team’s wellbeing and productivity with our customized wellness and corporate nutrition workshops. 
                <br />
                <span className="font-semibold text-secondary">Interactive, evidence-based, and tailored for your organization’s unique needs.</span>
                <br />
                Topics include stress management, healthy eating at work, energy optimization, and more. Available for both in-person and virtual formats.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="text-white font-semibold shadow-md hover:scale-105 transition-transform"
              >
                <a href="/contact?type=corporate" target="_blank" rel="noopener noreferrer">
                  Enquire for Corporate Wellness
                </a>
              </Button>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <img
                src={wellness}
                alt="Corporate Wellness"
                className="rounded-xl shadow-lg w-50% h-80 object-cover"
              />
            </div>
          </Card>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-muted rounded-2xl p-8"
        >
          <h2 className="font-heading font-bold text-2xl mb-4">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Interactive Learning</h3>
              <p className="text-sm text-muted-foreground">
                Engage with content through hands-on activities and group discussions
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Practical Resources</h3>
              <p className="text-sm text-muted-foreground">
                Take home actionable guides, meal plans, and recipe collections
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Direct access to ask questions and get personalized insights
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Workshops;
