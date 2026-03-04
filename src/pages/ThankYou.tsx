import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/favicon.ico";

const PAYMENT_TOKEN_KEY = "ih_payment_token";
const TOKEN_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes

const ThankYou = () => {
  const { uniqueKey } = useParams<{ uniqueKey: string }>();
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // No token in URL → invalid access
    if (!uniqueKey) {
      navigate("/", { replace: true });
      return;
    }

    const stored = sessionStorage.getItem(PAYMENT_TOKEN_KEY);

    // No payment data in session → never went through payment callback
    if (!stored) {
      navigate("/", { replace: true });
      return;
    }

    try {
      const data = JSON.parse(stored);
      const now = Date.now();

      const tokenMatches = data.token === uniqueKey;
      const notExpired = now - data.timestamp < TOKEN_EXPIRY_MS;

      if (tokenMatches && notExpired) {
        // Valid — allow access (refresh works within the 30-min window)
        setIsVerified(true);
      } else {
        // Token mismatch or expired — clean up and redirect
        sessionStorage.removeItem(PAYMENT_TOKEN_KEY);
        navigate("/", { replace: true });
      }
    } catch {
      sessionStorage.removeItem(PAYMENT_TOKEN_KEY);
      navigate("/", { replace: true });
    }
  }, [uniqueKey, navigate]);

  // Show spinner while verifying
  if (!isVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-lg font-semibold text-gray-600">Verifying payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Dark background with quote */}
      <section className="relative bg-[#0d0b2e] py-16 sm:py-20 overflow-hidden">
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white font-heading font-bold text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed capitalize"
          >
            Reverse diabetes, halve your medical bills and double your income
            with higher energy &amp; productivity
          </motion.p>
        </div>
      </section>

      {/* Main Content - Logo + Thank You */}
      <section className="relative bg-[#0d0b2e] pb-16 sm:pb-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Logo Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg p-8 sm:p-12 flex items-center justify-center w-full md:w-1/2 max-w-md"
            >
              <img
                src={logo}
                alt="Informed Health Logo"
                className="w-48 sm:w-64 h-auto object-contain"
              />
            </motion.div>

            {/* Thank You Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center md:text-left w-full md:w-1/2 space-y-6"
            >
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary">
                Thank You for Signing Up!
              </h1>

              <p className="text-white font-semibold text-base sm:text-lg leading-relaxed">
                Congratulations on taking the first step towards achieving
                optimal health by registering for our upcoming Diabetes Reversal
                Masterclass.
              </p>

              <p className="text-white font-semibold text-base sm:text-lg leading-relaxed">
                Click the button below to join the WhatsApp group for the 2 Hour
                Diabetes Reversal Masterclass 👇
              </p>

              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/80 text-white font-bold text-lg sm:text-xl px-8 py-6 rounded-full shadow-lg"
              >
                <a
                  href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle size={24} />
                    Join WhatsApp Group
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Motivational Text */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center font-heading font-semibold text-lg sm:text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed"
          >
            I applaud your commitment to your health, and I look forward to
            meeting you inside the webinar!
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
