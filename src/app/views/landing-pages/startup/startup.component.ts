import { Component } from '@angular/core';
import { ContactComponent } from "@components/contact/contact.component";
import { TopNavbarComponent } from "@components/top-navbar/top-navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { CtaComponent } from "./components/cta/cta.component";
import { FeaturesComponent } from "./components/features/features.component";
import { HeroComponent } from "./components/hero/hero.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { ServicesComponent } from "./components/services/services.component";
import { TeamComponent } from "./components/team/team.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { CounterComponent } from "../../../components/counter/counter.component";
import { FooterComponent } from '../../home/components/footer/footer.component';
import { ClientsComponent } from '@views/business/components/clients/clients.component';

@Component({
  selector: 'app-startup',
  standalone: true,
  imports: [TopNavbarComponent, HeroComponent, AboutComponent,ClientsComponent, FeaturesComponent, ServicesComponent, TestimonialComponent, CtaComponent, TeamComponent, PricingComponent, ContactComponent, CounterComponent,FooterComponent],
  templateUrl: './startup.component.html',
  styles: ``
})
export class StartupComponent {

}
