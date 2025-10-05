import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/behealthinformed/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@informedhealth", label: "YouTube" },
  ];

  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-heading font-bold text-lg text-primary">Madhavi K. Sharma</h3>
            <p className="text-sm text-muted-foreground">
              Certified Functional Nutritionist dedicated to transforming lives through personalized nutrition and wellness programs.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-heading font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Workshops", "Testimonials", "Blog", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-heading font-bold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Wellness Street, Connaught Place<br />
                  New Delhi, 110001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 88265 04708</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">info@madhaviwellness.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Reviews & Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-heading font-bold text-lg">Reviews & Policies</h3>
            <div className="space-y-3">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                  G
                </div>
                <span>Google Reviews</span>
              </a>
              <ul className="space-y-2">
                <li>
                  <Link to="/refund-policy" className="text-sm text-muted-foreground hover:text-primary">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cancellation-policy" className="text-sm text-muted-foreground hover:text-primary">
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link to="/grievance" className="text-sm text-muted-foreground hover:text-primary">
                    Grievance Portal
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Madhavi K. Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
