import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gut from "@/assets/gut-health-trends.jpg";
import glucose from "@/assets/glucose.jpg";
import body from "@/assets/body.jpg";

const programmeData = [
	{
		title: "Gut Reboot",
		image: gut,
		duration: 12,
		description:
			"A transformative programme designed to reset your gut—the epicentre of your immunity, mood, and metabolism. This programme goes beyond basic digestion to address the root causes of bloating, food sensitivities, and chronic fatigue. Using our proven 5R Strategy, we create a personalized blueprint to weed out pathogens and reseed your gut for total wellness.",
		tag: "12-Week Microbiome Restoration",
		features: [
			"Blood report analysis to identify key imbalances",
			"Understanding gut physiology and root-cause triggers",
			"Weeding, Seeding & Feeding strategy for microbiome restoration",
			"Customized diet plan tailored to your gut & goals",
			"Weekly workout plan design",
			"Defined metabolic health parameters to track progress",
			"Weekly 30-minute follow-up sessions",
		],
		internalRoute: "/services/gut-reset-programme",
	},
	{
		title: "Glucose Biohacking",
		image: glucose,
		duration: 14,
		description:
			"A 14-week science-driven programme designed to reverse diabetes by addressing its true root causes—insulin resistance, chronic inflammation, and gut imbalances. This personalized approach goes beyond medication-based symptom control, empowering you with customized nutrition, gut restoration, movement and circadian optimization to achieve sustainable diabetes reversal.",
		tag: "14-Week Diabetes Reversal",
		features: [
			"Blood report analysis to identify metabolic imbalances",
			"Comprehensive lifestyle review using the Diabetes Care Model",
			"Understanding physiological mechanisms behind diabetes",
			"Customized diet plan for metabolic healing",
			"Individually tailored weekly workout plan",
			"Defined metabolic health parameters for progress tracking",
			"Weekly 30-minute follow-up sessions throughout the programme",
		],
		internalRoute: "/services/glucose-biohacking",
	},
	{
		title: "Body Transformation",
		image: body,
		duration: 12,
		description:
			"A holistic 12-week programme designed to support sustainable inch loss and weight management through the integrative power of the five pillars of lifestyle — Nutrition, Exercise, Sleep, Gut Health, and Emotional Stability. Rooted in both traditional Ayurvedic wisdom and modern science, this approach goes beyond calorie counting to help you reset your metabolism, and improve overall physical and mental well-being.",
		features: [
			"Lifestyle assessment through the 5 Pillars framework",
			"Detailed blood report analysis",
			"Personalized diet plan tailored to food preferences and clinical conditions",
			"Weekly workout plan designed for sustainable fat loss",
			"Defined metabolic health parameters for progress tracking",
			"Weekly 30-minute follow-up sessions",
		],
		internalRoute: "/services/body-transformation",
	},
];

const Services = () => {
	return (
		<div className="min-h-screen py-8">
			<div className="container mx-auto px-4">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-12"
				>
					<h1
						style={{ fontFamily: "Inter, sans-serif", fontWeight: "bold", color: "#444444" }}
						className="font-heading font-semibold text-[50px] md:text-[50px] mx-auto max-w-3xl text-center mb-4 tracking-tight leading-[1.1]"
					>
						Biohack to Heal: Specialized Results-Driven Programmes
					</h1>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
						Choose your path to lasting transformation with science-backed protocols designed to hack your biology and reclaim your health.
					</p>
				</motion.div>

				{/* Programmes Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{programmeData.map((programme, index) => {
						const isInternal = !!programme.internalRoute;
						const cardContent = (
							<Card className={`overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow ${(isInternal) ? "cursor-pointer hover:ring-2 hover:ring-primary" : ""}`}>
								{/* Image */}
								<div className="aspect-video relative overflow-hidden">
									<img
										src={programme.image}
										alt={programme.title}
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
										loading="lazy"
										decoding="async"
										fetchPriority="low"
									/>
								</div>

								{/* Content */}
								<div className="p-6 flex-1 flex flex-col">
									<h3 className="font-heading font-bold text-lg mb-2 text-center">{programme.title}</h3>
									<p className="text-md font-bold text-gray-500 mb-4 text-center">{programme.tag}</p>
									<p className="text-sm text-muted-foreground mb-4 flex-1 text-center">{programme.description}</p>
									{/* Features */}
									<div className="space-y-3 mb-6">
										<h4 className="font-semibold text-sm uppercase text-muted-foreground">
											Includes:
										</h4>
										<ul className="space-y-2">
											{programme.features.map((feature, idx) => (
												<li key={idx} className="flex items-start">
													<span className="text-secondary mr-2 mt-1">✓</span>
													<span className="text-sm">{feature}</span>
												</li>
											))}
										</ul>
									</div>

									{/* CTA */}
									<div className="flex flex-col gap-2 mt-auto">
										<Button asChild className="w-full">
											<Link to="/contact">Book {programme.duration}-Week Programme</Link>
										</Button>
									</div>
								</div>
							</Card>
						);

						return (
							<motion.div
								key={programme.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
							>
								{isInternal ? (
									<Link
										to={programme.internalRoute}
										style={{ textDecoration: "none" }}
									>
										{cardContent}
									</Link>
								) : (
									cardContent
								)}
							</motion.div>
						);
					})}
				</div>

				{/* One Time Consultation CTA */}
				<div className="flex justify-center mb-16">
					<Card className="w-full max-w-5xl p-6 bg-gradient-to-r from-secondary/10 to-secondary/10 text-center shadow-lg">
						<h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: "bolder", color: "#444444" }}
						className="font-semibold text-[30px] md:text-[30px] mb-2 tracking-tight">Personalized One-Time Functional Nutrition Consultation</h1>
						<p className="mb-4 font-medium text-lg text-secondary">
							Before committing to a comprehensive recovery program, schedule a one-time functional nutrition assessment. This session is designed to evaluate your unique metabolic bio-markers, review persistent symptoms, and map out a data-driven path for your long-term root-cause healing journey.
						</p>
						<Button asChild size="lg" className="font-semibold bg-secondary hover:bg-secondary/80">
							<Link to="/contact?type=one-time-consultation">
								Book Your Expert Consultation Now
							</Link>
						</Button>
					</Card>
				</div>

				{/* Packages Section */}
				<div className="flex flex-col items-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="w-full max-w-5xl bg-gradient-to-r from-primary/10 to-accent rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-8"
					>
						<div className="flex-1 text-center md:text-left">
							<h3 className="font-heading font-bold text-2xl mb-2 text-primary">
								Prefer a Longer Commitment?
							</h3>
							<p className="text-muted-foreground mb-4">
								Unlock deeper transformation with our extended packages. Choose a 3-month or 6-month program for ongoing support, accountability, and results.
							</p>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<Button
								asChild
								size="lg"
								className="text-white font-semibold shadow-md hover:scale-105 transition-transform"
							>
								<Link to="/contact?package=3months">Book 3-Month Program</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-primary text-primary font-semibold shadow-md hover:scale-105 transition-transform"
							>
								<Link to="/contact?package=6months">Book 6-Month Program</Link>
							</Button>
						</div>
					</motion.div>
				</div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-accent rounded-2xl p-12 text-center"
				>
					<h2 className="font-heading font-bold text-3xl mb-4">
						Not Sure Which Service is Right for You?
					</h2>
					<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
						Schedule a 30-minutes Clarity Call to discuss your Health Goals.
					</p>
					<Button asChild size="lg">
						<Link to="/contact">Schedule Your Clarity Call</Link>
					</Button>
				</motion.div>
			</div>
		</div>
	);
};

export default Services;
