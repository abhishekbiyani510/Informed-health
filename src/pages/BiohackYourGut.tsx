import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Leaf, HeartPulse, Utensils, CalendarCheck2 } from "lucide-react";
import { Link } from "react-router-dom";

const gutBenefits = [
  {
    icon: Leaf,
    title: "Restore Gut Balance",
    desc: "Rebuild a healthy microbiome and improve digestion with targeted nutrition and lifestyle strategies.",
  },
  {
    icon: HeartPulse,
    title: "Boost Immunity",
    desc: "Strengthen your immune system by supporting your gut, the foundation of overall health.",
  },
  {
    icon: Utensils,
    title: "Personalized Meal Plans",
    desc: "Enjoy delicious, gut-friendly recipes tailored to your needs and preferences.",
  },
  {
    icon: CalendarCheck2,
    title: "Weekly Guidance",
    desc: "Stay on track with weekly check-ins, progress tracking, and expert support.",
  },
];

const gutProgrammeFeatures = [
  "Comprehensive gut health assessment",
  "Personalized nutrition & supplement plan",
  "Weekly progress reviews",
  "Gut-healing recipes & resources",
  "Lifestyle & stress management coaching",
  "Direct access to your nutritionist",
];

const BiohackYourGut = () => (
  <div className="min-h-screen bg-muted">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-4xl md:text-5xl mb-4 text-primary"
          >
            Biohack Your Gut
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl"
          >
            A 12-week intensive programme to heal your gut, improve digestion, and transform your wellbeing from the inside out.
          </motion.p>
          <Button asChild size="lg" className="font-semibold">
            <Link to="/contact?service=biohack-your-gut">Join the Programme</Link>
          </Button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80"
            alt="Gut Health"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center"
        >
          Why Biohack Your Gut?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gutBenefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <benefit.icon className="text-primary mb-4" size={40} />
                <h3 className="font-heading font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Programme Features */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center"
        >
          What’s Included in the 12-Week Programme?
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <ul className="space-y-4">
              {gutProgrammeFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center text-lg">
                  <CheckCircle2 className="text-primary mr-3" size={22} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild size="lg" className="font-semibold">
            <Link to="/contact?service=biohack-your-gut">Book Your Spot</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent rounded-2xl p-12 text-center"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Heal Your Gut?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book a discovery call to see if this programme is right for you.
          </p>
          <Button asChild size="lg">
            <Link to="/contact?service=biohack-your-gut">Schedule Discovery Call</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </div>
);

export default BiohackYourGut;
