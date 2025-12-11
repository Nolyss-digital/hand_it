import type { Feature, PricingPlan, Project, Service, TestimonialType } from "./types";

export const features: Feature[] = [
  {
    title: 'App Integration',
    description: 'Our product seamlessly integrates with various apps, allowing you to streamline your workflow and enhance productivity.',
    icon: 'ti ti-apps',
    link: '#!'
  },
  {
    title: 'Workflow Builder',
    description: 'The Workflow Builder feature empowers you to create, customize, and automate tasks with ease. Design efficient workflows.',
    icon: 'ti ti-jump-rope',
    link: '#!'
  },
  {
    title: 'Specific Tools',
    description: 'Our product comes equipped with a range of specific tools designed to enhance functionality and improve efficiency.',
    icon: 'ti ti-edit',
    link: '#!'
  },
  {
    title: 'Lifetime Access',
    description: 'Enjoy the peace of mind that comes with Lifetime Access to our product. Once you purchase, you\'ll receive ongoing updates, support.',
    icon: 'ti ti-alarm',
    link: '#!'
  }
];

export const services: Service[] = [
  {
    icon: 'ti ti-device-desktop-analytics fs-1 text-primary',
    title: 'Custom Software Development',
    description: 'We understand that every business has unique needs. Our team can create custom software solutions tailored specifically.',
    hasShape: false
  },
  {
    icon: 'ti ti-webhook fs-1 text-white',
    title: 'Integration Services',
    description: 'Our software seamlessly integrates with a variety of platforms and tools. We provide integration services to ensure.',
    hasShape: true
  },
  {
    icon: 'ti ti-heart-handshake fs-1 text-primary',
    title: 'Training and Onboarding',
    description: 'We offer thorough training programs and onboarding sessions to help your team get up to speed with our software quickly.',
    hasShape: false
  },
  {
    icon: 'ti ti-message-user fs-1 text-primary',
    title: 'Consulting Services',
    description: 'Our experts provide strategic consulting to help you leverage our software for maximum benefit. We offer insights.',
    hasShape: false
  },
  {
    icon: 'ti ti-refresh-dot fs-1 text-primary',
    title: 'Updates and Maintenance',
    description: 'We continually update our software to incorporate the latest advancements and features. Our maintenance services.',
    hasShape: false
  },
  {
    icon: 'ti ti-headset fs-1 text-primary',
    title: 'Technical Support',
    description: 'Our dedicated support team is available 24/7 to assist you with any technical issues you may encounter.',
    hasShape: false
  }
];

export const projects: Project[] = [
  {
    image: 'images/mobile.png',
    title: 'Our Best Skywave App',
    description: 'We are a digital agency that specializes in web design, SEO, social media.',
    link: '#!'
  },
  {
    image: 'images/agency-services.png',
    title: 'Agency Landing Page',
    description: 'We are a digital agency that specializes in web design, SEO, social media.',
    link: '#!'
  },
  {
    image: 'images/agency-services-3.png',
    title: 'Business Landing Page',
    description: 'We are a digital agency that specializes in web design, SEO, social media.',
    link: '#!'
  }
];

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

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Starter',
    price: '$12.99',
    description: 'Start Up Starter Packs',
    features: [
      'Account Aggregation',
      'Expense Tracking',
      'Budgeting Tools',
      'Transaction Insights',
      'Basic Security'
    ],
    link: '#!',
    bgColor: 'bg-light',
    textColor: 'text-dark'
  },
  {
    title: 'Premium',
    price: '$145.99',
    description: 'Start Up Starter Packs',
    features: [
      'Account Aggregation',
      'Expense Tracking',
      'Budgeting Tools',
      'Transaction Insights',
      'Basic Security'
    ],
    link: '#!',
    bgColor: 'bg-primary',
    textColor: 'text-white'
  },
  {
    title: 'Enterprise',
    price: '$185.99',
    description: 'Start Up Starter Packs',
    features: [
      'Account Aggregation',
      'Expense Tracking',
      'Budgeting Tools',
      'Transaction Insights',
      'Basic Security'
    ],
    link: '#!',
    bgColor: 'bg-light',
    textColor: 'text-dark'
  }
];