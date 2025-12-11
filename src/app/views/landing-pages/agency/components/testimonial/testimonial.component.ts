import { Component, inject } from '@angular/core';
import { testimonialSlides } from '../data';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'agency-testimonial',
  standalone: true,
  imports: [CommonModule,NgbCarouselModule],
  templateUrl: './testimonial.component.html',
  styles: ``
})
export class TestimonialComponent {
  activeSlide: number = 0;

  testimonialSlides = testimonialSlides
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
