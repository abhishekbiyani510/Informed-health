import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { generateThankYouKey } from "@/lib/utils";

const PAYMENT_TOKEN_KEY = "ih_payment_token";

/**
 * This component acts as the redirect target after Instamojo payment.
 *
 * HOW TO SET UP:
 * In your Instamojo product settings, set the "Redirect URL" to:
 *   https://yourdomain.com/#/payment/callback
 *
 * Instamojo will redirect here with query params:
 *   ?payment_id=xxx&payment_status=Credit&payment_request_id=xxx
 *
 * This component validates payment_status, generates a one-time token,
 * stores it in sessionStorage, and redirects to /<token>/thank-you.
 *
 * FOR TESTING locally, visit:
 *   http://localhost:8080/#/payment/callback?payment_status=Credit&payment_id=TEST123
 */
const PaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const paymentStatus = searchParams.get("payment_status");
    const paymentId = searchParams.get("payment_id");
    const paymentRequestId = searchParams.get("payment_request_id");

    if (paymentStatus === "Credit" && paymentId) {
      // Payment successful — generate unique token
      const token = generateThankYouKey();
      const timestamp = Date.now();

      // Store verification data in sessionStorage (dies when tab closes)
      sessionStorage.setItem(
        PAYMENT_TOKEN_KEY,
        JSON.stringify({
          token,
          paymentId,
          paymentRequestId: paymentRequestId || "",
          timestamp,
        })
      );

      // Redirect to unique thank-you page
      navigate(`/${token}/thank-you`, { replace: true });
    } else {
      // Payment failed or missing params — send to home
      navigate("/", { replace: true });
    }
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-lg font-semibold text-gray-600">
          Processing your payment...
        </p>
      </div>
    </div>
  );
};

export default PaymentCallback;
