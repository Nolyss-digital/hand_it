import type { PricingPlan, Service, TeamMember, Testimonial } from "./types";

export const services: Service[] = [
  {
    title: 'ENGIE – Projet STARSHIP (GEM IS)',
    description: 'Pilotage et développement d’une application critique de dispatching gaz : gestion en temps réel des capacités de transport et de stockage, calculs asynchrones et exposition des données via APIs pour application web Angular.',
    icon: 'ti-gas-station',
    link: '#!',
    bgClass: 'bg-primary bg-shape',
    textClass: 'text-white'
  },
  {
    title: 'La Française AM – Projet YARIS',
    description: 'Application de gestion immobilière pour les gestionnaires de biens : actifs, baux, locataires et assurances, basée sur une architecture WPF MVVM avec Entity Framework et reporting SSRS.',
    icon: 'ti-building-estate',
    link: '#!',
    textClass: 'text-muted'
  },
  {
    title: 'La Française AM – Projet INDICO',
    description: 'Plateforme back-office d’industrialisation des processus financiers et comptables : automatisation des souscriptions, distributions, génération documentaire et flux SEPA.',
    icon: 'ti-settings-automation',
    link: '#!',
    textClass: 'text-muted'
  }
];



export const teamMembers: TeamMember[] = [
  {
    name: 'Kenneth Simpson',
    role: 'CEO/Founder',
    imageUrl: '/images/team/user-1.jpg'
  },
  {
    name: 'James Peck',
    role: 'Founder',
    imageUrl: '/images/team/user-3.jpg'
  },
  {
    name: 'Tina F. Yates',
    role: 'Web Developer',
    imageUrl: '/images/team/user-2.jpg'
  },
  {
    name: 'Sidney J. Long',
    role: 'Web Designer',
    imageUrl: '/images/team/user-4.jpg'
  }
];

export const testimonials: Testimonial[] = [
  {
    rating: 4.7,
    text: `"Skywave has completely transformed the way we operate. The user-friendly interface and seamless integration with our existing tools have saved us countless hours of work. The support team is incredibly responsive and always goes above and beyond to help us. We've tried other solutions, but nothing compares to the efficiency and reliability of this software. It’s truly the best investment we've made for our business!"`,
    name: 'Danilo Tanic',
    position: 'Head of Design at Paypal',
    avatar: '/images/team/avatar-8.jpg'
  },
  {
    rating: 4.4,
    text: `"Company is a game-changer for our team. The intuitive design and powerful features have streamlined our processes and boosted our productivity. The onboarding process was smooth, thanks to the excellent training and support provided by the team. We’ve seen significant improvements in our workflow since implementing this software. I highly recommend it to anyone looking to enhance their operations."`,
    name: 'Samuel Kane',
    position: 'Project Manager at Shopify',
    avatar: '/images/team/avatar-5.jpg'
  },
  {
    rating: 4.6,
    text: `"Team has exceeded our expectations in every way. From the moment we started using it, our productivity soared, and tasks that used to take hours are now completed in minutes. The customer support is outstanding—always quick to respond and incredibly helpful. This software has become an indispensable part of our daily operations, and we can't imagine working without it."`,
    name: 'James Arthur',
    position: 'Senior Manager at Amazon',
    avatar: '/images/team/avatar-3.jpg'
  },
  {
    rating: 4.9,
    text: `"Skywave has been a total game-changer for our business. The ease of use and the flexibility it offers have allowed us to customize our workflow like never before. The regular updates and new features keep us ahead of the curve, and the support team is always there when we need them. We've seen a remarkable improvement in our team's efficiency, and I can't recommend this software enough."`,
    name: 'Olga D. Ward',
    position: 'Sales Manager',
    avatar: '/images/team/avatar-4.jpg'
  }
];

export const plans: PricingPlan[] = [
  {
    name: 'Basic',  
    price: 20.99,
    duration: 'Month',
    savings: 'Save 50%',
    description: '1 Month Free',
    badge: 'bg-success-subtle text-success',
    buttonClass: 'btn-primary'
  },
  {
    name: 'Advanced',
    price: 80.99,
    duration: 'Month',
    savings: 'Save 60%',
    description: '1 Month Free',
    badge: 'bg-success-subtle text-success',
    buttonClass: 'btn-info'
  }
];