import type { PricingPlan, serviceType, TeamMember, TestimonialType } from "./types";

export const services: serviceType[] = [
  {
    title: "Project Management",
    description: "Planning is a critical phase where project managers develop detailed plans",
    options: 30,
    icon: "ti ti-brand-asana"
  },
  {
    title: "Web & Mobile Development",
    description: "Native mobile app development involves creating applications development",
    options: 40,
    icon: "ti ti-pencil-discount"
  },
  {
    title: "Customer Support",
    description: "We provide best team and 25/7 full services Contact with chat and call",
    options: 4,
    icon: "ti ti-24-hours"
  },
  {
    title: "Human Resource",
    description: "Recruitment involves attracting and identifying qualified candidates",
    options: 22,
    icon: "ti ti-user"
  },
  {
    title: "Design & Creative",
    description: "Graphic design involves the creation of visual content to communicate",
    options: 19,
    icon: "ti ti-artboard"
  },
  {
    title: "Marketing & Communication",
    description: "Brand management involves creating, maintaining, and enhancing",
    options: 20,
    icon: "ti ti-currency"
  },
  {
    title: "Business Development",
    description: "Market research helps identify emerging opportunities, customer.",
    options: 22,
    icon: "ti ti-briefcase"
  },
]

export const testimonialSlides: TestimonialType[] = [
  {
    avatar: "images/team/avatar-8.jpg",
    description: "\"Production Online has helped me become a better musician and producer than I ever thought possible.\"",
    name: "Danilo Tanic",
    position: "Head of Design at Paypal",
    logo: "images/logo/paypal.png"
  },
  {
    avatar: "images/team/avatar-5.jpg",
    description: "\"Each of team member is getting precious help in their professional development and can build a program that.\"",
    name: "Samuel Kane",
    position: "Project Manager at Shopify",
    logo: "images/logo/shopify.png"
  },
  {
    avatar: "images/team/avatar-3.jpg",
    description: "\"Growth was implemented within minutes and it is now an essential part of our amazing development process.\"",
    name: "James Arthur",
    position: "Senior Manager at Amazon",
    logo: "images/logo/amazon.png"
  },
  {
    avatar: "images/team/avatar-4.jpg",
    description: "\"Growth was implemented within minutes and it is now an essential part of our amazing development process.\"",
    name: "James Arthur",
    position: "Senior Manager at Amazon",
    logo: "images/logo/amazon.png"
  }
]

export const teamMembers: TeamMember[] = [
  {
    avatar: 'images/team/avatar-3.jpg',
    name: 'John A. Raub',
    position: 'Founder',
    description: 'I\'ve established pagedone in 2022 and it was one of the best idea I\'ve had...',
    socialLinks: {
      twitter: '#!',
      facebook: '#!',
      linkedin: '#!',
    },
  },
  {
    avatar: 'images/team/avatar-1.jpg',
    name: 'Nora R. White',
    position: 'Co-Founder',
    description: 'The journey has been marked by forging meaningful partnerships...',
    socialLinks: {
      twitter: '#!',
      facebook: '#!',
      linkedin: '#!',
    },
  },
  {
    avatar: 'images/team/avatar-2.jpg',
    name: 'Laura A. Hatton',
    position: 'Manager',
    description: 'Every step of the way, we\'ve embraced challenges as opportunities...',
    socialLinks: {
      twitter: '#!',
      facebook: '#!',
      linkedin: '#!',
    },
  },
  {
    avatar: 'images/team/avatar-5.jpg',
    name: 'Gary E. Newman',
    position: 'Sales Lead',
    description: 'This venture represents not only a leap of faith but also a profound...',
    socialLinks: {
      twitter: '#!',
      facebook: '#!',
      linkedin: '#!',
    },
  },
  {
    avatar: 'images/team/avatar-6.jpg',
    name: 'Lorri N. Croft',
    position: 'Designer',
    description: 'Effective teams communicate openly, leverage strengths, and...',
    socialLinks: {
      twitter: '#!',
      facebook: '#!',
      linkedin: '#!',
    },
  },
  {
    avatar: 'images/team/avatar-7.jpg',
    name: 'Corey J. Comea',
    position: 'Team Leader',
    description: 'This venture represents not only a leap of faith but also a profound...',
    socialLinks: {
      twitter: '#!',
      facebook: '#!',
      linkedin: '#!',
    },
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 12.99,
    priceDuration: '/ Month',
    discount: '20% Off',
    description: 'Offering a free plan allows companies to showcase the value and effectiveness of their service.',
    features: [
      'Account Aggregation',
      'Expense Tracking',
      'Budgeting Tools',
      'Transaction Insights',
      'Basic Security'
    ],
    buttonLabel: 'Get Started'
  },
  {
    name: 'Team',
    price: 46.99,
    priceDuration: '/ Month',
    discount: '30% Off',
    description: 'We offer a variety of pricing plans designed to suit different needs and budgets.',
    features: [
      'Everything in Free',
      'Customizable Dashboards',
      'Advanced Budgeting',
      'Investment Tracking',
      'Enhanced Security'
    ],
    buttonLabel: 'Get Started',
    isPopular: true  // Mark as popular
  },
  {
    name: 'Business',
    price: 79.99,
    priceDuration: '/ Month',
    discount: '40% Off',
    description: 'We offer a range of pricing plans tailored to meet the diverse needs of businesses of all sizes.',
    features: [
      'Financial Planning Tools',
      'Priority Support',
      'Budgeting Tools',
      'Premium Widgets',
      'Advanced Security'
    ],
    buttonLabel: 'Get Started'
  }
];