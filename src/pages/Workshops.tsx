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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
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
              className="w-full"
              >
              <Card className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow h-ful">
                {/* Image */}
                <div className="aspect-video relative overflow-hidden w-full">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                {isAlmostFull && (
                  <Badge className="absolute top-4 right-4 bg-secondary">
                  Only {spotsLeft} spots left!
                  </Badge>
                )}
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-base md:text-lg mb-2">{workshop.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 flex-1">{workshop.description}</p>

                {/* Details */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <Calendar size={14} className="mr-2 text-primary flex-shrink-0" />
                  <span>{new Date(workshop.date).toLocaleDateString('en-IN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  </div>
                  <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <Clock size={14} className="mr-2 text-primary flex-shrink-0" />
                  <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <Users size={14} className="mr-2 text-primary flex-shrink-0" />
                  <span>{workshop.enrolled} / {workshop.capacity} enrolled</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-2 border-t gap-2">
                  <div className="flex items-center">
                  <IndianRupee size={16} className="text-primary flex-shrink-0" />
                  <span className="font-heading font-bold text-lg md:text-xl">{workshop.price}</span>
                  </div>
                  <Button 
                  onClick={() => handlePayNow(workshop.title)}
                  disabled={spotsLeft === 0}
                  size="sm"
                  className="whitespace-nowrap"
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

        {/* Wellness & Corporate Workshops Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto my-16 relative rounded-2xl overflow-hidden"
        >
          {/* Image */}
          <div className="relative">
            <img
              src={wellness}
              alt="Corporate Wellness"
              className="w-full h-[500px] object-cover rounded-2xl"
              loading="lazy"
              decoding="async"
             />
            <div className="absolute inset-0 bg-black/10 rounded-t-2xl" />
          </div>

          {/* Content */}
          <div className="bg-white p-8 rounded-b-2xl">
            <div className="text-center">
              <h2 className="font-heading font-bold text-3xl mb-4 text-secondary">
                Wellness & Corporate Workshops
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Elevate your team’s wellbeing and productivity with our customized wellness and corporate nutrition workshops.
              </p>
            </div>

            <div className="text-center mt-8">
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
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted rounded-2xl p-8 mt-[-20px]"
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
