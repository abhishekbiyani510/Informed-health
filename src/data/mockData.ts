import testimonialImage from "../../public/About-image.jpg"
import w1 from "@/assets/gut.jpg"
import w2 from "@/assets/diabetes.jpg"

export interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  price: number;
  image: string;
  capacity: number;
  enrolled: number;
}

export const workshops: Workshop[] = [
  {
    id: "1",
    title: "Glucose Biohacking Masterclass",
    description: "Defeat diabetes naturally without medicines using the GBH system. Learn the exact strategies that only the top 1% use to live a needle-free, pill-free, and complication-free life.",
    date: "2025-11-22",
    duration: "2 hours",
    price: 99,
    image: w2,
    capacity: 25,
    enrolled: 12,
  },
  {
    id: "2",
    title: "Gut Biohacking Masterclass",
    description: "Get permanent relief from acidity, bloating, and gas naturally without medicines. Discover proven strategies to restore digestive balance and achieve lasting wellness.",
    date: "2025-11-15",
    duration: "3 days",
    price: 299,
    image: w1,
    capacity: 20,
    enrolled: 18,
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Software Engineer",
    content: "Madhavi's personalized nutrition plan transformed my health completely. I've never felt more energetic and balanced!",
    rating: 5,
    image: testimonialImage,
  },
  {
    id: "2",
    name: "Rahul Mehta",
    role: "Business Owner",
    content: "The gut health workshop was eye-opening. Madhavi's expertise and approachable teaching style made complex topics easy to understand.",
    rating: 5,
    image: testimonialImage,
  },
  {
    id: "3",
    name: "Anita Desai",
    role: "Yoga Instructor",
    content: "I've recommended Madhavi to all my students. Her holistic approach to nutrition complements my yoga practice perfectly.",
    rating: 5,
    image: testimonialImage,
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Signs Your Gut Health Needs Attention",
    excerpt: "Discover the warning signs that indicate your digestive system needs support and what you can do about it.",
    content: "Full blog content would go here...",
    author: "Madhavi K. Sharma",
    date: "2025-10-28",
    category: "Gut Health",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "The Power of Anti-Inflammatory Foods",
    excerpt: "Learn which foods can help reduce inflammation and support your body's natural healing processes.",
    content: "Full blog content would go here...",
    author: "Madhavi K. Sharma",
    date: "2025-10-25",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "Understanding Functional Nutrition",
    excerpt: "What makes functional nutrition different and why it might be the approach you've been looking for.",
    content: "Full blog content would go here...",
    author: "Madhavi K. Sharma",
    date: "2025-10-20",
    category: "Education",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    readTime: "6 min read",
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Body Transformation",
    description:
      "A powerful 12-week transformative journey designed to help you achieve sustainable weight loss, improved energy levels, and a stronger, more confident body through science-backed nutrition and lifestyle strategies.",
    features: [
      "Comprehensive health & body composition assessment",
      "Personalized meal and fitness roadmap",
      "Weekly progress tracking & accountability",
      "Mindset coaching and lifestyle optimization",
    ],
    icon: "user",
  },
  {
    id: "2",
    title: "Gut Reboot",
    description:
      "A structured 12-week step-by-step gut healing protocol designed to restore digestive balance, reduce inflammation, and support overall wellness from the inside out.",
    features: [
      "Detailed gut health evaluation and symptom mapping",
      "Elimination and reintroduction protocol",
      "Targeted supplement & lifestyle recommendations",
      "Continuous guidance and progress tracking",
    ],
    icon: "shieldPlus",
  },
  {
    id: "3",
    title: "Diabetes Reversal",
    description:
      "A science-driven 14-week program designed to help you lower blood sugar levels, reduce dependency on medications, and achieve long-term diabetes remission through nutrition and lifestyle changes.",
    features: [
      "In-depth metabolic & blood sugar assessment",
      "Customized nutrition and lifestyle protocol",
      "Continuous blood sugar monitoring & support",
      "Sustainable strategies for long-term remission",
    ],
    icon: "activity",
  },
];
