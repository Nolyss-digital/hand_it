import { Component } from '@angular/core';
import { TopNavbarComponent } from "../../../components/top-navbar/top-navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { AboutComponent } from "./components/about/about.component";
import { FeaturesComponent } from "./components/features/features.component";
import { ServicesComponent } from "./components/services/services.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { TeamComponent } from "./components/team/team.component";
import { CounterComponent } from "../../../components/counter/counter.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { ContactComponent } from "../../../components/contact/contact.component";

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [TopNavbarComponent, HeroComponent, ClientsComponent, AboutComponent, FeaturesComponent, ServicesComponent, TestimonialComponent, TeamComponent, CounterComponent, PricingComponent, ContactComponent],
  templateUrl: './business.component.html',
})
export class BusinessComponent {

}
