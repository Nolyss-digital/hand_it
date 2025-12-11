import { Component, inject } from '@angular/core';
import { testimonials } from '../data';
import { CommonModule } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'software-testimonials',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './testimonials.component.html',
  styles: ``
})
export class TestimonialsComponent {
  activeSlide: number = 0;

  testimonials = testimonials

  getStars(rating: number) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    return [...Array(fullStars).fill('full'), ...Array(halfStar).fill('half')];
  }
  private config = inject(NgbCarouselConfig)

  constructor() {
    // customize default values of carousels used by this component tree
    this.config.interval = 2000;
    this.config.wrap = true;
    this.config.keyboard = true;
    this.config.pauseOnHover = true;
  }

  ngOnInit() {
  }

  onSlideChange(event: any) {
    this.activeSlide = event.current;
  }
}
