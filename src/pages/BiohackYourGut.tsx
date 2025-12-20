import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GutResetImage from "@/assets/gut-reset.jpg";

const BiohackYourGut = () => {
  const programmeSteps = [
    "Study your Blood Reports",
    "Review your Current Lifestyle from Perspective of Gut Health",
    "Understand the Physiological Mechanisms of a strong Gut & its Functioning",
    "Discuss Strategies of Weeding, Seeding & Feeding",
    "Plan a Customized Diet Plan",
    "Design a Weekly Workout",
    "Define Metabolic Health Parameters to track Progress",
  ];

  const programmeFeatures = [
    "Blood Report Analysis",
    "Goal Setting",
    "Root Cause Analysis",
    "Customized Meal Plan",
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[60vh] sm:h-[70vh] flex items-center overflow-hidden">
        <img
          src={GutResetImage}
          alt="Healthy Diet"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Gut Reset Blueprint
              </h1>

              <div className="mt-3">
                <p className="font-heading font-semibold text-lg sm:text-xl text-white/90">
                  Reclaim Your Health with a
                </p>

                <p className="mt-2 font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto" style={{ color: '#6cc52e', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
                  Holistic Gut Reset Approach
                </p>
              </div>

              <p className="mt-12 text-lg sm:text-xl text-primary bg-white/90 inline-block px-4 py-2 rounded-sm">
                12 Weeks Programme
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-center" style={{ fontFamily: 'Inter, sans-serif', color: "#444444" }}
        >
          What is the Gut Reset Blueprint?
        </motion.h2>

        <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            This 12 week program offers a comprehensive and personalized blueprint for resetting your gut, the epicenter of your entire well-being. Rooted in the integrative power of the five pillars of health—Nutrition, Exercise, Sleep, Gut Health, and Emotional Stability—this approach goes beyond quick fixes to address the root causes of imbalances. By focusing on restoring gut health, we unlock the key to improving digestion, boosting energy, enhancing immunity, and achieving holistic wellness, empowering you to thrive in every aspect of your life.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            The Biohack Your Gut program goes beyond superficial quick fixes and symptomatic relief. This transformative journey empowers you with the 5R Strategy—a proven framework grounded in both traditional wisdom and cutting-edge science. You'll learn to identify your unique triggers, heal your gut, and unlock true, lasting health. This sustainable approach not only frees you from recurring symptoms but also 10X's your energy, immunity, and overall well-being, giving you the clarity and tools to take charge of your health for life.
          </motion.p>
        </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-center" style={{ color: "#444444", fontFamily: 'Inter, sans-serif' }}>
              In this Programme we will:
            </h2>

            <div className="space-y-4 mb-12">
              {programmeSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute left-6 top-12 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" style={{ display: idx === programmeSteps.length - 1 ? 'none' : 'block' }} />
                
                <div className="flex gap-6 items-start">
                <div className="relative flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="font-heading font-bold text-white">{idx + 1}</span>
                  </div>
                </div>
                
                <div className="flex-1 pt-1">
                  <div className="bg-white p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group-hover:shadow-lg">
                  <p className="text-base font-medium text-gray-700">{step}</p>
                  </div>
                </div>
                </div>
              </motion.div>
              ))}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <p className="text-muted-foreground text-lg font-semibold mb-2" style={{fontFamily: "Inter, sans-serif"}}>
                There will be weekly follow up sessions (30 mins) for the duration of the programme
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programme Features */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-center" style={{ color: "#444444", fontFamily: 'Inter, sans-serif' }}>
              What You Get
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programmeFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 border-l-4 border-primary p-6 rounded-lg text-center hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-heading font-semibold text-base" style={{ color: "#444444" }}>
                    {feature}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6" style={{ color: "#444444", fontFamily: 'Inter, sans-serif' }}>
              Ready to Reset Your Gut?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Take the first step towards lasting health with our comprehensive 12-week Gut Reset Blueprint programme.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white shadow-md text-[20px]">
              <Link to="/contact?service=gut-reset" className="flex items-center justify-center gap-2">
                Register Now <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BiohackYourGut;
