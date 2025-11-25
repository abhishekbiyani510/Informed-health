import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, X } from "lucide-react";
import homepageImage from "/facebook banner.png";
import seed from "/seedling.png";
import stretch from "/gymnastic.png";
import sunMoon from "/day-and-night.png";
import lotus from "/lotus.png";
import gutIcon from "/stomach.png";
import madhavi from "@/assets/madhavi2.jpeg";

const scrollToId = (id: string, offset = 120) => {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const scrollTop = window.scrollY || window.pageYOffset;
  const target = Math.max(0, scrollTop + rect.top - offset);
  window.scrollTo({ top: target, behavior: "smooth" });
};

const Typewriter = ({
  text,
  speed = 40,
  delay = 200,
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

  const isComplete = display.length === text.length;

  return (
    <span className="break-words">
      {display}
      {!isComplete && <span className="ml-1 inline-block animate-pulse">|</span>}
    </span>
  );
};

const getInitials = (name: string) => {
  if (!name || typeof name !== "string") return "U";
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
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
  const index = (name?.length || 0) % colors.length;
  return colors[index];
};

const Avatar = ({ name }: { name: string }) => {
  const initials = getInitials(name);
  const bgColor = getRandomColor(name);
  return (
    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${bgColor} text-white font-semibold text-sm sm:text-lg`}>
      {initials}
    </div>
  );
};

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
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl p-4 sm:p-6 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100" aria-label="Close modal">
              <X size={18} />
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
    if (!text) return "";
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
    <div className="min-h-screen bg-white text-slate-800">
      <section className="relative min-h-[70vh] sm:min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homepageImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="hidden lg:block absolute top-6 right-6 bg-secondary/90 text-secondary-foreground p-3 lg:p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="font-heading font-bold text-xl md:text-2xl">500+</p>
            <p className="text-xs md:text-sm">Happy Clients</p>
          </div>

          <div className="max-w-3xl sm:max-w-4xl mx-auto text-center space-y-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight break-words">
                Rebuild Your Health from Inside Out
              </h1>

              <div className="mt-4">
                <p className="font-heading font-semibold text-lg sm:text-xl text-white/90 tracking-wider">
                  Using
                </p>

                <p className="mt-3 font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto" style={{ color: '#6cc52e' }}>
                  <Typewriter text="The Science of Nutrition and the Art of Mindful Living" speed={50} delay={120} />
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto"
            >
              The perfect blend of Indian Nutritional Wisdom and Modern Nutrition Science <br className="hidden sm:block" /> using Food as Medicine and Lifestyle as Therapy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center gap-3"
            >
              <Button asChild size="sm" className="bg-secondary w-full sm:w-auto">
                <Link to="/contact" className="flex items-center justify-center gap-2 px-4 py-2">
                  Get Started <ArrowRight size={16} />
                </Link>
              </Button>

              <Button
                onClick={() => scrollToId("pillars")}
                size="sm"
                className="border border-white text-white hover:bg-white/10 px-4 py-2 rounded-lg w-full sm:w-auto"
                variant="ghost"
              >
                Discover the 5 Pillars
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="pillars" className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl" style={{ color: "#444444" }}>
              5 Pillars of Functional Healing
            </h2>
            <p className="text-muted-foreground mt-3 text-base sm:text-lg">
              True wellness isn't built on quick fixes, but on five timeless foundations.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
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
                    transition={{ duration: 0.9, delay: i * 0.06, ease: "easeOut" }}
                    className="flex-1"
                  >
                    <div className="flex flex-col items-center text-center p-4 rounded-lg">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <img src={p.iconPath} alt={p.title} className="w-10 h-10 object-contain" />
                      </div>
                      <div className="flex flex-col items-center max-w-xs">
                        <h3 className="font-heading font-semibold text-base sm:text-lg mb-2">
                          {p.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{p.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-12 sm:pt-20 pb-6">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-8" style={{ color: '#444444' }}>
              Why This Matters
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  Many people chase quick symptom relief for acidity, bloating, high sugar, fatigue, acne,
                  hair loss, or stubborn weight without ever asking what triggered them. Treating surface
                  symptoms alone often means the underlying imbalance persists.
                </p>
                <p>
                  Real, lasting healing begins by addressing root causes — the gut ecosystem, metabolic
                  function, and daily rhythm that regulate digestion, hormones and energy. When you target
                  the source, symptoms resolve more naturally and sustainably.
                </p>
                <p>
                  My approach blends evidence-based nutrition, circadian-friendly habits, and time-tested
                  wisdom to help you rebuild health with compassion — no fads, no fear, and no unnecessary
                  restriction. The result is practical, steady change that fits your life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 md:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={madhavi}
                  alt="Madhavi"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl" style={{ color: '#444444' }}>Results & Testimonials</h2>
            <p className="text-muted-foreground mt-3 text-base">Real people. Real results. Root-cause healing in action.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            {testimonialData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="p-4 sm:p-6 h-full hover:shadow-xl transition-shadow" style={{ boxShadow: '6px 6px 20px rgba(108,197,46,0.18)' }}>
                  <div className="flex items-center mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary mr-1" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-2 italic text-sm sm:text-base">
                    "{truncateText(testimonial.content)}"
                    {testimonial.content.length > 150 && (
                      <button
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          setTimeout(() => setSelectedTestimonial(testimonial), 200);
                        }}
                        className="text-primary hover:underline ml-1 not-italic cursor-pointer text-sm"
                      >
                        Read more
                      </button>
                    )}
                  </p>

                  <p className="text-xs text-muted-foreground mb-4">{testimonial.date}</p>

                  <div className="flex items-center pt-4 border-t border-gray-100">
                    <Avatar name={testimonial.name} />
                    <div className="ml-3">
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto"
            >
              <Link to="/testimonials" style={{ fontSize: "16px" }} className="flex items-center justify-center gap-2 px-4 py-2">
                Read More Success Stories
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedTestimonial} onClose={() => setSelectedTestimonial(null)}>
        {selectedTestimonial && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <Avatar name={selectedTestimonial.name} />
              <div>
                <h3 className="font-semibold text-lg">{selectedTestimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedTestimonial.date}</p>
              </div>
            </div>
            <div className="flex mb-2">
              {Array.from({ length: selectedTestimonial.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary mr-1" />
              ))}
            </div>
            <p className="text-base italic text-muted-foreground">"{selectedTestimonial.content}"</p>
          </div>
        )}
      </Modal>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex justify-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6" style={{ color: '#444444' }}>Why Work With Me</h2>
          </div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className=""
            >
              <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed text-center">
                <p>
                  I'm Madhavi Sharma, a Functional Nutritionist specialising in Gut Health & Diabetes Reversal with over 20 years of international experience in integrative health.
                  My approach blends modern nutrition science with Indian wisdom — focusing on circadian rhythm, mindful eating, satiety signals, and unlearning diet culture. I help people rebuild health naturally through clarity, rhythm, and flow — not fear or restriction.
                </p>
                <p>
                  Every plan I design is Simple, Sensible, and Sustainable, created to fit real lives and enable long-term healing. Your body isn't broken; it's waiting to be understood.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/about" style={{ fontSize: '16px' }} className="px-4 py-2">Meet Madhavi</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 mb-12 text-center">
        <span className="text-[16px] sm:text-[18px]">
          Please feel free to Call Us at{' '}
          <a
            href="tel:+918826504708"
            style={{ color: '#6cc52e', fontWeight: '600' }}
            aria-label="Call +91 8826504708"
          >
            +91 8826504708
          </a>{' '}
          or Email at{' '}
          <a
            href="mailto:behealthinformed@gmail.com"
            style={{ color: '#6cc52e', fontWeight: '600' }}
            aria-label="Email behealthinformed at gmail dot com"
          >
            behealthinformed@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Home;
