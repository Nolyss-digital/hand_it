import { Component } from '@angular/core';
import { TopNavbarComponent } from "../../../components/top-navbar/top-navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { FeaturesComponent } from "./components/features/features.component";
import { SetupComponent } from "./components/setup/setup.component";
import { AppSwiperComponent } from "./components/app-swiper/app-swiper.component";
import { TeamComponent } from "./components/team/team.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { DownloadAppComponent } from "./components/download-app/download-app.component";
import { ContactComponent } from "../../../components/contact/contact.component";

@Component({
  selector: 'landing-app',
  standalone: true,
  imports: [TopNavbarComponent, HeroComponent, AboutComponent, FeaturesComponent, SetupComponent, AppSwiperComponent, TeamComponent, PricingComponent, DownloadAppComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
