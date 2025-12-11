import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingFooterComponent } from "../landing-footer/landing-footer.component";
import { BackToTopComponent } from "../back-to-top.component";
import { PreloaderComponent } from "../preloader.component";

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [RouterModule, LandingFooterComponent, BackToTopComponent, PreloaderComponent],
  templateUrl: './landing-layout.component.html',
  styles: ``
})
export class LandingLayoutComponent {

}
