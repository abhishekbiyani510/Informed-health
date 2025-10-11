import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 style={{ fontFamily: 'Poppins, sans-serif', color: '#444444' }} className="font-heading font-semibold text-4xl md:text-4xl mb-6 tracking-tight">Refund Policy</h1>
          
          <Card className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Last Updated: October 5, 2025
              </p>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">Consultation Services</h2>
              <p className="text-muted-foreground mb-4">
                For one-on-one consultation services, refunds are available under the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Cancellation made at least 48 hours before the scheduled appointment - Full refund</li>
                <li>Cancellation made 24-48 hours before appointment - 50% refund</li>
                <li>Cancellation made less than 24 hours before appointment - No refund</li>
                <li>No-shows are not eligible for refunds</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">Workshop Registrations</h2>
              <p className="text-muted-foreground mb-4">
                Workshop registration refunds are processed as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Cancellation 7+ days before workshop - Full refund minus processing fee (5%)</li>
                <li>Cancellation 3-7 days before workshop - 50% refund</li>
                <li>Cancellation less than 3 days before workshop - No refund</li>
                <li>Workshop cancellation by us - Full refund or transfer to future workshop</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">Program Packages</h2>
              <p className="text-muted-foreground mb-4">
                For multi-session programs and packages:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Cancellation before program start - Full refund minus 10% administrative fee</li>
                <li>Cancellation after program start - Refund for unused sessions only, minus 10% fee</li>
                <li>No refunds after 50% of program completion</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">Digital Products</h2>
              <p className="text-muted-foreground mb-4">
                E-books, meal plans, and other digital products are non-refundable once downloaded.
              </p>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">Refund Processing</h2>
              <p className="text-muted-foreground mb-4">
                All approved refunds will be processed within 7-10 business days to the original payment method.
              </p>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">Contact</h2>
              <p className="text-muted-foreground">
                For refund requests, please contact us at behealthinformed@gmail.com with your booking details.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
