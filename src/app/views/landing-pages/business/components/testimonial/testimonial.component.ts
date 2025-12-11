import { Component } from '@angular/core';
import { testimonials } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'business-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styles: ``
})
export class TestimonialComponent {
  testimonials = testimonials
}
