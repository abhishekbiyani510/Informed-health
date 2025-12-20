import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Microscope, Target, Search, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import GlucoseImage from "@/assets/diabetes-reversal.jpg";

const GlucoseBiohacking = () => {
	const programmeSteps = [
		"Study your Blood Reports",
		"Review your Current Lifestyle from Perspective of Diabetes Care Model",
		"Understand the Physiological Mechanisms in Diabetes",
		"Discuss Strategies for Stabilizing Blood Sugar Fluctuations",
		"Plan a Customized Diet Plan",
		"Design a Weekly Workout",
		"Define Metabolic Health Parameters to track Progress",
	];

	const programmeFeatures = [
		{
			title: "Blood Report Analysis",
			icon: Microscope,
			description: "In-depth analysis of your blood work",
		},
		{
			title: "Reversal Goal Mapping",
			icon: Target,
			description: "Clear diabetes reversal goals",
		},
		{
			title: "Root Cause Analysis",
			icon: Search,
			description: "Understand insulin resistance triggers",
		},
		{
			title: "Customized Meal Plan",
			icon: UtensilsCrossed,
			description: "Personalized nutrition strategy",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section with Image */}
			<section className="relative h-[60vh] sm:h-[70vh] flex items-center overflow-hidden">
				<img
					src={GlucoseImage}
					alt="Diabetes Reversal"
					className="absolute inset-0 w-full h-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-black/60" />

				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-3xl mx-auto text-center space-y-6 text-white">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							<h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
								Diabetes Reversal Programme
							</h1>

							<div className="mt-3">
								<p className="font-heading font-semibold text-lg sm:text-xl text-white/90">
									Step into a
								</p>

								<p className="mt-2 font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto" style={{ color: "#6cc52e", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
									Medicine-Free, Needle-Free, Stress-Free Life
								</p>
							</div>

							<p className="mt-12 text-lg sm:text-xl text-primary bg-white/90 inline-block px-4 py-2 rounded-sm font-semibold">
								Duration - 14 Weeks
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Overview Section */}
			<section className="py-12 sm:py-16 md:py-20">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-5xl mx-auto"
					>
						<motion.h2
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}
							viewport={{ once: true }}
							className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-center"
							style={{ fontFamily: "Inter, sans-serif", color: "#444444" }}
						>
							A Root-Cause Approach to Diabetes Reversal
						</motion.h2>

						<div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
							<motion.p
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
								viewport={{ once: true }}
								className="text-center font-semibold"
							>
								Diabetes today is identified as the global killer that plagues millions of people from all age groups across the world. It is estimated that by 2045 more than 135 million people will have diabetes.
							</motion.p>

							<motion.p
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.3 }}
								viewport={{ once: true }}
								className="text-center"
							>
								Modern medical treatment fails to reverse diabetes because it focuses primarily on regulating blood sugar with medication, often overlooking the deeper issues—chronic inflammation, insulin resistance, and gut health imbalance. While medications can lower blood sugar levels, they do not address the root cause, leaving people dependent on lifelong prescriptions while the disease progresses silently, leading to complications and medication-related side effects.
							</motion.p>

							<motion.p
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4 }}
								viewport={{ once: true }}
								className="text-center"
							>
								However, diabetes is not the same for everyone, and a one-size-fits-all approach does not work. Every individual has a unique metabolic profile, gut health status, and lifestyle factors that influence their ability to reverse insulin resistance. This is why personalization is key.
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 }}
								viewport={{ once: true }}
								className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary mt-8"
							>
								<h3 className="font-heading font-semibold text-lg mb-4" style={{ color: "#444444" }}>
									A Customized, Science-Driven Approach
								</h3>
								<p className="text-base mb-4">
									Glucose Biohacking is an integrative, tailored approach that goes beyond symptom control to target insulin resistance at its core. It adapts to each individual, focusing on:
								</p>
								<div className="space-y-3">
									{[
										"Personalized Nutrition & Mindful Eating – No extreme diets. A customized food strategy that stabilizes blood sugar and supports metabolic healing.",
										"Gut Health Restoration – Strengthening digestion, balancing the microbiome, and reducing inflammation for improved insulin sensitivity.",
										"Smart Movement & Activity – The right exercise based on individual needs to enhance glucose metabolism and long-term fitness.",
										"Stress Resilience & Emotional Well-Being – Managing stress hormones to prevent further insulin resistance and metabolic dysfunction.",
										"Circadian Alignment & Restorative Sleep – Optimizing sleep and daily rhythms to support cellular healing and hormone balance.",
									].map((item, idx) => (
										<motion.div
											key={idx}
											initial={{ opacity: 0, x: 10 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.5 + idx * 0.05 }}
											viewport={{ once: true }}
											className="flex items-start gap-3"
										>
											<CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
											<p className="text-base">{item}</p>
										</motion.div>
									))}
								</div>
							</motion.div>

							<motion.p
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.8 }}
								viewport={{ once: true }}
								className="text-center italic font-semibold mt-12 text-lg"
							>
								By working with your body, not against it, Glucose Biohacking provides a customized pathway to naturally reset metabolism, reverse diabetes, and break free from medications—each time, every time. Because true healing isn't about controlling diabetes—it's about reversing it.
							</motion.p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Programme Breakdown Section */}
			<section className="py-12 sm:py-16 md:py-20 bg-muted">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-5xl mx-auto"
					>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-center" style={{ color: "#444444", fontFamily: "Inter, sans-serif" }}>
							In this Programme we will:
						</h2>

						<div className="space-y-4 mb-12">
							{programmeSteps.map((step, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: idx * 0.08 }}
									viewport={{ once: true }}
									className="group relative"
								>
									<div className="absolute left-6 top-12 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" style={{ display: idx === programmeSteps.length - 1 ? "none" : "block" }} />

									<div className="flex gap-6 items-start">
										<div className="relative flex flex-col items-center flex-shrink-0">
											<div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
												<span className="font-heading font-bold text-white">{idx + 1}</span>
											</div>
										</div>

										<div className="flex-1 pt-1">
											<div className="bg-white p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group-hover:shadow-lg">
												<p className="text-base font-medium text-gray-700">{step}</p>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>

						<div className="bg-white p-4 rounded-lg shadow-md text-center">
							<p className="text-muted-foreground text-lg font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
								There will be weekly follow up sessions (30 mins) for the duration of the programme
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Programme Features */}
			<section className="py-12 sm:py-16 md:py-20">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-5xl mx-auto"
					>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-center" style={{ color: "#444444", fontFamily: "Inter, sans-serif" }}>
							What You Get
						</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{programmeFeatures.map((feature, idx) => {
								const IconComponent = feature.icon;
								return (
									<motion.div
										key={idx}
										initial={{ opacity: 0, scale: 0.9, y: 15 }}
										whileInView={{ opacity: 1, scale: 1, y: 0 }}
										transition={{ delay: idx * 0.1 }}
										viewport={{ once: true }}
										className="bg-gradient-to-br from-primary/10 to-primary/5 border-l-4 border-primary p-6 rounded-lg text-center hover:shadow-md transition-shadow flex flex-col items-center justify-center"
									>
										<IconComponent className="text-primary mx-auto mb-4" size={40} />
										<h3 className="font-heading font-semibold text-base" style={{ color: "#444444" }}>
											{feature.title}
										</h3>
									</motion.div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 sm:py-16 md:py-20 bg-muted">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto text-center"
					>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6" style={{ color: "#444444", fontFamily: "Inter, sans-serif" }}>
							Ready to Reverse Your Diabetes?
						</h2>
						<p className="text-muted-foreground text-lg mb-8">
							Join our 14-week Glucose Biohacking Programme and break free from medication dependence.
						</p>
						<Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-md text-[20px]">
							<Link to="/contact?service=glucose-biohacking" className="flex items-center justify-center gap-2">
								Register Now <ArrowRight size={20} />
							</Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default GlucoseBiohacking;
