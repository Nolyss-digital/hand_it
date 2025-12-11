import type { AppDownload, PricingPlan, SetupStep, TeamMember } from "./types";

export const appDownloads: AppDownload[] = [
  {
    title: 'For iOS',
    osVersion: 'iOS 15.6+',
    buttonText: 'Download App',
    qrCodeImage: 'images/qr.png',
    platformImage: 'images/apple.png',
    link: '#!'
  },
  {
    title: 'For Android',
    osVersion: 'Android 8.0+',
    buttonText: 'Download App',
    qrCodeImage: 'images/qr.png',
    platformImage: 'images/android.png',
    link: '#!'
  }
];

export const setupSteps: SetupStep[] = [
  {
    stepNumber: 1,
    title: 'Download Our Skywave App',
    description: 'Install Application in your android and apple device',
    imageUrl: 'images/download.png'
  },
  {
    stepNumber: 2,
    title: 'Register in your device',
    description: 'Register your profile and login with google and facebook',
    imageUrl: 'images/work-login.png'
  },
  {
    stepNumber: 3,
    title: 'Submit Online Form',
    description: 'Simplifies the process of providing necessary information',
    imageUrl: 'images/form.png'
  },
  {
    stepNumber: 4,
    title: 'Enjoy Our Skywave App',
    description: 'Enjoy this application and have the best experiences',
    imageUrl: 'images/enjoy.png'
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Kenneth Simpson',
    role: 'CEO/Founder',
    imageUrl: 'images/team/user-1.jpg',
    socialLinks: {
      facebook: 'javascript:void(0);',
      twitter: 'javascript:void(0);',
      instagram: 'javascript:void(0);'
    }
  },
  {
    name: 'Daniel Malave',
    role: 'Web Developer',
    imageUrl: 'images/team/user-2.jpg',
    socialLinks: {
      facebook: 'javascript:void(0);',
      twitter: 'javascript:void(0);',
      instagram: 'javascript:void(0);'
    }
  },
  {
    name: 'James Peck',
    role: 'Founder',
    imageUrl: 'images/team/user-3.jpg',
    socialLinks: {
      facebook: 'javascript:void(0);',
      twitter: 'javascript:void(0);',
      instagram: 'javascript:void(0);'
    }
  },
  {
    name: 'Marc Johnson',
    role: 'Web Designer',
    imageUrl: 'images/team/user-4.jpg',
    socialLinks: {
      facebook: 'javascript:void(0);',
      twitter: 'javascript:void(0);',
      instagram: 'javascript:void(0);'
    }
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Personal',
    description: 'For individuals who want to securely connect personal devices, for free.',
    price: 0,
    offer: '3 Month Free',
    devicesCovered: 1,
    buttonText: 'Try Now',
    icon: 'ti ti-free-rights',
    variant: 'dark',
  },
  {
    name: 'Starter',
    description: 'For teams or organizations looking for an easy-to-use, legacy VPN replacement.',
    price: 20,
    offer: '+3 Extra month',
    devicesCovered: 5,
    buttonText: 'Subscribe Now',
    badgeText: 'Save 50%',
    badgeClass: 'bg-success-subtle text-success',
    icon: 'ti ti-tag-starred',
    variant: 'primary',
  },
  {
    name: 'Premium',
    description: 'For companies who need service level authentication and access control.',
    price: 60,
    offer: '+3 Extra month',
    devicesCovered: 10,
    buttonText: 'Subscribe Now',
    badgeText: 'Save 50%',
    badgeClass: 'bg-success-subtle text-success',
    icon: 'ti ti-premium-rights',
    variant: 'dark',
  }
];