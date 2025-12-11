export type serviceType = {
  title: string;
  description: string;
  options: number;
  icon: string
}

export type TestimonialType = {
  avatar: string;
  description: string;
  name: string;
  position: string;
  logo: string;
}

export type TeamMember = {
  avatar: string;
  name: string;
  position: string;
  description: string;
  socialLinks: {
    twitter: string;
    facebook: string;
    linkedin: string;
  };
}

export type PricingPlan = {
  name: string;
  price: number;
  priceDuration: string;
  discount: string;
  description: string;
  features: string[];
  buttonLabel: string;
  isPopular?: boolean;
}

