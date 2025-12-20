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
  const [loading, setLoading] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ---------- FORM SUBMIT HANDLER ----------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResultMsg("Please wait...");

    const formPayload = {
      ...formData,
      access_key: "b215e59e-9f2d-4ecd-b218-505979235808",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const json = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for reaching out. We'll get back to you within 24 hours.",
        });

        setResultMsg("Message Sent Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Submission Failed",
          description: json.message || "Something went wrong!",
          variant: "destructive",
        });

        setResultMsg(json.message);
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please try again later.",
        variant: "destructive",
      });

      setResultMsg("Something went wrong!");
    }

    setLoading(false);

    setTimeout(() => {
      setResultMsg("");
    }, 3000);
  };

  // Contact info list
  const contactInfo = [
    {
      icon: () => <FontAwesomeIcon icon={faWhatsapp} size="lg" />,
      title: "WhatsApp",
      content: "+91 88265 04708",
    },
    {
      icon: () => <Phone size={24} />,
      title: "Phone",
      content: "+91 88265 04708",
    },
    {
      icon: () => <Mail size={24} />,
      title: "Email",
      content: "behealthinformed@gmail.com",
    },
    {
      icon: () => <Clock size={24} />,
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
          <h1
            className="font-heading font-semibold text-[50px] md:text-[50px] mb-2 tracking-tight"
            style={{ fontFamily: "Poppins, sans-serif", color: "#444444" }}
          >
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to Start your Wellness Journey? Reach out to Schedule a Consultation or ask any Questions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <Card className="p-8" style={{ boxShadow: "6px 6px 20px #6cc52e" }}>
              <h2 className="font-semibold text-[#444444] text-2xl mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-3">
                  <Label>Full Name *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Email Address *</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Phone Number</Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your contact number"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Message *</Label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    required
                    placeholder="Tell us about your health goals and how we can help..."
                  />
                </div>

                {resultMsg && (
                  <div className="text-sm font-medium text-center text-primary">
                    {resultMsg}
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="font-heading font-bold text-2xl mb-6">Contact Information</h2>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, ease: "easeOut" }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
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
                  loading="lazy"
                  allowFullScreen
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
