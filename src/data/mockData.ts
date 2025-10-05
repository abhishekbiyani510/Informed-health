// Mock data structure that would typically come from a MongoDB database

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
    title: "Gut Health Masterclass",
    description: "Learn the fundamentals of gut health and how it impacts your overall wellness. Discover practical strategies for improving digestion and boosting immunity.",
    date: "2025-11-15",
    duration: "3 hours",
    price: 2999,
    image: "../../public/food.jpg",
    capacity: 30,
    enrolled: 18,
  },
  {
    id: "2",
    title: "Anti-Inflammatory Diet Workshop",
    description: "Explore the science of inflammation and learn how to create meal plans that reduce inflammation and promote healing.",
    date: "2025-11-22",
    duration: "4 hours",
    price: 3499,
    image: "../../public/food.jpg",
    capacity: 25,
    enrolled: 12,
  },
  {
    id: "3",
    title: "Hormone Balance Through Nutrition",
    description: "Understand the connection between nutrition and hormonal health. Learn dietary strategies to balance hormones naturally.",
    date: "2025-12-05",
    duration: "3.5 hours",
    price: 3299,
    image: "../../public/food.jpg",
    capacity: 20,
    enrolled: 8,
  },
  {
    id: "4",
    title: "Plant-Based Nutrition Essentials",
    description: "Master the art of plant-based eating with complete nutritional guidance for optimal health and vitality.",
    date: "2025-12-12",
    duration: "3 hours",
    price: 2799,
    image: "../../public/food.jpg",
    capacity: 35,
    enrolled: 22,
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
    image: "../../public/About-image.jpg",
  },
  {
    id: "2",
    name: "Rahul Mehta",
    role: "Business Owner",
    content: "The gut health workshop was eye-opening. Madhavi's expertise and approachable teaching style made complex topics easy to understand.",
    rating: 5,
    image: "../../public/About-image.jpg",
  },
  {
    id: "3",
    name: "Anita Desai",
    role: "Yoga Instructor",
    content: "I've recommended Madhavi to all my students. Her holistic approach to nutrition complements my yoga practice perfectly.",
    rating: 5,
    image: "../../public/About-image.jpg",
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
    title: "One-on-One Consultations",
    description: "Personalized nutrition counseling tailored to your unique health goals and challenges.",
    features: [
      "Comprehensive health assessment",
      "Customized meal plans",
      "Ongoing support and adjustments",
      "Follow-up consultations",
    ],
    icon: "user",
  },
  {
    id: "2",
    title: "Gut Health Programs",
    description: "Specialized programs to heal and optimize your digestive system for better overall health.",
    features: [
      "Gut microbiome analysis",
      "Elimination diet protocols",
      "Supplement recommendations",
      "Lifestyle modification guidance",
    ],
    icon: "heart",
  },
  {
    id: "3",
    title: "Hormone Balance Therapy",
    description: "Natural approaches to balancing hormones through nutrition and lifestyle modifications.",
    features: [
      "Hormonal health assessment",
      "Cycle-syncing nutrition",
      "Stress management strategies",
      "Lab review and interpretation",
    ],
    icon: "activity",
  },
  {
    id: "4",
    title: "Corporate Wellness",
    description: "Comprehensive wellness programs designed for workplace health and productivity.",
    features: [
      "Group workshops",
      "Nutrition seminars",
      "Health screenings",
      "Customized corporate plans",
    ],
    icon: "briefcase",
  },
];
