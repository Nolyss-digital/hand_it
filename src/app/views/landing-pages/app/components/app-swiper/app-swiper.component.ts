import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperDirective } from '@components/swiper-directive.component';
import { register } from 'swiper/element';
import { Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

register()

@Component({
  selector: 'landing-app-swiper',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './app-swiper.component.html',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  styles: ``
})
export class AppSwiperComponent {

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  }
}
