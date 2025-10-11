import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "@/data/mockData";
import { User, Heart, Activity, Briefcase } from "lucide-react";

const iconMap = {
  user: User,
  heart: Heart,
  activity: Activity,
  briefcase: Briefcase,
};

const Services = () => {
  // Only take first 3 services
  const displayedServices = services.slice(0, 3);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 style={{ fontFamily: 'Poppins, sans-serif', color: '#444444' }} className="font-heading font-semibold text-4xl md:text-4xl mb-2 tracking-tight">
            Comprehensive Wellness Programs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our specialized nutrition programs designed to meet your health goals
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displayedServices.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm uppercase text-muted-foreground">Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-secondary mr-2 mt-1">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full">
                    <Link to="/contact">Book Consultation</Link>
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent rounded-2xl p-12 text-center"
        >
          <h2 className="font-heading font-bold text-3xl mb-4">Not Sure Which Service is Right for You?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a complimentary discovery call to discuss your health goals and find the perfect program
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Schedule Free Discovery Call</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
