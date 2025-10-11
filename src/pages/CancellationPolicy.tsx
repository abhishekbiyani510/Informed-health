import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 style={{ fontFamily: 'Poppins, sans-serif', color: '#444444' }} className="font-heading font-semibold text-4xl md:text-4xl mb-6 tracking-tight">Cancellation Policy</h1>
          
          <Card className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Last Updated: October 5, 2025
              </p>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">Appointment Cancellations</h2>
              <p className="text-muted-foreground mb-4">
                We understand that sometimes schedules change. Please review our cancellation policies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Appointments can be cancelled or rescheduled free of charge with 48 hours notice</li>
                <li>Cancellations made 24-48 hours in advance may incur a 50% cancellation fee</li>
                <li>Late cancellations (less than 24 hours) or no-shows will be charged the full appointment fee</li>
                <li>Emergency situations will be handled on a case-by-case basis</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">How to Cancel</h2>
              <p className="text-muted-foreground mb-4">
                To cancel or reschedule an appointment:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Email us at behealthinformed@gmail.com</li>
                <li>Call us at +91 88265 04708 during business hours</li>
                <li>Use the cancellation link in your appointment confirmation email</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">Workshop Cancellations</h2>
              <p className="text-muted-foreground mb-4">
                Workshop cancellation timeline:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>7+ days before workshop: Free cancellation or transfer to another date</li>
                <li>3-7 days before: Cancellation fee applies (see Refund Policy)</li>
                <li>Less than 3 days: No cancellations accepted</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">Provider Cancellations</h2>
              <p className="text-muted-foreground mb-4">
                In the rare event that we need to cancel:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>You will be notified at least 24 hours in advance when possible</li>
                <li>You can choose to reschedule or receive a full refund</li>
                <li>For workshops, you may transfer to a future date or receive a full refund</li>
              </ul>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">Program Cancellations</h2>
              <p className="text-muted-foreground mb-4">
                For multi-session programs, cancellations are accepted up to the program start date. 
                Once the program has begun, please refer to our Refund Policy for details on partial refunds.
              </p>

              <h2 className="font-heading font-bold text-2xl mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                Questions about our cancellation policy? Contact us at behealthinformed@gmail.com or call +91 88265 04708.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
