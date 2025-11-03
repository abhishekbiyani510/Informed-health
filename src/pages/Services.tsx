import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, ShieldPlus, Activity, Bold } from "lucide-react";
import { link } from "fs";

const programmeData = [
	{
		title: "Biohack your Gut",
		icon: User,
		description:
			"A 12-week intensive programme designed to restore gut health, improve digestion, and boost immunity. Includes personalized nutrition plans, gut-friendly recipes, and lifestyle strategies to rebalance your microbiome.",
		features: [
			"Comprehensive gut health assessment",
			"Personalized meal planning",
			"Weekly progress tracking",
			"Supplement guidance",
		],
		internalRoute: "/biohack-your-gut",
	},
	{
		title: "Glucose Biohacking",
		icon: ShieldPlus,
		description:
			"Transform your metabolic health in 12 weeks. Learn to stabilize blood sugar, reduce cravings, and optimize energy through targeted nutrition, movement, and biohacking techniques.",
		features: [
			"Continuous glucose monitoring support",
			"Low-glycemic meal plans",
			"Lifestyle & stress management",
			"Weekly coaching sessions",
		],
		internalRoute: "/glucose-biohacking",
	},
	{
		title: "Body Transformation",
		icon: Activity,
		description:
			"Achieve your body composition goals with this 12-week programme. Focuses on fat loss, muscle gain, and sustainable habits using evidence-based nutrition and fitness strategies.",
		features: [
			"Custom fitness & nutrition plans",
			"Body composition tracking",
			"Motivation & accountability",
			"Mindset coaching",
		],
		link: "https://example.com/body-transformation",
	},
	{
		title: "Women's Wellness",
		icon: Bold,
		description:
			"A 12-week programme dedicated to women's unique health needs. Balance hormones, boost energy, and support overall wellbeing with tailored nutrition and lifestyle strategies.",
		features: [
			"Hormonal balance support",
			"Cycle-synced nutrition",
			"Stress & sleep optimization",
			"Personalized coaching",
		],
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
						style={{ fontFamily: "Poppins, sans-serif", color: "#444444" }}
						className="font-heading font-semibold text-4xl md:text-4xl mb-2 tracking-tight"
					>
						Biohack to Heal Programme
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Choose from our Specialized Programmes designed to help you
						Biohack your Health and achieve lasting results.
					</p>
				</motion.div>

				{/* Programmes Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
					{programmeData.map((programme, index) => {
						const Icon = programme.icon;
						const isInternal = !!programme.internalRoute;
						const isExternal = !!programme.link;
						const cardContent = (
							<Card className={`p-6 h-full flex flex-col justify-between hover:shadow-xl transition-shadow ${(isInternal || isExternal) ? "cursor-pointer hover:ring-2 hover:ring-primary" : ""}`}>
								<div>
									<div className="flex items-start space-x-4 mb-6">
										<div className="p-2 bg-primary/10 rounded-lg">
											<Icon className="text-primary" size={24} />
										</div>
										<div className="flex-1">
											<h3 className="font-heading font-bold text-xl mb-2">
												{programme.title}
											</h3>
											<p className="text-sm text-muted-foreground">
												{programme.description}
											</p>
										</div>
									</div>
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
								</div>
								<div className="flex flex-col gap-2 mt-auto">
									<Button asChild className="w-full">
										<Link to="/contact">Book 12-Week Programme</Link>
									</Button>
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
									<a
										href={programme.internalRoute}
										target="_blank"
										rel="noopener noreferrer"
										style={{ textDecoration: "none" }}
										tabIndex={0}
									>
										{cardContent}
									</a>
								) : isExternal ? (
									<a
										href={programme.link}
										target="_blank"
										rel="noopener noreferrer"
										style={{ textDecoration: "none" }}
										tabIndex={0}
									>
										{cardContent}
									</a>
								) : (
									cardContent
								)}
							</motion.div>
						);
					})}
				</div>

				{/* One Time Consultation CTA */}
				<div className="flex justify-center mb-16">
					<Card className="w-full max-w-2xl p-6 bg-gradient-to-r from-primary/10 to-accent/10 text-center shadow-lg">
						<p className="mb-4 font-medium text-lg text-primary">
							Before you proceed, if you wish to have a one-time consultation to discuss your needs, click below:
						</p>
						<Button asChild size="lg" className="font-semibold">
							<Link to="/contact?type=one-time-consultation">
								Book One Time Consultation
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
						className="w-full max-w-4xl bg-gradient-to-r from-primary/10 to-accent rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-8"
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
