import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Heart, Users, CheckCircle2, Briefcase, MessageSquare } from "lucide-react";

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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 style={{ fontFamily: 'Poppins, sans-serif', color: '#444444' }} className="font-heading font-semibold text-4xl md:text-4xl mb-2 tracking-tight">About Madhavi K. Sharma</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Functional Nutritionist | Founder, Informed Health <br />Specialising in Functional Healing, Metabolic Health & Preventive Nutrition
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
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
            className="space-y-6 h-full flex flex-col justify-center"
          >
            <h2 className="font-heading font-bold text-3xl" style={{ color:"#444444" }}>Meet Madhavi Sharma</h2>
            <div className="prose prose-lg">
              <p className="text-muted-foreground pb-3">
                Madhavi Sharma is a Functional Nutritionist and the Founder of Informed Health, with a 5-year educational qualification in Nutrition from Delhi University and over 20 years of international experience in the field of integrative health and lifestyle medicine.
              </p>
              <p className="text-muted-foreground pb-3">
                Her continuing education includes advanced training at the Centre for Diabetes and Endocrinology, South Africa, and accreditation by the International Diabetes Federation (Belgium) — strengthening her expertise in metabolic health, endocrinology, and chronic disease management.
              </p>
              <p className="text-muted-foreground pb-3">
                With deep roots in both Modern Nutrition Science and Traditional Indian Food Wisdom, Madhavi blends evidence-based functional nutrition with practical lifestyle therapies to create holistic, sustainable transformations.
              </p>
              <p className="text-muted-foreground pb-3">
                She has worked with a diverse global clientele — from professionals and families to public figures, including Sir Seretse Khama, the President of Botswana.
              </p>
              <p className="text-muted-foreground pb-3">
                Madhavi’s approach goes beyond conventional diet plans. Her philosophy focuses on restoring balance through food, movement, rhythm, and mindfulness — helping individuals reconnect with their body’s innate intelligence and achieve lasting well-being across physical, mental, and emotional dimensions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* New Sections: Her Approach, Her Work, Her Philosophy */}
        <section className="space-y-12 mb-16">
          {/* Her Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl"
          >
            <Card className="p-8 bg-gradient-to-r from-primary/6 to-accent/6">
              <div className="md:flex md:items-start md:gap-8">
                <div className="flex-shrink-0 mb-6 md:mb-0">
                  <CheckCircle2 className="text-primary" size={48} />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-2xl mb-3">Her Approach</h2>
                  <p className="text-muted-foreground mb-4">
                    Madhavi’s work is anchored in the principle of root-cause healing — addressing underlying imbalances rather than managing surface-level symptoms. Her functional framework integrates:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <p className="font-semibold">Food as Medicine</p>
                      <p className="text-sm text-muted-foreground">Using nutrition to correct metabolism, hormones, and inflammation.</p>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold">Movement & Strength</p>
                      <p className="text-sm text-muted-foreground">Building flexibility, insulin sensitivity, and energy balance.</p>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold">Circadian & Lifestyle Alignment</p>
                      <p className="text-sm text-muted-foreground">Syncing meals, rest, and sleep with natural body rhythms.</p>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold">Mind-Body Connection</p>
                      <p className="text-sm text-muted-foreground">Cultivating emotional balance and resilience through mindfulness.</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-muted-foreground">
                    This multi-dimensional approach helps clients reverse chronic conditions, rebuild metabolic health, and experience deep, lasting vitality.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Her Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-5xl"
          >
            <Card className="p-8">
              <div className="md:flex md:items-center md:gap-8">
                <div className="flex-shrink-0 mb-6 md:mb-0">
                  <Briefcase className="text-primary" size={48} />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-2xl mb-3">Her Work</h2>
                  <p className="text-muted-foreground mb-4">
                    Madhavi’s work spans across multiple dimensions of health education and wellness, combining scientific rigour with practical strategies.
                  </p>

                  <ul className="list-none space-y-3 text-sm text-muted-foreground">
                    <li>
                      <span className="font-semibold">Media & Education:</span> On-panel Nutritionist at DD National; articles in The Times of India, The Indian Express and others.
                    </li>
                    <li>
                      <span className="font-semibold">Corporate Wellness:</span> Speaker and advisor for organisations including GRID India, Aditya Birla Group, OLX and HMD.
                    </li>
                    <li>
                      <span className="font-semibold">Projects & Partnerships:</span> Health projects for Heart Foundation Botswana, Zomato Healthy and international initiatives.
                    </li>
                    <li>
                      <span className="font-semibold">Digital Outreach:</span> Informed Health YouTube channel offering evidence-based insights on nutrition, hormones and metabolic healing.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Her Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-5xl"
          >
            <Card className="p-8 bg-gradient-to-r from-accent/6 to-primary/6">
              <div className="md:flex md:items-start md:gap-8">
                <div className="flex-shrink-0 mb-6 md:mb-0">
                  <MessageSquare className="text-primary" size={48} />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-2xl mb-3">Her Philosophy</h2>

                  <p className="text-muted-foreground mb-3">
                    Madhavi believes that true health is an inside-out job.
                  </p>

                  <p className="text-muted-foreground mb-3">
                    When you begin to nourish and secure the body from within — balance your hormones, restore your metabolism, and calm your nervous system — healing naturally begins to reflect on the outside too.
                  </p>

                  <p className="text-muted-foreground mb-3">
                    She emphasizes that the body has an innate ability to heal itself; our only role is to provide it with the right environment — time, nutrients, rhythm, and mental peace — so it can realign and thrive.
                  </p>

                  <p className="text-muted-foreground mb-3">
                    Her integrative philosophy is a fusion of Indian Nutritional Wisdom and Modern Nutrition Science, helping people unlearn diet myths, simplify nutrition, and restore harmony between body and mind.
                  </p>

                  <p className="text-muted-foreground mb-3">
                    She often says,
                  </p>

                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">
                    “When you understand your body, you no longer need to fight it.”
                  </blockquote>

                  <p className="text-sm text-muted-foreground">
                    At Informed Health, her goal is to help individuals become self-aware, informed, and confident about their health choices. Every plan she designs is Simple, Sensible, and Sustainable — created to fit real lives and enable long-term healing.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Values Section - Reinserted
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
        </motion.div> */}
      </div>
    </div>
  );
};

export default About;
