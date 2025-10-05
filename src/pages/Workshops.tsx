import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { workshops } from "@/data/mockData";
import { Calendar, Clock, Users, IndianRupee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Workshops = () => {
  const { toast } = useToast();

  const handlePayNow = (workshopTitle: string) => {
    toast({
      title: "Payment Processing",
      description: `Redirecting to payment gateway for ${workshopTitle}...`,
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Upcoming Workshops</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our interactive workshops to deepen your understanding of functional nutrition and practical wellness strategies
          </p>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {isAlmostFull && (
                      <Badge className="absolute top-4 right-4 bg-destructive">
                        Only {spotsLeft} spots left!
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-heading font-bold text-xl mb-3">{workshop.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{workshop.description}</p>

                    {/* Details */}
                    <div className="space-y-2 mb-6">
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
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center">
                        <IndianRupee size={20} className="text-primary" />
                        <span className="font-heading font-bold text-2xl">{workshop.price}</span>
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
