import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { testimonialSlides } from '../data';

@Component({
  selector: 'product-testimonial',
  standalone: true,
  imports: [NgbCarouselModule,CommonModule],
  templateUrl: './testimonial.component.html',
  styles: ``
})
export class TestimonialComponent {
  activeSlide: number = 0;

  testimonialSlides = testimonialSlides

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

  onSlideChange(event: any) {
    this.activeSlide = event.current;
  }
}
