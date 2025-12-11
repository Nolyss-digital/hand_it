import { Component } from '@angular/core';
import { TopNavbarComponent } from "@components/top-navbar/top-navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { CtaComponent } from "./components/cta/cta.component";
import { FeaturesComponent } from "./components/features/features.component";
import { HeroComponent } from "./components/hero/hero.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { ServicesComponent } from "./components/services/services.component";
import { TeamComponent } from "./components/team/team.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { ContactComponent } from "../../../components/contact/contact.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [TopNavbarComponent, HeroComponent, AboutComponent, FeaturesComponent, ServicesComponent, CtaComponent, TestimonialComponent, TeamComponent, PricingComponent, ContactComponent],
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent {

}
