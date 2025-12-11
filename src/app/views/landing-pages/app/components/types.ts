export type AppDownload = {
  title: string;
  osVersion: string;
  buttonText: string;
  qrCodeImage: string;
  platformImage: string;
  link: string;
}

export type SetupStep = {
  stepNumber: number;
  title: string;
  description: string;
  imageUrl: string;
}

export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

export type PricingPlan = {
  name: string;
  description: string;
  price: number;
  offer: string;
  devicesCovered: number;
  buttonText: string;
  badgeText?: string;
  badgeClass?: string;
  icon: string;
  variant: string;
}
