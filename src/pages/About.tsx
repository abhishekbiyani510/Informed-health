import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every client receives personalized attention and support throughout their wellness journey",
    },
    {
      icon: BookOpen,
      title: "Evidence-Based",
      description: "All recommendations are grounded in the latest nutritional science and research",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Certified and continuously learning to provide the best possible care",
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Your goals, preferences, and lifestyle are at the heart of every plan",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">About Madhavi K. Sharma</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certified Functional Nutritionist dedicated to transforming lives through personalized nutrition
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="../../public/About-image.jpg"
                alt="Madhavi K. Sharma"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-heading font-bold text-3xl">My Journey</h2>
            <div className="prose prose-lg">
              <p className="text-muted-foreground">
                With over 10 years of experience in functional nutrition, I've dedicated my career to helping individuals achieve optimal health through personalized, evidence-based nutritional interventions.
              </p>
              <p className="text-muted-foreground">
                My approach combines the latest scientific research with traditional wisdom, focusing on treating the root causes of health issues rather than just addressing symptoms.
              </p>
              <p className="text-muted-foreground">
                I believe that everyone deserves access to personalized nutrition guidance that fits their unique lifestyle, preferences, and health goals.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-semibold text-xl">Certifications & Education</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span className="text-muted-foreground">Certified Functional Nutritionist (CFN)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span className="text-muted-foreground">Master's in Clinical Nutrition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span className="text-muted-foreground">Certified Gut Health Specialist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span className="text-muted-foreground">Hormone Health Certification</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading font-bold text-3xl text-center mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <value.icon className="text-primary mb-4" size={40} />
                  <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
