// lib/mock-data.ts

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  duration: string;
  icon: string;
}

export interface Package {
  id: string;
  name: string;
  includedServices: string[];
  originalPrice: string;
  discountPrice: string;
  featured: boolean;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  experience: string;
  skills: string[];
  bio: string;
}

export interface GalleryImage {
  id: string;
  alt: string;
  width: number;
  height: number;
  placeholder: string; // Tailwind bg class color like bg-grey-goose or bg-pink-daisy
}

export interface BeforeAfterPair {
  id: string;
  serviceCategory: string;
  description: string;
  beforeAlt: string;
  afterAlt: string;
  beforeColor: string;
  afterColor: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  feedback: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Branch {
  name: string;
  address: string;
  phone: string;
  email: string;
  openingHours: string[];
  googleMapsEmbedUrl: string;
}

export const services: Service[] = [
  {
    id: "serv-1",
    name: "Royal Hair Couture",
    description: "Tailored luxury cut, master color profiling, and deep molecular botanical treatment for healthy shine.",
    category: "Hair",
    price: "Rs. 12,500",
    duration: "90 Mins",
    icon: "Scissors"
  },
  {
    id: "serv-2",
    name: "Aura Glow Facial",
    description: "Multivitamins infusion, micro-current tissue lifting, and soothing organic clay detoxification mask.",
    category: "Facial",
    price: "Rs. 9,000",
    duration: "60 Mins",
    icon: "Sparkles"
  },
  {
    id: "serv-3",
    name: "Red Carpet Makeup",
    description: "High-definition photo-friendly, skin tone airbrush application, and expressive contour highlight.",
    category: "Makeup",
    price: "Rs. 18,000",
    duration: "75 Mins",
    icon: "Brush"
  },
  {
    id: "serv-4",
    name: "Lotus Elixir Manicure",
    description: "Warm herbal bath, gentle dual exfoliation, structural shaping, and premium non-toxic gel coating.",
    category: "Nails",
    price: "Rs. 7,500",
    duration: "45 Mins",
    icon: "Hand"
  },
  {
    id: "serv-5",
    name: "Sensing Skin Repair",
    description: "Advanced hydration therapy with hyaluronic active ingredients and calming cold compress jade roller.",
    category: "Skin Care",
    price: "Rs. 14,000",
    duration: "80 Mins",
    icon: "Leaf"
  },
  {
    id: "serv-6",
    name: "The Bridal Elegance",
    description: "Exclusive full day bespoke consultation, hair styling, traditional or modern makeup custom to your gown.",
    category: "Bridal",
    price: "Rs. 45,000",
    duration: "180 Mins",
    icon: "Crown"
  }
];

export const packages: Package[] = [
  {
    id: "pkg-1",
    name: "Aura Express Refresh",
    includedServices: ["Royal Hair Couture", "Lotus Elixir Manicure"],
    originalPrice: "Rs. 20,000",
    discountPrice: "Rs. 16,500",
    featured: false
  },
  {
    id: "pkg-2",
    name: "The Crown Signature",
    includedServices: ["Royal Hair Couture", "Aura Glow Facial", "Lotus Elixir Manicure"],
    originalPrice: "Rs. 29,000",
    discountPrice: "Rs. 22,000",
    featured: true
  },
  {
    id: "pkg-3",
    name: "Ultimate Bridal Sanctuary",
    includedServices: ["The Bridal Elegance", "Sensing Skin Repair", "Aura Glow Facial"],
    originalPrice: "Rs. 68,000",
    discountPrice: "Rs. 55,500",
    featured: false
  }
];

export const artists: Artist[] = [
  {
    id: "art-1",
    name: "Shalini de Silva",
    role: "Master Hair Couture Specialist",
    experience: "12 Years",
    skills: ["Precision Cuts", "Balayage", "Molecular Repair"],
    bio: "Trained in London, Shalini is known for modern, bespoke styling that sculpts to individual lifestyles."
  },
  {
    id: "art-2",
    name: "Minura Perera",
    role: "Dermatological Facial Therapist",
    experience: "9 Years",
    skills: ["Lymphatic Lift", "Hydra Tech", "Collagen Infusions"],
    bio: "Minura focuses on holistic, biology-aligned processes to unlock deep, organic cellular radiance."
  },
  {
    id: "art-3",
    name: "Kavindi Ranasinghe",
    role: "Lead Bridal & Makeup Visualist",
    experience: "14 Years",
    skills: ["Airbrushing", "Contour Profiling", "Portfolio Prep"],
    bio: "Bridal editor specialized in rendering sophisticated elegance suited for high-density photography."
  },
  {
    id: "art-4",
    name: "Amanie Wickramasinghe",
    role: "Precision Executive Nail Architect",
    experience: "7 Years",
    skills: ["Dual Exfoliation", "Gel Artistry", "Hand Health"],
    bio: "Amanie blends intricate contemporary art styling with traditional hand care treatments."
  }
];

// 24 items total to meet the /gallery constraints exactly
export const galleryImages: GalleryImage[] = Array.from({ length: 24 }).map((_, index) => {
  const categories = ["Hair", "Facial", "Makeup", "Nails", "Skin Care", "Bridal"];
  const category = categories[index % categories.length];
  const isGoose = index % 2 === 0;
  return {
    id: `gal-${index + 1}`,
    alt: `Colombo ${category} Portfolio Elite Client Selection ${index + 1}`,
    width: 600,
    height: 600,
    placeholder: isGoose ? "bg-grey-goose" : "bg-pink-daisy"
  };
});

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "ba-1",
    serviceCategory: "Hair Color & Repair",
    description: "Brassiness completely neutralized and repaired with molecular protein restructuring.",
    beforeAlt: "Strained Brassy Yellow Damage Hair Profile Page",
    afterAlt: "Soft Silky Radiant Cool Ash Gold Finish Cut",
    beforeColor: "bg-grey-goose",
    afterColor: "bg-pink-daisy"
  },
  {
    id: "ba-2",
    serviceCategory: "Aura Radiance Sculpt",
    description: "Eliminated profound dullness through intensive skin cell exfoliation and hyaluronic active restoration.",
    beforeAlt: "Fatigued Shadowed Face Pre-Treatment Contour",
    afterAlt: "Hydrated Glossy Luminous Uniform Face Glow",
    beforeColor: "bg-pink-daisy",
    afterColor: "bg-grey-goose"
  },
  {
    id: "ba-3",
    serviceCategory: "Bridal Contour & Tone",
    description: "Softened skin texture blemishes and unlocked uniform elegance matching natural light.",
    beforeAlt: "Clogged Uneven Complexion Contour",
    afterAlt: "Exquisite Flawless Airbrush Velvet Radiant Finish",
    beforeColor: "bg-grey-goose",
    afterColor: "bg-pink-daisy"
  },
  {
    id: "ba-4",
    serviceCategory: "Structural Nail Sculpting",
    description: "Rescued dry, bitten cuticles via cellular herbal infusion and smooth fiberglass extensions.",
    beforeAlt: "Dehydrated Splintered Oval Nail Surface",
    afterAlt: "Symmetrical Perfectly Finished Lotus Gel",
    beforeColor: "bg-pink-daisy",
    afterColor: "bg-grey-goose"
  }
];

