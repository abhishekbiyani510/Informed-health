import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Heart, Users, CheckCircle2, Briefcase, MessageSquare } from "lucide-react";

// BlurImage component for optimized loading
const BlurImage = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`
          absolute inset-0 
          ${isLoading ? "animate-pulse bg-muted" : "opacity-0"}
          transition-opacity duration-300
        `}
      />
      {currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          className={`
            w-full h-full object-cover
            ${isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"}
            transition-all duration-300
          `}
        />
      )}
    </div>
  );
};

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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 style={{ fontFamily: 'Poppins, sans-serif', color: '#444444' }} className="font-heading font-semibold text-[50px] md:text-[50px] mb-2 tracking-tight">About Madhavi K. Sharma</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Functional Nutritionist | Founder, Informed Health <br />Specialising in Functional Healing, Metabolic Health & Preventive Nutrition
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="aspect-[6/5] rounded-2xl overflow-hidden shadow-xl">
              <BlurImage
                src="../../public/madhavi.jpg"
                alt="Madhavi K. Sharma"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 h-full flex flex-col justify-center"
          >
            <h2 className="font-heading font-bold text-4xl" style={{ color:"#6cc52e" }}>Meet Madhavi Sharma</h2>
            <div className="prose prose-lg">
              <p className="text-muted-foreground pb-3 text-[18px]">
                Madhavi Sharma is a Functional Nutritionist and the Founder of Informed Health, with a 5-year educational qualification in Nutrition from Delhi University and over 20 years of international experience in the field of integrative health and lifestyle medicine.
              </p>
              <p className="text-muted-foreground pb-3 text-[18px]">
                Her continuing education includes advanced training at the Centre for Diabetes and Endocrinology, South Africa, and accreditation by the International Diabetes Federation (Belgium) — strengthening her expertise in metabolic health, endocrinology, and chronic disease management.
              </p>
              <p className="text-muted-foreground pb-3 text-[18px]">
                With deep roots in both Modern Nutrition Science and Traditional Indian Food Wisdom, Madhavi blends evidence-based functional nutrition with practical lifestyle therapies to create holistic, sustainable transformations.
              </p>
              <p className="text-muted-foreground pb-3 text-[18px]">
                She has worked with a diverse global clientele — from professionals and families to public figures, including Sir Seretse Khama, the President of Botswana.
              </p>
              <p className="text-muted-foreground pb-3 text-[18px]">
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
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl text-center"
          >
            <div>
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="text-primary" size={48} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-3xl mb-4" style={{ color: "#444444" }}>Her Approach</h2>
                 <p className="text-muted-foreground mb-8 text-[18px]">
                   Madhavi's work is anchored in the principle of root-cause healing — addressing underlying imbalances rather than managing surface-level symptoms. Her functional framework integrates:
                 </p>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                      {
                        title: "Food as Medicine",
                        desc: "Using nutrition to correct metabolism, hormones, and inflammation.",
                        bg: "from-primary/10 to-primary/5",
                        border: "border-l-4 border-primary",
                      },
                      {
                        title: "Movement & Strength",
                        desc: "Building flexibility, insulin sensitivity, and energy balance.",
                        bg: "from-secondary/10 to-secondary/5",
                        border: "border-l-4 border-secondary",
                      },
                      {
                        title: "Circadian & Lifestyle Alignment",
                        desc: "Syncing meals, rest, and sleep with natural body rhythms.",
                        bg: "from-primary/10 to-primary/5",
                        border: "border-l-4 border-primary",
                      },
                      {
                        title: "Mind-Body Connection",
                        desc: "Cultivating emotional balance and resilience through mindfulness.",
                        bg: "from-secondary/10 to-secondary/5",
                        border: "border-l-4 border-secondary",
                      },
                    ].map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-br ${point.bg} ${point.border} p-5 rounded-lg text-left hover:shadow-md transition-shadow`}
                      >
                        <h4 className="font-semibold text-base mb-2" style={{ color: "#444444" }}>
                          {point.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                 <p className="text-[16px] text-muted-foreground">
                   This multi-dimensional approach helps clients reverse chronic conditions, rebuild metabolic health, and experience deep, lasting vitality.
                 </p>
              </div>
            </div>
           </motion.div>

           {/* Her Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="mx-auto max-w-8xl text-center relative rounded-2xl overflow-hidden mb-16"
            >
              <div className="absolute inset-0">
                <BlurImage
                  src="/wellness talk.jpg"
                  alt="Wellness Session"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              <div className="relative z-10 py-16 px-6 md:px-12">
                <div className="flex justify-center mb-6">
                  <Briefcase className="text-white" size={48} />
                </div>
                <h2 className="font-heading font-bold text-3xl mb-4 text-white" style={{ color: "#ffffff" }}>
                  Her Work
                </h2>
                <p className="text-white/90 mb-8 text-[18px] max-w-4xl mx-auto">
                  Madhavi's work spans across multiple dimensions of health education and wellness, combining scientific rigour with practical strategies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {[
                    {
                      title: "Media & Education",
                      content: "On-panel Nutritionist at DD National; articles in The Times of India, The Indian Express and others.",
                    },
                    {
                      title: "Corporate Wellness",
                      content: "Speaker and advisor for organisations including GRID India, Aditya Birla Group, OLX and HMD.",
                    },
                    {
                      title: "Projects & Partnerships",
                      content: "Health projects for Heart Foundation Botswana, Zomato Healthy and international initiatives.",
                    },
                    {
                      title: "Digital Outreach",
                      content: "Informed Health YouTube channel offering evidence-based insights on nutrition, hormones and metabolic healing.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-left hover:bg-white/20 transition-all"
                    >
                      <h4 className="font-semibold text-secondary text-lg mb-2">{item.title}:</h4>
                      <p className="text-white/90 text-base leading-relaxed">{item.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

           {/* Her Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto max-w-6xl text-center"
            >
              <div>
                <div className="flex justify-center mb-6">
                  <MessageSquare className="text-primary" size={48} />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-3xl mb-4" style={{ color: "#444444" }}>Her Philosophy</h2>
                  <p className="text-muted-foreground mb-8 text-[18px] max-w-4xl mx-auto">
                    True health is an inside-out process — nourish the body with the right food, rhythm, and mindfulness, and it naturally restores balance.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
                    {[
                      {
                        title: "Root-Cause Healing",
                        desc: "Address underlying imbalances, not just surface symptoms.",
                      },
                      {
                        title: "Body’s Innate Intelligence",
                        desc: "The body knows how to heal when given the right environment.",
                      },
                      {
                        title: "Simple & Sustainable",
                        desc: "Plans that fit real lives — no extreme diets or complexity.",
                      },
                      {
                        title: "Wisdom Meets Science",
                        desc: "Blending Indian food traditions with modern nutrition research.",
                      },
                    ].map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-br ${
                          idx % 2 === 0
                            ? "from-primary/10 to-primary/5 border-l-4 border-primary"
                            : "from-secondary/10 to-secondary/5 border-l-4 border-secondary"
                        } p-5 rounded-lg text-left hover:shadow-md transition-shadow`}
                      >
                        <h4 className="font-semibold text-base mb-2" style={{ color: "#444444" }}>
                          {point.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground max-w-3xl mx-auto text-[18px] font-medium">
                    "When you understand your body, you no longer need to fight it."
                  </blockquote>
                </div>
              </div>
            </motion.div>
         </section>

        {/* Clients Section - Local Logo Assets */}
        <section className="mb-16 py-12 bg-gradient-to-r from-primary/20 via-accent/5 to-primary/20 rounded-2xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12 px-4"
          >
            <h2 className="font-heading font-bold text-4xl mb-4" style={{ color: "#444444" }}>Trusted by Leading Brands</h2>
            <p className="text-muted-foreground text-lg">Working with organizations committed to wellness and health</p>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                { name: "OLX", logo: "/logos/olx.png" },
                { name: "Zomato", logo: "/logos/zomato.png" },
                { name: "Doordarshan", logo: "/logos/durdarshan.png" },
                { name: "TOI", logo: "/logos/toi.png" },
                { name: "The Hindu", logo: "/logos/the-hindu.png" },
                { name: "BlogChatter", logo: "/logos/blogchatter.jpg" },
                { name: "Aditya Birla Group", logo: "/logos/aditya-birla.png" },
                { name: "HT", logo: "/logos/ht.png" },
                { name: "Happy Moms & Kids", logo: "/logos/happy-moms-kids.jpg" },
                { name: "Millennium Post", logo: "/logos/millennium-post.png" },
                { name: "ITC", logo: "/logos/itc.png" },
                { name: "Mind Vriksha", logo: "/logos/mind-vriksha.png" },
                { name: "HMD", logo: "/logos/hmd.png" },
                { name: "Doordarshan Kisan", logo: "/logos/ddkisan.png" },
                { name: "Heart Foundation Botswana", logo: "/logos/heart-foundation-botswana.jpeg" },
              ].map((brand, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{duration: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-28 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-3"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9IiNmMGYwZjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0cHgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkxvZ28gTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg==";
                    }}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
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
