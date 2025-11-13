import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, X } from "lucide-react";
import homepageImage from "../../public/facebook banner.png";
import seed from "../../public/seedling.png";
import stretch from "../../public/gymnastic.png";
import sunMoon from "../../public/day-and-night.png";
import lotus from "../../public/lotus.png";
import gutIcon from "../../public/stomach.png";

const scrollToId = (id: string, offset = 120) => {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const scrollTop = window.scrollY || window.pageYOffset;
  const target = Math.max(0, scrollTop + rect.top - offset);
  window.scrollTo({ top: target, behavior: "smooth" });
};

// Typewriter component: simple, lightweight, non-looping by default
const Typewriter = ({
  text,
  speed = 40, // ms per character
  delay = 200, // ms before starting
}: {
  text: string;
  speed?: number;
  delay?: number;
}) => {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let mounted = true;
    let i = 0;
    const start = window.setTimeout(function tick() {
      if (!mounted) return;
      if (i <= text.length) {
        setDisplay(text.slice(0, i));
        i++;
        window.setTimeout(tick, speed);
      }
    }, delay);
    return () => {
      mounted = false;
      clearTimeout(start);
    };
  }, [text, speed, delay]);
  return (
    <span>
      {display}
      <span className="ml-1 inline-block animate-pulse">|</span>
    </span>
  );
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const getRandomColor = (name: string) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
  ];
  const index = name.length % colors.length;
  return colors[index];
};

