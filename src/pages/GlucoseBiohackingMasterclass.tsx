import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Briefcase, BatteryLow, Cookie, ShieldPlus, TrendingUp, UserX, BarChart2, AlertTriangle, Calendar, Clock, X } from "lucide-react";
import { Link } from "react-router-dom";
import DiabetesImage from "@/assets/masterclass1.jpg";
import MadhaviImage from "@/assets/madhavi1.jpg";
import { UPCOMING_WORKSHOP_DATETIME } from "@/data/mockData";
import olxLogo from "@/assets/logos/olx.png";
import adityaBirlaLogo from "@/assets/logos/aditya-birla.png";
import durdarshanLogo from "@/assets/logos/durdarshan.png";
import hmdLogo from "@/assets/logos/hmd.jpg";
import thehindu from "@/assets/logos/the-hindu.png";
import zomatoLogo from "@/assets/logos/zomato.png";
import Mindfullness from "@/assets/mindfullness.png";
import Friendly from "@/assets/friendly.png";

// Countdown Component
const CountdownTimer = () => {
  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date(UPCOMING_WORKSHOP_DATETIME).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="bg-secondary text-white rounded-lg p-3 min-w-16">
        <p className="text-2xl font-bold">{String(value).padStart(2, "0")}</p>
      </div>
      <p className="text-sm font-semibold mt-2">{label}</p>
    </div>
  );

  return (
    <div className="flex gap-4 justify-center items-center flex-wrap">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

const InlineCountdown = () => {
  const targetTime = new Date(UPCOMING_WORKSHOP_DATETIME).getTime();
  const eventDate = new Date(UPCOMING_WORKSHOP_DATETIME);

  const calcDiff = useCallback((now: number) => {
    const diffMs = targetTime - now;
    return {
      days: Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((diffMs / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((diffMs / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((diffMs / 1000) % 60)),
    };
  }, [targetTime]);

  const [diff, setDiff] = useState(() => calcDiff(Date.now()));

  useEffect(() => {
    const timer = setInterval(() => setDiff(calcDiff(Date.now())), 1000);
    return () => clearInterval(timer);
  }, [calcDiff]);

return (
	<motion.div
		initial={{ opacity: 0, y: 10 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		className="flex justify-center gap-12 mb-8"
	>
		<div className="flex flex-col items-center gap-2">
			<div className="bg-primary/20 p-3 rounded-lg">
				<Calendar className="text-primary" size={28} />
			</div>
			<p className="text-sm text-gray-600">Event Date</p>
			<p className="font-bold text-lg" style={{ color: "#444444" }}>
				{eventDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
			</p>
			<p className="text-xs text-gray-500">
				{eventDate.toLocaleDateString('en-IN', { weekday: 'long' })}
			</p>
		</div>

		<div className="flex flex-col items-center gap-2">
			<div className="bg-primary/20 p-3 rounded-lg">
				<Clock className="text-primary" size={28} />
			</div>
			<p className="text-sm text-gray-600">Start Time</p>
			<p className="font-bold text-lg" style={{ color: "#444444" }}>
				11:00 am - 1:00 pm
			</p>
			<p className="text-xs text-gray-500">IST</p>
		</div>
	</motion.div>
);
};

const GlucoseBiohackingMasterclass = () => {
	const resonancePoints = [
		{
			title: "You are Diabetic or Pre-Diabetic",
			description: "Blood Sugar Levels",
			icon: Activity,
		},
		{
			title: "You juggle diabetes management with a busy schedule",
			description: "Busy lifestyle, hard to manage diabetes",
			icon: Briefcase,
		},
		{
			title: "You feel tired and fatigued or low energy",
			description: "Low energy, tiredness, or fatigue",
			icon: BatteryLow,
		},
		{
			title: "You deal with cravings and emotional eating patterns",
			description: "Cravings, emotional eating, hunger",
			icon: Cookie,
		},
		{
			title: "You care to reverse or prevent Diabetes-Related Complications",
			description: "Prevent or reverse diabetes complications, obesity",
			icon: ShieldPlus,
		},
		{
			title: "You struggle with fluctuating blood sugar levels",
			description: "Highs and lows in blood sugar",
			icon: TrendingUp,
		},
		{
			title: "You feel anxious or isolated in social gatherings",
			description: "Anxiety or isolation in social settings",
			icon: UserX,
		},
		{
			title: "Experience unpredictable spikes or drops in blood sugar levels",
			description: "Unpredictable sugar spikes or drops",
			icon: BarChart2,
		},
		{
			title: "You feel stressed & confused with food choices",
			description: "Stress, confusion, or fear about food",
			icon: AlertTriangle,
		},
	];

	const benefitsItems = [
		"Meal Planning Struggles",
		"High HbA1C",
		"Fatigue and Low Energy Battles",
		"Blood Sugar Fluctuations",
		"Travel & Social Anxiety",
		"Diabetes Related Complications",
	];

	const learnings = [
		{
			title: "Root Cause of Diabetes",
			description: "High Blood Sugar is not a Cause, it is an outcome of an underlying root cause!",
		},
		{
			title: "Why Medicines can't Reverse Diabetes",
			description: "Ever wondered why these medicines aren't fixing your Diabetes Permanently",
		},
		{
			title: "First Step to Diabetes Reversal",
			description: "Create your Diabetes Success story with THIS First Step",
		},
	];

	const programSteps = [
		{
			step: 1,
			title: "Register for the Webinar",
			description: "Simply click on any of the buttons and follow the steps",
		},
		{
			step: 2,
			title: "Join the WhatsApp Group",
			description: "Receive all updates, worksheets and on boarding tasks",
		},
		{
			step: 3,
			title: "Attend the Live Webinar",
			description: "Learn from our experts and be accountable for implementing the knowledge",
		},
	];

	const faqs = [
		{
			q: "When Does the Webinar start?",
			a: "The dates of the webinar are mentioned on the top - Starting 15th Feb 2025",
		},
		{
			q: "What are the timings?",
			a: "The Webinar will be conducted from 11:00 am - 1:00 pm",
		},
		{
			q: "Is this webinar an advanced workshop?",
			a: "Not at all. Madhavi is known to simplify concepts to help people understand!",
		},
		{
			q: "Will Recordings be shared?",
			a: "The emphasis is on interaction and learning, thus the sessions are live. No recordings will be shared.",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-start overflow-hidden">
				<img
					src={DiabetesImage}
					alt="Defeat Diabetes Naturally"
					className="absolute inset-0 w-full h-full object-top object-cover opacity-30"
					loading="lazy"
					decoding="async"
				/>
				<div className="absolute inset-0 bg-white/30" />

				<div className="container mx-auto px-4 relative z-10 pt-24 sm:pt-28 pb-12">
					<div className="max-w-7xl mx-auto text-center space-y-5">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="space-y-4"
						>
							{/* Small title at top */}
							<p className="font-heading font-semibold text-lg sm:text-xl md:text-2xl text-gray-700">
								Take Your First Step to Reverse Diabetes Naturally!!
							</p>

							{/* Big primary title */}
							<h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary shadow-white drop-shadow-lg">
								Defeat Diabetes Naturally
							</h1>

							{/* Secondary colored subtitle */}
							<h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-secondary drop-shadow-md">
								<span>Without Medicines</span><span className="text-gray-700"> with GBH SYSTEM</span>
							</h2>

							<div className="space-y-1">
								<p className="text-base sm:text-lg font-semibold text-gray-700">
									Live a Needle-free, Pill-free & Complication-free Life
								</p>
							</div>

							{/* Countdown */}
							<div className="pt-4">
								<CountdownTimer />
							</div>

							{/* CTA Button */}
							<div className="pt-4">
								<Button
									asChild
									size="lg"
									className="bg-primary hover:bg-primary/80 text-white shadow-md text-[20px]"
								>
									<Link
										to="https://www.instamojo.com/@InformedHealth/l6dbad0a9b68c41df8922a9563bb84b27/"
										className="flex items-center justify-center gap-2"
									>
										Register Now <ArrowRight size={20} />
									</Link>
								</Button>
							</div>
						</motion.div>
					</div>
				</div>
			</section>



			{/* Featured In */}
			<section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<div className="inline mb-12">
							<h2 className="font-heading text-secondary font-bold text-3xl sm:text-4xl md:text-5xl px-6 py-3">
								Featured In
							</h2>
						</div>
						
						<p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
							Trusted by Leading Organizations & Media Outlets
						</p>

						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
							{[
								{ name: "OLX", logo: olxLogo },
								{ name: "Aditya Birla Group", logo: adityaBirlaLogo },
								{ name: "Doordarshan", logo: durdarshanLogo },
								{ name: "HMD", logo: hmdLogo },
								{ name: "The Hindu", logo: thehindu },
								{ name: "Zomato", logo: zomatoLogo },
							].map((brand, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, scale: 0.8, y: 10 }}
									whileInView={{ opacity: 1, scale: 1, y: 0 }}
									transition={{ delay: idx * 0.1 }}
									viewport={{ once: true }}
									className="h-28 sm:h-32 flex items-center justify-center bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
								>
									<img
										src={brand.logo}
										alt={brand.name}
										className="max-h-full max-w-full object-contain"
										title={brand.name}
									/>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Who Should Attend */}
			<section className="py-12 sm:py-10 md:py-12 bg-muted">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-5xl mx-auto"
					>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-center" style={{ color: "#444444" }}>
							Do You Resonate With Any Of These?
						</h2>

						<div className="flex flex-col items-center">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
								{resonancePoints.map((point, idx) => {
									const IconComponent = point.icon;
									return (
										<motion.div
											key={idx}
											initial={{ opacity: 0, scale: 0.9, y: 15 }}
											whileInView={{ opacity: 1, scale: 1, y: 0 }}
											transition={{ delay: idx * 0.1 }}
											viewport={{ once: true }}
											className="bg-white p-6 rounded-lg border-l-4 border-primary hover:shadow-lg transition-shadow"
										>
											<div className="flex items-start gap-4">
												<IconComponent className="text-primary flex-shrink-0 mt-1" size={32} />
												<div className="text-left">
													<h3 className="font-semibold text-lg mb-2" style={{ color: "#444444" }}>
														{point.title}
													</h3>
													<p className="text-gray-600">{point.description}</p>
												</div>
											</div>
										</motion.div>
									);
								})}
							</div>

							<Button
								asChild
								size="lg"
								className="bg-primary hover:bg-primary/90 text-white shadow-md text-[20px] mt-8"
							>
								<Link
									to="https://www.instamojo.com/@InformedHealth/l6dbad0a9b68c41df8922a9563bb84b27/"
									className="flex items-center justify-center gap-2"
								>
									Yes, I want to be Diabetes-free
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-12 sm:py-8 md:py-12">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-4xl mx-auto text-center"
					>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-12" style={{ color: "#444444" }}>
							Bid Permanent Good Bye To:
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{benefitsItems.map((benefit, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: idx * 0.05 }}
									viewport={{ once: true }}
									className="flex items-center gap-3 bg-red-500/15 p-4 rounded-lg"
								>
									<X className="text-red-500 flex-shrink-0" size={24} />
									<p className="font-semibold text-gray-700">{benefit}</p>
								</motion.div>
							))}
						</div>
						<Button
							asChild
							size="lg"
							className="bg-primary hover:bg-primary/90 text-white shadow-md text-[20px] mt-8"
						>
							<Link
								to="https://www.instamojo.com/@InformedHealth/l6dbad0a9b68c41df8922a9563bb84b27/"
								className="flex items-center justify-center gap-2"
							>
								Book your Seat NOW <ArrowRight size={20} />
							</Link>
						</Button>
					</motion.div>
				</div>
			</section>

			{/* What You Will Learn */}
			<section className="py-12 sm:py-16 md:py-20 bg-muted">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-5xl mx-auto"
					>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-center" style={{ color: "#444444" }}>
							What You Will Learn
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{learnings.map((learning, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, scale: 0.9, y: 15 }}
									whileInView={{ opacity: 1, scale: 1, y: 0 }}
									transition={{ delay: idx * 0.1 }}
									viewport={{ once: true }}
									className="bg-white p-6 rounded-lg border-t-4 border-primary hover:shadow-lg transition-shadow h-full flex flex-col"
								>
									<div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
										<span className="text-primary font-bold text-xl">{idx + 1}</span>
									</div>
									<h3 className="font-semibold text-lg mb-3" style={{ color: "#444444" }}>
										{learning.title}
									</h3>
									<p className="text-gray-600 flex-1">{learning.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Meet Your Mentor */}
			<section className="py-8 sm:py-10 md:py-16">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-5xl mx-auto"
					>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-center" style={{ color: "#444444" }}>
							Meet Your Mentor
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="flex justify-center"
							>
								<img
									src={MadhaviImage}
									alt="Madhavi K Sharma"
									className="rounded-lg shadow-lg w-full h-auto object-cover max-w-sm md:max-w-none"
									loading="lazy"
									decoding="async"
								/>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className="space-y-4"
							>
								<div>
									<h3 className="font-heading font-bold text-2xl sm:text-3xl mb-1" style={{ color: "#444444" }}>
										Madhavi K Sharma
									</h3>
									<p className="text-secondary font-semibold mb-4">
										Integrative Nutritionist, Diabetes & Gut Health Expert
									</p>
									<p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
										In her 20+ years of experience in the field, she has helped thousands of people from diverse backgrounds, nationally & internationally experience ultimate health by healing their gut health.
									</p>
									<p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3">
										She firmly believes in Simple, Sustainable and Sensible lifestyle approach to health and believes that a combination of Ancient Ayurvedic Wisdom with Modern Nutrition Science is the answer to prevention and reversal of modern day Lifestyle diseases.
									</p>
									<p className="text-gray-700 leading-relaxed text-sm sm:text-base">
										She has worked with Sita Ram Bhartia Hospital and Saket City Hospital. She conducts corporate talks for companies like OLX, HMD, Aditya Birla Group, and is the on-panel Nutritionist for Zomato. She has been featured on DD National and DD Kisan, and regularly publishes in Times of India, Hindustan Times, and educational journals.
									</p>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-12 sm:py-16 md:py-20 bg-muted">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-5xl mx-auto"
					>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-center" style={{ color: "#444444" }}>
							How This Programme Works
						</h2>

						<div className="space-y-6">
							{programSteps.map((step, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: idx * 0.1 }}
									viewport={{ once: true }}
									className="group relative"
								>
									<div className="absolute left-6 top-12 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" style={{ display: idx === programSteps.length - 1 ? "none" : "block" }} />

									<div className="flex gap-6 items-start">
										<div className="relative flex flex-col items-center flex-shrink-0">
											<div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
												<span className="font-heading font-bold text-white text-lg">{step.step}</span>
											</div>
										</div>

										<div className="flex-1 pt-1">
											<div className="bg-white p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group-hover:shadow-lg">
												<h3 className="font-semibold text-lg mb-2" style={{ color: "#444444" }}>
													{step.title}
												</h3>
												<p className="text-gray-600">{step.description}</p>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Bonuses Section */}
			<section className="py-12 sm:py-16 md:py-20">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-5xl mx-auto text-center"
					>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4" style={{ color: "#444444" }}>
							Grab These Amazing BONUSES
						</h2>
						<p className="text-2xl font-bold text-secondary mb-12">
							Worth Rs 3,000/- When You Register Now!
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.1 }}
								viewport={{ once: true }}
								className="bg-primary/10 p-8 rounded-lg border-2 border-primary"
							>
								<div className="w-1rem h-auto flex items-center justify-center mx-auto mb-4">
									<img src={Mindfullness} alt="Diabetes Mindfulness" className="w-full h-full object-cover" />
								</div>
								<h3 className="font-bold text-xl mb-2" style={{ color: "#444444" }}>
									Diabetes Mindfulness Hacks
								</h3>
								<p className="text-secondary font-bold">Value: Rs 999/-</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.2 }}
								viewport={{ once: true }}
								className="bg-primary/10 p-8 rounded-lg border-2 border-primary"
							>
								<div className="w-1rem h-auto flex items-center justify-center mx-auto mb-4">
									<img src={Friendly} alt="Free eBook on Diabetes" className="w-full h-full object-cover" />
								</div>
								<h3 className="font-bold text-xl mb-2" style={{ color: "#444444" }}>
									Free eBook on Diabetes
								</h3>
								<p className="text-secondary font-bold">Value: Rs 1,999/-</p>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-12 sm:py-16 md:py-20 bg-muted">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-4xl mx-auto"
					>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-center" style={{ color: "#444444" }}>
							Frequently Asked Questions
						</h2>

						<div className="space-y-4">
							{faqs.map((faq, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: idx * 0.05 }}
									viewport={{ once: true }}
									className="bg-white p-6 rounded-lg border-l-4 border-primary"
								>
									<h3 className="font-semibold text-lg mb-2" style={{ color: "#444444" }}>
										{faq.q}
									</h3>
									<p className="text-gray-600">{faq.a}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-12 sm:py-16 md:py-20">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-6xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-2xl"
					>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4" style={{ color: "#444444" }}>
							Join 1000+ People Who Have Benefitted!
						</h2>
						<p className="text-lg text-gray-700 mb-4">
							BioHack Your Diabetes @ Just Rs. 99/-
						</p>
						<p className="text-xl font-bold text-secondary mb-4">
							Starts {new Date(UPCOMING_WORKSHOP_DATETIME).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} | {new Date(UPCOMING_WORKSHOP_DATETIME).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} - 1:00 pm
						</p>

						<Button
							asChild
							size="lg"
							className="bg-secondary hover:bg-secondary/90 text-white shadow-md text-[20px]"
						>
							<Link
								to="https://www.instamojo.com/@InformedHealth/l6dbad0a9b68c41df8922a9563bb84b27/"
								className="flex items-center justify-center gap-2"
							>
								Take Your First Step Now <ArrowRight size={20} />
							</Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default GlucoseBiohackingMasterclass;
