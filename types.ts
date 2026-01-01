
export interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface EventSpace {
  name: string;
  description: string;
  capacity: string;
  features: string[];
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
