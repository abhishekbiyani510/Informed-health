import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/mockData";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 style={{ fontFamily: 'Poppins, sans-serif', color: '#444444' }} className="font-heading font-semibold text-4xl md:text-4xl mb-2 tracking-tight">Client Testimonials</h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Real stories from real people who transformed their health through functional nutrition
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
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
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center pt-6 border-t">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Read More Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <a
            href="https://www.google.com/maps/place/Informed+Health/@28.537549,77.246406,17z/data=!4m18!1m9!3m8!1s0x390ce3a43a325245:0x11ca783ce946bc7a!2sInformed+Health!8m2!3d28.5375486!4d77.2464058!9m1!1b1!16s%2Fg%2F11fl0t8g9b!3m7!1s0x390ce3a43a325245:0x11ca783ce946bc7a!8m2!3d28.5375486!4d77.2464058!9m1!1b1!16s%2Fg%2F11fl0t8g9b?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 shadow hover:scale-105 hover:shadow-lg transition-all border border-secondary/20">
              <span className="font-heading font-semibold text-lg text-secondary">
                Read More Reviews on Google
              </span>
              <svg
                className="w-6 h-6 text-secondary group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl p-12 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-heading font-bold text-5xl mb-2">500+</p>
              <p className="opacity-90">Happy Clients</p>
            </div>
            <div>
              <p className="font-heading font-bold text-5xl mb-2">10+</p>
              <p className="opacity-90">Years Experience</p>
            </div>
            <div>
              <p className="font-heading font-bold text-5xl mb-2">95%</p>
              <p className="opacity-90">Success Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