export const offers: Offer[] = [
  {
    id: "off-1",
    title: "Midweek Opulence Rest",
    description: "Indulge in any Facial or Skin therapy on Tuesday - Thursday and unlock premium molecular hair treatments.",
    discount: "20% OFF",
    validUntil: "July 31, 2026"
  },
  {
    id: "off-2",
    title: "The Bridals Suite Luxury",
    description: "Secure your bridal or maid-of-honor makeup package 3 months ahead and earn complete pedicure sets.",
    discount: "Free Nail Spa",
    validUntil: "August 15, 2026"
  },
  {
    id: "off-3",
    title: "First Radiance Selection",
    description: "Begin your personal care journey with Aura. Save on initial hair and facial skin configurations.",
    discount: "Rs. 2,500 Saver",
    validUntil: "Ongoing Promo"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    customerName: "Ranmali Gunawardena",
    feedback: "The Aura Glow Facial completely redefined my skin. No redness, just an immediate supple feel that lasted weeks. Colombo's ultimate skin experience.",
    rating: 5
  },
  {
    id: "test-2",
    customerName: "Dinusha Senanayake",
    feedback: "Kavindi and her bridal team were incredible. Professional posture, timely execution, and makeup that did not budge in our humid Colombo heat.",
    rating: 5
  },
  {
    id: "test-3",
    customerName: "Michelle Dias",
    feedback: "Pure hair craftsmanship! Shalini analyzed my curls with genuine professional understanding instead of standard templates. Spectacular result.",
    rating: 5
  },
  {
    id: "test-4",
    customerName: "Priyantha Jayasinghe",
    feedback: "A serene, private temple of self-care. The custom colors and natural materials provide a space of authentic relief. The nail tech is genius.",
    rating: 5
  },
  {
    id: "test-5",
    customerName: "Amara Jayewardene",
    feedback: "The Crown Signature package is wonderful value. Three hours of sheer professional restoration. I feel completely brand new.",
    rating: 5
  },
  {
    id: "test-6",
    customerName: "Natalie Goonetilleke",
    feedback: "I appreciate the medical-grade hygiene in nail services. Glow Atelier has established outstanding benchmarks for the Colombo beauty industry.",
    rating: 5
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you recommend booking consultations first?",
    answer: "Yes, especially for hair transformations and bridal bookings. We evaluate your current skin/hair biology to customize formulas before booking the session."
  },
  {
    id: "faq-2",
    question: "Where is the Glow Atelier parlour situated in Colombo?",
    answer: "We are situated at 45 Galle Road, Colombo 03, directly in front of the Indian Ocean, providing a soothing ocean view and breeze."
  },
  {
    id: "faq-3",
    question: "Can I customize the items in the package deals?",
    answer: "Absolutely. Speak with our concierge upon reservation; we happily substitute equivalent treatments to match your specific health objectives."
  },
  {
    id: "faq-4",
    question: "What hygiene protocols are followed at Colombo branch?",
    answer: "We employ strictly medical-level dry heat autoclaves for metallic utensils, and fresh disposable elements for every client. Your safety is our benchmark."
  },
  {
    id: "faq-5",
    question: "Are your bridal makeup formulas moisture-proof for Sri Lankan climate?",
    answer: "They are completely sebum-resistant, humidity-proof formulations designed specifically to withstand Colombo's tropical weather all day."
  },
  {
    id: "faq-6",
    question: "What are your accepted methods of payment?",
    answer: "We accept Visa, Mastercard, American Express, direct electronic banking wire transfers, and popular secure local mobile payments."
  },
  {
    id: "faq-7",
    question: "Is there private parking available on-site?",
    answer: "Yes, we have 24/7 guarded private driveway parking for clients directly on our main Galle Road premise entrance."
  },
  {
    id: "faq-8",
    question: "Do you accommodate group bookings for bridal parties?",
    answer: "Yes, we reserve premium VIP chambers for bridal showers or close groups. Prior coordinates of at least 3 weeks are highly recommended."
  }
];

export const branch: Branch = {
  name: "Glow Atelier Main Suite",
  address: "45 Galle Road, Colombo 03, Sri Lanka",
  phone: "+94 11 234 5678",
  email: "reserve@glowatelier.com",
  openingHours: [
    "Monday - Friday: 09:00 AM - 07:00 PM",
    "Saturday - Sunday: 08:30 AM - 08:00 PM"
  ],
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.781682390886!2d79.84594241088484!3d6.916694693053335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25941cbf5f3b7%3A0xe7f9cb79e7c3761a!2sGalle%20Rd%2C%20Colombo!5e0!3m2!1sen!2slk!4v1719112345678!5m2!1sen!2slk"
};
