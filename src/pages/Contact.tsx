import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

    const contactInfo = [
    {
      icon: () => <FontAwesomeIcon icon={faWhatsapp} size="lg" color="primary" />,
      title: "WhatsApp",
      content: "+91 88265 04708",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 88265 04708",
    },
    {
      icon: Mail,
      title: "Email",
      content: "behealthinformed@gmail.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sat: 11:00 AM - 7:00 PM",
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
            <h1 className="font-heading font-semibold text-[50px] md:text-[50px] mb-2 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', color: '#444444' }}>Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to Start your Wellness Journey? Reach out to Schedule a Consultation or ask any Questions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card 
  className="p-8" 
  style={{
    boxShadow: '0 0 30px 10px #6cc52e',
  }}
>
  <h2 className="font-semibold text-[#444444] text-2xl mb-6">Send Us a Message</h2>
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="space-y-3">
      <Label htmlFor="name">Full Name *</Label>
      <Input
        id="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Enter your name"
        required
      />
    </div>

          <div className="space-y-3">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter your contact number"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your health goals and how we can help..."
              rows={6}
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-heading font-bold text-2xl mb-6">Contact Information</h2>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <info.icon className="black" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                {info.content}
                    </p>
                  </div>
                </div>
              </Card>
              </motion.div>
            ))}

            {/* Map */}
            <Card className="overflow-hidden">
              <div className="aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1401.931883847473!2d77.2438309!3d28.5375533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a43a325245%3A0x11ca783ce946bc7a!2sInformed%20Health!5e0!3m2!1sen!2sin!4v1697041234567!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
