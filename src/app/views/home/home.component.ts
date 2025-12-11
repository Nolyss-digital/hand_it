import { Component, inject, Renderer2, type OnDestroy, type OnInit } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { DemosComponent } from "./components/demos/demos.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, DemosComponent, FooterComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit,OnDestroy {

  ngOnInit(): void {
    document.body.classList.add('bg-white')
  }
  
  ngOnDestroy(): void {
    document.body.classList.remove('bg-white') 
  }

}
