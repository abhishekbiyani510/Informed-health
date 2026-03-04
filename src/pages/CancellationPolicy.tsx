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
          <h1 style={{ fontFamily: 'Poppins, sans-serif', color: '#444444' }} className="font-heading font-semibold text-4xl md:text-4xl mb-2 tracking-tight">Cancellation & No-Show Policy</h1>
          
          <p className="text-muted-foreground mb-8">
            Last Updated: October 5, 2025
          </p>

          <p className="text-muted-foreground mb-8 text-lg">
            At Informed Health, our clinical resources and time are dedicated to your transformation. To maintain the integrity of our schedules, we adhere to the following strict policy:
          </p>

          <div className="space-y-6">
            {/* Section 1 */}
            <Card className="p-8 border-l-4 border-primary">
              <h2 className="font-heading font-bold text-2xl mb-4">1. 48-Hour Notification Rule</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Written Notice Required:</h3>
                  <p className="text-muted-foreground">
                    Any request to cancel or reschedule a session must be submitted via email to behealthinformed@gmail.com or Whatsapp at 8826504708 at least 48 hours prior to the scheduled appointment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Late Cancellations:</h3>
                  <p className="text-muted-foreground">
                    In the absence of a written notification 48 hours in advance, the session will be considered forfeited and taken.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 2 */}
            <Card className="p-8 border-l-4 border-primary">
              <h2 className="font-heading font-bold text-2xl mb-4">2. Session Participation & No-Shows</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Self-Responsibility:</h3>
                  <p className="text-muted-foreground">
                    It is the client's responsibility to be present at the scheduled time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">No Reminders:</h3>
                  <p className="text-muted-foreground">
                    Please note that no reminders (calls or messages) will be sent at the time of the session to prompt you to join.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Forfeiture:</h3>
                  <p className="text-muted-foreground">
                    If you fail to join the session within the first 10 minutes of the scheduled time without prior 48-hour notice, the session will be marked as completed.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 3 */}
            <Card className="p-8 border-l-4 border-primary">
              <h2 className="font-heading font-bold text-2xl mb-4">3. Provider Cancellations</h2>
              <p className="text-muted-foreground">
                In the rare event that Informed Health must reschedule a session, you will be notified at least 24 hours in advance, and the session will be rescheduled at a mutually convenient time.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
