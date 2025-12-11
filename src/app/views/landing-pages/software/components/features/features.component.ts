import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import type { Feature } from '../types';

@Component({
  selector: 'software-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styles: ``
})
export class FeaturesComponent {
  featuresRow1: Feature[] = [
    { title: 'Lead Management', imgSrc: 'images/features/fea-1.png' },
    { title: 'Sales Reporting', imgSrc: 'images/features/fea-2.png' },
    { title: 'Call & SMS', imgSrc: 'images/features/fea-3.png' },
    { title: 'Email Sync', imgSrc: 'images/features/fea-4.png' }
  ];

  featuresRow2: Feature[] = [
    { title: 'Easy Customize', imgSrc: 'images/features/fea-5.png' },
    { title: 'Deal Pipeline', imgSrc: 'images/features/fea-6.png' },
    { title: 'Activities & Goals', imgSrc: 'images/features/fea-7.png' },
    { title: 'Integration', imgSrc: 'images/features/fea-8.png' }
  ];
}
