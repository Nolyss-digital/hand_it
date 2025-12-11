import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { testimonials } from '../data';

@Component({
  selector: 'startup-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styles: ``
})
export class TestimonialComponent {
  testimonials = testimonials

  getFullStars(rating: number): number[] {
    return new Array(Math.floor(rating));
  }

  // Method to check if there is a half star based on the rating
  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }
}
