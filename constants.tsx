
import { TeamMember, EventSpace, FAQItem } from './types';

export const TEAM: TeamMember[] = [
  {
    name: "Christopher Grossman",
    role: "Executive Chef",
    bio: "Leader of culinary vision, focused on farm-to-table sensibilities and regenerative practices.",
    imageUrl: "https://picsum.photos/seed/chef/400/500"
  },
  {
    name: "Christian Castillo",
    role: "Executive Pastry Chef",
    bio: "Crafting seasonal desserts that highlight the bounty of our garden and local farm partners.",
    imageUrl: "https://picsum.photos/seed/pastry/400/500"
  },
  {
    name: "Emilee Durrett",
    role: "General Manager",
    bio: "Driving unpretentious elevated service with a commitment to hospitality excellence.",
    imageUrl: "https://picsum.photos/seed/gm/400/500"
  }
];

export const EVENT_SPACES: EventSpace[] = [
  {
    name: "1946 Room",
    description: "Private indoor space perfect for corporate meetings or intimate celebrations.",
    capacity: "Up to 30 guests",
    features: ["Fireplace", "Private Restrooms", "Full AV Setup"],
    imageUrl: "https://picsum.photos/seed/room1946/800/600"
  },
  {
    name: "Old Oak Terrace",
    description: "Covered outdoor space with architectural charm and year-round comfort.",
    capacity: "Up to 60 guests",
    features: ["Heaters", "Weather Adaptability", "Garden Views"],
    imageUrl: "https://picsum.photos/seed/oldoak/800/600"
  },
  {
    name: "South Terrace",
    description: "An elegant al fresco setting illuminated by string lights and the glow of the fire pit.",
    capacity: "Up to 45 guests",
    features: ["Fire Pit", "String Lights", "Casual Vibe"],
    imageUrl: "https://picsum.photos/seed/south/800/600"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is the dress code?",
    answer: "We recommend business casual for lunch and dinner. For our morning café service, casual attire is welcomed."
  },
  {
    question: "Do you offer valet parking?",
    answer: "Yes, we offer complimentary valet parking starting at 8:00 AM daily."
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Absolutely. Our culinary team is happy to accommodate allergies and dietary needs with advance notice."
  },
  {
    question: "Is the restaurant pet-friendly?",
    answer: "Dogs are welcome on select outdoor terraces. Please call ahead to confirm availability."
  },
  {
    question: "What is your corkage policy?",
    answer: "We allow outside wine with a tiered fee structure. Please contact us for current rates."
  }
];

export const FARM_PARTNERS = [
  "Tucker Farms", "Southern Swiss Dairy", "Straight from the Backyard Farm", 
  "Dayspring Farm", "Bartram Trail Farms", "Hearts Of Harvest", 
  "The Tasteful Garden", "Enchanted Springs"
];