const Avatar = ({ name }: { name: string }) => {
  const initials = getInitials(name);
  const bgColor = getRandomColor(name);
  return (
    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor} text-white font-semibold text-lg`}>
      {initials}
    </div>
  );
};

// Modal component (same as Testimonials.tsx)
const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100">
              <X size={20} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Home = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<{
    id: number;
    content: string;
    rating: number;
    name: string;
    date: string;
  } | null>(null);

  const testimonialData = [
    {
      id: 1,
      content: "Within 3 months my bloating, acidity, and sugar spikes dropped. I finally feel light and in control again.",
      rating: 5,
      name: "Participant",
      date: "3 months ago",
    },
    {
      id: 2,
      content: "I'd tried everything for years. Madhavi's approach made me understand my body for the first time.",
      rating: 5,
      name: "Gut Reset Client",
      date: "a year ago",
    },
  ];

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const pillars = [
    {
      iconPath: gutIcon,
      title: "Gut Reset",
      text: "Restore digestion and microbiome to improve nutrient absorption and digestive comfort.",
    },
    {
      iconPath: seed,
      title: "Metabolic Nutrition",
      text: "Stabilise glucose and hormones with personalised, food-as-medicine strategies.",
    },
    {
      iconPath: stretch,
      title: "Movement",
      text: "Build strength and insulin sensitivity through gentle, consistent movement practices.",
    },
    {
      iconPath: sunMoon,
      title: "Rhythm & Recovery",
      text: "Align sleep and meals to your circadian rhythm to support repair and sustained energy.",
    },
    {
      iconPath: lotus,
      title: "Mind-Body Balance",
      text: "Cultivate emotional resilience and stress regulation for whole-system healing.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homepageImage})` }}
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="absolute top-0 right-4 md:top-8 md:right-8 bg-secondary/90 text-secondary-foreground p-3 md:p-6 rounded-xl shadow-lg backdrop-blur-sm transform -translate-y-1/2 md:translate-y-0">
            <p className="font-heading font-bold text-xl md:text-3xl">500+</p>
            <p className="text-xs md:text-sm">Happy Clients</p>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6 text-white shadow-black">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Rebuild Your Health from the Inside Out
              </h1>

              <div className="mt-4">
                <p className="font-heading font-semibold text-2xl text-white/90 tracking-wider">
                  Using
                </p>

                <p className="mt-3 font-heading font-bold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto" style={{ color: '#6cc52e' }}>
                  <Typewriter text="The Science of Nutrition and the Art of Mindful Living" speed={50} delay={120} />
                </p>
                </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg text-white/90 max-w-3xl mx-auto"
            >
              The perfect blend of Indian Nutritional Wisdom and Modern Nutrition Science <br /> using Food as Medicine and Lifestyle as Therapy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="flex justify-center gap-3"
            >
              <Button asChild size="sm" className="bg-secondary">
                <Link to="/contact">Get Started <ArrowRight className="ml-2" size={16} /></Link>
              </Button>

              <Button
                onClick={() => scrollToId("pillars")}
                size="sm"
                className="border border-white text-white hover:bg-white/10 px-4 py-2 rounded-lg"
                variant="ghost"
              >
                Discover the 5 Pillars →
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <Card className="p-8 bg-secondary/20">
              <div className="md:flex md:items-center md:gap-8">
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-5xl mb-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#444444'}}>Why This Matters</h2>
                  <p className="text-muted-foreground mt-4 text-[18px]">
                    Most people try to fix symptoms - acidity, bloating, high sugar, fatigue, acne, hair fall, excess weight - without asking why they began in the first place.
                  </p>
                  <p className="mt-2 text-muted-foreground text-[18px]">
                    True healing begins when you address the root cause: your gut, metabolism, and daily rhythm.
                  </p>
                  <p className="mt-2 text-muted-foreground text-[18px]">
                    My approach combines science, wisdom, and compassion to help you rebuild health naturally - without fads, fear, or restrictions.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 5 Pillars of Functional Healing */}
      <section id="pillars" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-8"
          >
            <h2 style={{ color: "#444444" }} className="font-heading font-bold text-5xl">
              5 Pillars of Functional Healing
            </h2>
            <p className="text-muted-foreground mt-3 text-1xl">
              True wellness isn’t built on quick fixes, but on five timeless foundations.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-5 gap-6"
            >
              {pillars.map((p, i) => {
                const initialProps =
                  i <= 1
                    ? { opacity: 0, x: -80 }
                    : i === 2
                    ? { opacity: 0, y: 8 }
                    : { opacity: 0, x: 80 };

                return (
                  <motion.div
                    key={p.title}
                    initial={initialProps}
                    whileInView={i === 2 ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                    className="flex-1"
                  >
                    <div className="flex flex-col items-center text-center p-6 rounded-lg">
                      <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <img src={p.iconPath} alt={p.title} className="w-12 h-12 object-contain" />
                      </div>
                      <h3 style={{ color: "#444444" }} className="font-heading font-semibold text-lg mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-[18rem]">{p.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* moved highlight line sits below the pillars */}
            {/* <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <Card className="p-4 bg-white/5 text-center">
                <p className="text-muted-foreground italic mb-0">
                  When your gut, food, movement, rhythm, and mind align - healing becomes effortless.
                </p>
              </Card>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Signature Program Snapshot */}
      {/* <section id="signature" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
            <h2 style={{ color: '#444444' }} className="font-heading font-bold text-3xl mb-4">The Complete Gut & Glucose Reset</h2>
            <p className="text-muted-foreground mb-6">
              A 6-Month Integrative Program designed to help you reverse chronic imbalances - from gut dysfunction to insulin resistance.
            </p>

            <Card className="p-6 mb-6">
              <div className="md:flex md:gap-6 items-center">
                <div className="flex-1">
                  <h3 style={{ color: '#444444' }} className="font-heading font-semibold text-xl mb-2">What you will gain</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li>Reset your gut and stabilise glucose naturally</li>
                    <li>Align your circadian rhythm for better sleep and energy</li>
                    <li>Build metabolic flexibility through food and movement</li>
                    <li>Unlearn diet culture and reconnect with your body’s natural signals</li>
                  </ul>
                </div>
                <div className="w-full md:w-64 mt-6 md:mt-0">
                  <img src={homepageImage} alt="Program Snapshot" className="rounded-lg w-full h-40 object-cover shadow" />
                </div>
              </div>
            </Card>

            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link to="/contact?program=complete-reset">Join the Program</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
            <h2 style={{ color: '#444444' }} className="font-heading font-bold text-5xl">Results & Testimonials</h2>
            <p className="text-muted-foreground mt-3 text-1xl">Real people. Real results. Root-cause healing in action.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {testimonialData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-2 italic">
                    "{truncateText(testimonial.content)}"
                    {testimonial.content.length > 150 && (
                      <button
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          setTimeout(() => setSelectedTestimonial(testimonial), 200);
                        }}
                        className="text-primary hover:underline ml-1 not-italic cursor-pointer"
                      >
                        Read more
                      </button>
                    )}
                  </p>

                  {/* Date */}
                  <p className="text-sm text-muted-foreground mb-6">{testimonial.date}</p>

                  {/* Author */}
                  <div className="flex items-center pt-6 border-t">
                    <Avatar name={testimonial.name} />
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for testimonial full review */}
      <Modal isOpen={!!selectedTestimonial} onClose={() => setSelectedTestimonial(null)}>
        {selectedTestimonial && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <Avatar name={selectedTestimonial.name} />
              <div>
                <h3 className="font-semibold text-lg">{selectedTestimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedTestimonial.date}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {Array.from({ length: selectedTestimonial.rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg italic text-muted-foreground">"{selectedTestimonial.content}"</p>
          </div>
        )}
      </Modal>

      {/* Why Work With Me */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-primary/6 to-accent/6">
              <h2 className="font-heading font-bold text-3xl mb-4" style={{ color: '#444444' }}>Why Work With Me</h2>
              <p className="text-muted-foreground mb-4">
                I’m Madhavi Sharma, a Functional Nutritionist specialising in Gut Health & Diabetes Reversal.
              </p>
              <p className="text-muted-foreground mb-4">
                My approach blends modern nutrition science with Indian wisdom - focusing on circadian rhythm, mindful eating, satiety signals, and unlearning diet culture.
              </p>
              <p className="text-muted-foreground mb-6">
                I help people rebuild health naturally through clarity, rhythm, and flow - not fear or restriction.
              </p>
              <div className="flex justify-center">
                <Button asChild size="sm">
                  <Link to="/about" onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50)}>Meet Madhavi →</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-accent rounded-2xl p-12 text-center">
            <h2 className="font-heading font-bold text-3xl mb-4">Ready to uncover your root cause and rebuild health from within?</h2>
            <p className="text-lg mb-6 opacity-90">Let’s co-create your path to medicine-free, stress-free living. Because your body isn’t broken - it’s waiting to be understood.</p>
            <Button asChild size="lg">
              <Link to="/contact">Book Your Free Discovery Call</Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">Healing doesn’t start with restriction - it starts with awareness.</p>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
