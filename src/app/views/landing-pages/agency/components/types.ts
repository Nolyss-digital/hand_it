export type Feature = {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export type Service = {
  icon: string;
  title: string;
  description: string;
  hasShape: boolean;
}

export type Project = {
  image: string;
  title: string;
  description: string;
  link: string;
}

export type TestimonialType = {
  avatar: string;
  description: string;
  name: string;
  position: string;
  logo: string;
}

export type PricingPlan = {
  title: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  bgColor: string;
  textColor: string;
}
