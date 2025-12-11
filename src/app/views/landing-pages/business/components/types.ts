export type ApproachStep = {
  icon: string;
  title: string;
  description: string;
}

export type Feature = {
  icon: string;
  title: string;
  description: string;
  link: string;
  hasShape?: boolean;
}

export type Service = {
  icon: string;
  title: string;
  description: string;
}

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export type TeamMember = {
  name: string;
  role: string;
  avatar: string;
  link: string;
}

export type PricingPlan = {
  name: string;
  price: number;
  period: string;
  discount: string;
  features: string[];
  buttonText: string;
  description: string;
}