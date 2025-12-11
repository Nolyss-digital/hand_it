import type {  Feature, PricingPlan, service, TeamMember, Testimonial } from "./types";

export const features: Feature[] = [
  {
    icon: 'ti ti-apps',
    title: 'App Integration',
    description: 'Our product seamlessly integrates with various apps, allowing you to streamline your workflow and enhance productivity.'
  },
  {
    icon: 'ti ti-jump-rope',
    title: 'Workflow Builder',
    description: 'The Workflow Builder feature empowers you to create, customize, and automate tasks with ease. Design efficient workflows.'
  },
  {
    icon: 'ti ti-edit',
    title: 'Specific Tools',
    description: 'Our product comes equipped with a range of specific tools designed to enhance functionality and improve efficiency.'
  },
  {
    icon: 'ti ti-alarm',
    title: 'Lifetime Access',
    description: 'Enjoy the peace of mind that comes with Lifetime Access to our product. Once you purchase, you\'ll receive ongoing updates, support.'
  },
];

export const services: service[] = [
  {
    icon: 'ti ti-rocket',
    title: 'Start Up',
    description: "You've just launched your project, and want to minimise risk of downtime"
  },
  {
    icon: 'ti ti-briefcase',
    title: 'Business',
    description: 'You need to avoid lost revenue from a website outage'
  },
  {
    icon: 'ti ti-shopping-cart',
    title: 'E-Commerce',
    description: 'You need to keep your online retail business running 24/7.'
  },
  {
    icon: 'ti ti-artboard',
    title: 'Digital Design',
    description: 'It is a long established fact that a reader will be distracted by the readable'
  },
  {
    icon: 'ti ti-palette',
    title: 'Unlimited Colors',
    description: 'The European languages are members of the same family.'
  },
  {
    icon: 'ti ti-chess-king',
    title: 'Strategy Solutions',
    description: 'He lay on his armour-like back, and if he lifted his head a little'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Dorothy C. Swarts',
    role: 'Product Designer',
    image: 'images/team/avatar-1.jpg',
    rating: 4.7,
    review: "I've been using pagedone for a year now and it's made managing my finances so much easier and quick."
  },
  {
    name: 'Ronald S. Price',
    role: 'CEO',
    image: 'images/team/avatar-3.jpg',
    rating: 4.4,
    review: 'With pagedone, I can easily track my investments and see how they\'re performing in real-time.'
  },
  {
    name: 'Gary F. Wilson',
    role: 'Sales Manager',
    image: 'images/team/avatar-5.jpg',
    rating: 4.5,
    review: 'Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.'
  },
  {
    name: 'Elsie K. Beauc',
    role: 'Design Lead',
    image: 'images/team/avatar-6.jpg',
    rating: 4.3,
    review: 'I was hesitant to try pagedone at first, but I\'m so glad I did; it\'s exceeded all of my expectations.'
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Craig M. Landr',
    role: 'Founder',
    image: 'images/team/user-1.jpg',
    twitter: '#!',
    facebook: '#!',
    linkedin: '#!'
  },
  {
    name: 'Amanda J. Velaz',
    role: 'Co-Founder',
    image: 'images/team/user-4.jpg',
    twitter: '#!',
    facebook: '#!',
    linkedin: '#!'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: '3 Month Membership',
    description: 'Offering a free plan allows companies to showcase the value and effectiveness of their service.',
    price: 40.99,
    billing: 'Billed Every 3 Month',
    frequency: '/ Month',
    buttonText: 'Upgrade Now',
    variant: "info",
  },
  {
    name: '12 Month Membership',
    description: 'A 12-month membership typically refers to a subscription or access plan that provides benefits, services, of one year...',
    price: 20.99,
    billing: 'Billed Every Year',
    frequency: '/ Month',
    buttonText: 'Upgrade Now',
    variant: "primary",
  },
  {
    name: 'Team Membership',
    description: 'Team memberships are designed to provide access to, tools, or spaces for a group of individuals working together.',
    price: 30.99,
    billing: 'Billed Every Year',
    frequency: '/ Month',
    buttonText: 'Contact Us',
    badgeText: 'Popular',
    variant: "info",
    teamMembers: [
      'images/team/avatar-7.jpg',
      'images/team/avatar-6.jpg',
      'images/team/avatar-8.jpg',
      'images/team/avatar-9.jpg',
      'images/team/avatar-4.jpg',
      'images/team/avatar-2.jpg',
      'images/team/avatar-5.jpg',
    ],
  }
];