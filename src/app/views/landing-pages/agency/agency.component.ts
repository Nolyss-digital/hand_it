import { Component } from '@angular/core';
import { TopNavbarComponent } from "../../../components/top-navbar/top-navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { FeaturesComponent } from "./components/features/features.component";
import { ServicesComponent } from "./components/services/services.component";
import { ProjectComponent } from "./components/project/project.component";
import { CounterComponent } from "../../../components/counter/counter.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { ContactComponent } from "../../../components/contact/contact.component";

@Component({
  selector: 'app-agency',
  standalone: true,
  imports: [TopNavbarComponent, HeroComponent, AboutComponent, FeaturesComponent, ServicesComponent, ProjectComponent, CounterComponent, TestimonialComponent, PricingComponent, ContactComponent],
  templateUrl: './agency.component.html',
  styles: ``
})
export class AgencyComponent {
 
}
