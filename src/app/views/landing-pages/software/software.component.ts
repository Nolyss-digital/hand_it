import { Component } from '@angular/core';
import { TopNavbarComponent } from "../../../components/top-navbar/top-navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { CounterComponent } from "../../../components/counter/counter.component";
import { AboutComponent } from "./components/about/about.component";
import { FeaturesComponent } from "./components/features/features.component";
import { Services } from "./components/services/services.component";
import { CtaComponent } from "./components/cta/cta.component";
import { TeamComponent } from "./components/team/team.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { ContactComponent } from "../../../components/contact/contact.component";

@Component({
  selector: 'app-software',
  standalone: true,
  imports: [TopNavbarComponent, HeroComponent, CounterComponent, AboutComponent, FeaturesComponent, Services, CtaComponent, TeamComponent, TestimonialsComponent, PricingComponent, ContactComponent],
  templateUrl: './software.component.html',
  styles: ``
})
export class SoftwareComponent {

}
