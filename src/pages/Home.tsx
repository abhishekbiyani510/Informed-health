import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import homepageImage from "../../public/Homepage-image.jpg";

const Home = () => {
  const benefits = [
    "Personalized Nutrition Plans",
    "Evidence-Based Approach",
    "Holistic Wellness Focus",
    "Ongoing Support & Guidance",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-background -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Transform Your Health with{" "}
                <span className="text-primary">Functional Nutrition</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover personalized wellness solutions tailored to your unique needs. 
                Let's work together to achieve optimal health through evidence-based nutrition.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="sm" className="group">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={homepageImage}
                  alt="Healthy food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                <p className="font-heading font-bold text-3xl">500+</p>
                <p className="text-sm">Happy Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Why Choose Functional Nutrition?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience a personalized approach to wellness that addresses the root causes of health concerns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <CheckCircle2 className="text-secondary mb-4" size={40} />
                  <h3 className="font-heading font-semibold text-lg mb-2">{benefit}</h3>
                  <p className="text-sm text-muted-foreground">
                    Tailored solutions designed specifically for your unique health journey
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent rounded-2xl p-12 text-center"
            >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Book a consultation today and take the first step towards optimal health
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
