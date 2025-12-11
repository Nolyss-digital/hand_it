import type { ApproachStep, Feature, PricingPlan, Service, TeamMember, Testimonial } from "./types";

export const approachSteps: ApproachStep[] = [
  {
    icon: 'ti ti-chess-king fs-3',
    title: 'Strategy',
    description: 'Our digital marketing packages are tailored specifically for residential and commercial painting companies.'
  },
  {
    icon: 'ti ti-shareplay fs-3',
    title: 'Deploy',
    description: 'We build custom websites optimized for lead generation and pair it with bulletproof SEO and PPC campaigns.'
  },
  {
    icon: 'ti ti-message-2-cog fs-3',
    title: 'Measure',
    description: 'Call tracking and website analytics are used to generate reports you can actively monitor.'
  }
];

export const features: Feature[] = [
  {
    icon: 'ti ti-alarm fs-3',
    title: 'Accomplish tasks swiftly with online tools.',
    description: 'Get quoted and covered in under 10 minutes online. No paperwork or waiting anymore.',
    link: '#!',
    hasShape: true,
  },
  {
    icon: 'ti ti-report-analytics fs-3',
    title: 'Improved technology yields greater value',
    description: 'We\'ve eliminated old analogue processes with state-of-the-art tech.',
    link: '#!'
  },
  {
    icon: 'ti ti-chart-pie fs-3',
    title: 'Build wealth with insurance planning',
    description: 'Every life plan policy has a built-in wealth bonus, and we contribute too.',
    link: '#!'
  }
];

export const services: Service[] = [
  {
    icon: 'ti ti-artboard fs-3',
    title: 'Digital Design',
    description: 'It is a long established fact that a reader will be distracted by the content of a page when looking at its layout.'
  },
  {
    icon: 'ti ti-palette fs-3',
    title: 'Unlimited Colors',
    description: 'The European languages are members of the same family. Their separate existence is a myth music, sport.'
  },
  {
    icon: 'ti ti-section fs-3',
    title: 'Strategy Solutions',
    description: 'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed.'
  },
  {
    icon: 'ti ti-headset fs-3',
    title: 'Awesome Support',
    description: 'The wonderful serenity has taken of my these sweet mornings of spring which enjoy with my whole heart.'
  },
  {
    icon: 'ti ti-box-multiple-0 fs-3',
    title: 'Truly Multipurpose',
    description: 'It showed a lady fitted out with a fur hat and boa who sat upright a heavy fur muff that covered the whole.'
  },
  {
    icon: 'ti ti-table-options fs-3',
    title: 'Easy to customize',
    description: 'The languages only differ in their grammar, their and their most common why a new common language.'
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: '"I couldn\'t be more thrilled with the experience I had with Skywave. The team was incredibly responsive."',
    name: 'Dorothy C. Swarts',
    role: 'Design Lead',
    avatar: 'images/team/avatar-1.jpg',
    rating: 3.5
  },
  {
    quote: '"I had the pleasure of working with Skywave, and it was an experience like no other. The level of professionalism."',
    name: 'Allyson Robi',
    role: 'Project Lead',
    avatar: 'images/team/avatar-2.jpg',
    rating: 4.5
  },
  {
    quote: '"Choosing Skywave was one of the best decisions I\'ve ever made. From start to finish, the experience."',
    name: 'Samuel Kane',
    role: 'Developer',
    avatar: 'images/team/avatar-3.jpg',
    rating: 4.2
  },
  {
    quote: '"Working with Skywave has been an absolute game-changer. Their innovative approach and cutting-edge."',
    name: 'Hazel S. Rutt',
    role: 'Manager',
    avatar: 'images/team/avatar-4.jpg',
    rating: 4.7
  },
  {
    quote: '"I am thrilled with my experience with Skywave. Their exceptional service and attention to detail."',
    name: 'Kenneth Moore',
    role: 'Design Lead',
    avatar: 'images/team/avatar-5.jpg',
    rating: 4.1
  },
  {
    quote: '"Thanks to Skywave, I feel more informed and confident about my investment decisions than ever before."',
    name: 'John Johnson',
    role: 'Design Lead',
    avatar: 'images/team/avatar-6.jpg',
    rating: 4.6
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'James L. Cox',
    role: 'CEO',
    avatar: 'images/team/avatar-8.jpg',
    link: '#!'
  },
  {
    name: 'Kim D. Smith',
    role: 'Founder',
    avatar: 'images/team/avatar-1.jpg',
    link: '#!'
  },
  {
    name: 'Angela Gingr',
    role: 'Co-Founder',
    avatar: 'images/team/avatar-2.jpg',
    link: '#!'
  },
  {
    name: 'John K. Myers',
    role: 'Developer',
    avatar: 'images/team/avatar-3.jpg',
    link: '#!'
  },
  {
    name: 'Albert J. Pass',
    role: 'Manager',
    avatar: 'images/team/avatar-5.jpg',
    link: '#!'
  },
  {
    name: 'Lester Meha',
    role: 'Team Lead',
    avatar: 'images/team/avatar-7.jpg',
    link: '#!'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Monthly Pass',
    price: 20.99,
    period: 'Month',
    discount: '20% Off',
    features: [
      'Account Aggregation',
      'Expense Tracking',
      'Budgeting Tools',
      'Transaction Insights',
      'Basic Security'
    ],
    buttonText: 'Get Started',
    description: 'We offer a variety of pricing plans designed to suit different needs and budgets.'
  },
  {
    name: 'Yearly Pass',
    price: 200.99,
    period: 'Year',
    discount: '20% Off',
    features: [
      'Account Aggregation',
      'Priority Support',
      'Budgeting Tools',
      'Premium Widgets',
      'Advanced Security'
    ],
    buttonText: 'Get Started',
    description: 'We offer a variety of pricing plans designed to suit different needs and budgets.'
  }
];