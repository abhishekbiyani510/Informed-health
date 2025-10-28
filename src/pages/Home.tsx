import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import homepageImage from "../../public/Homepage-image.jpg";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  const titles = [
    {
      main: "Transform Your Health with",
      highlight: "Functional Nutrition",
    },
    {
      main: "Your Journey to",
      highlight: "Wellness Begins Here",
    },
    {
      main: "Helping You Choose Informed Health",
      highlight: "The Science of Nutrition & The Art of Mindful Living",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const benefits = [
    "Personalized Nutrition Plans",
    "Evidence-Based Approach",
    "Holistic Wellness Focus",
    "Ongoing Support & Guidance",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${homepageImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="absolute top-0 right-4 md:top-8 md:right-8 bg-secondary/90 text-secondary-foreground p-3 md:p-6 rounded-xl shadow-lg backdrop-blur-sm transform -translate-y-1/2 md:translate-y-0">
            <p className="font-heading font-bold text-xl md:text-3xl">500+</p>
            <p className="text-xs md:text-sm">Happy Clients</p>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 pt-16 md:pt-0">
            <div className="h-[160px] flex items-center justify-center text-center">
							<AnimatePresence mode="wait">
								<motion.div
								key={currentTitle}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5 }}
								className="text-center"
								>
								{titles[currentTitle].main === "Helping You Choose Informed Health" ? (
									<div className="space-y-2">
									{/* Line 1 */}
									<motion.p
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.1 }}
										className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
									>
										Helping You Choose
									</motion.p>

									{/* Line 2 */}
									<motion.p
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: 0.3 }}
										className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-primary tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
									>
										INFORMED HEALTH
									</motion.p>

									{/* Line 3 */}
									<motion.p
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.5 }}
										className="font-heading font-semibold text-sm md:text-base lg:text-lg text-white/80 italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
									>
										The Science of Nutrition & The Art of Mindful Living
									</motion.p>
									</div>
								) : (
									<h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
									{titles[currentTitle].main}{" "}
									<span className="text-primary block mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
										{titles[currentTitle].highlight}
									</span>
									</h1>
								)}
								</motion.div>
							</AnimatePresence>
						</div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              <p className="text-base md:text-lg text-white/90 px-4 md:px-0">
                Discover personalized wellness solutions tailored to your unique
                needs. Let's work together to achieve optimal health through
                evidence-based nutrition.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                <Button
                  asChild
                  size="sm"
                  className="group bg-secondary hover:bg-secondary/100"
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="bg-secondary hover:bg-secondary/100"
                >
                  <Link to="/services">Learn More</Link>
                </Button>
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
              Experience a personalized approach to wellness that addresses the
              root causes of health concerns
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
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {benefit}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tailored solutions designed specifically for your unique health
                    journey
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
              Book a consultation today and take the first step towards optimal
              health
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
