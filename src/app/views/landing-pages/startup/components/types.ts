export type Feature = {
  icon: string;
  title: string;
  description: string;
}

export type service = {
  icon: string;
  title: string;
  description: string;
}

export type Testimonial = {
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
}

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  // twitter: string;
  // facebook: string;
  linkedin: string;
}

export type PricingPlan = {
  name: string;
  description: string;
  price: number;
  billing: string;
  frequency: string;
  buttonText: string;
  badgeText?: string;
  teamMembers?: string[];
  variant: string
}