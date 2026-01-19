import type {  Feature, PricingPlan, service, TeamMember, Testimonial } from "./types";

export const features: Feature[] = [
  {
    icon: 'ti ti-code',
    title: 'Développement .NET & C#',
    description: 'Applications robustes en C#, .NET, WPF, ASP.NET, Web API et architectures multi-tiers.'
  },
  {
    icon: 'ti ti-layout-dashboard',
    title: 'Applications métiers complexes',
    description: 'Conception et développement de solutions métiers pour la finance, l’immobilier et l’énergie.'
  },
  {
    icon: 'ti ti-database',
    title: 'Bases de données & performance',
    description: 'SQL Server, Oracle, PostgreSQL : modélisation, optimisation, procédures stockées et traitements lourds.'
  },
  {
    icon: 'ti ti-arrows-shuffle',
    title: 'Intégration & flux de données',
    description: 'Web services WCF/REST, ETL, échanges inter-applicatifs, automatisation et synchronisation de données.'
  },
  {
    icon: 'ti ti-briefcase',
    title: 'Gestion de projet & Agile',
    description: 'Pilotage de projets, Scrum, Kanban, recueil des besoins, backlog, coordination équipes et clients.'
  },
  {
    icon: 'ti ti-cloud',
    title: 'Cloud, DevOps & Automatisation',
    description: 'Azure, CI/CD, déploiements automatisés, sécurité, scalabilité et mise en production.'
  }
];




export const services: service[] = [
  {
    icon: 'ti ti-code',
    title: 'Développement web',
    description: 'Sites et plateformes sur mesure.'
  },
  {
    icon: 'ti ti-device-mobile',
    title: 'Développement mobile',
    description: 'Applications iOS et Android.'
  },
  {
    icon: 'ti ti-artboard',
    title: 'UI / UX Design',
    description: 'Interfaces claires et efficaces.'
  },
  {
    icon: 'ti ti-database',
    title: 'CRM sur mesure',
    description: 'Outils adaptés à vos processus.'
  },
  {
    icon: 'ti ti-plug-connected',
    title: 'Intégrations',
    description: 'APIs, paiements et outils métiers.'
  },
  {
    icon: 'ti ti-settings',
    title: 'Maintenance & support',
    description: 'Suivi, mises à jour et évolutions.'
  }
];


export const testimonials: Testimonial[] = [
  {
    name: 'Amine B.',
    role: 'Responsable produit',
    image: 'images/team/avatar-1.jpg',
    rating: 4.8,
    review: 'Une équipe réactive et professionnelle. Le projet a été livré dans les délais avec un excellent niveau de qualité.'
  },
  {
    name: 'Sophie M.',
    role: 'CEO',
    image: 'images/team/avatar-3.jpg',
    rating: 4.7,
    review: 'Très bon accompagnement, de la conception au déploiement. Des solutions claires et efficaces.'
  },
  {
    name: 'Karim L.',
    role: 'Directeur IT',
    image: 'images/team/avatar-5.jpg',
    rating: 4.6,
    review: 'Code propre, communication fluide et respect des engagements. Une collaboration de confiance.'
  },
  {
    name: 'Nadia R.',
    role: 'Fondatrice',
    image: 'images/team/avatar-6.jpg',
    rating: 4.7,
    review: 'Une vraie compréhension de nos besoins et une solution parfaitement adaptée à notre activité.'
  }
];


export const teamMembers: TeamMember[] = [
  {
    name: 'Lounis HAND OUYAHIA',
    role: 'Founder',
    image: 'images/team/user-1.png',
    linkedin: 'https://www.linkedin.com/company/hand-it/'
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