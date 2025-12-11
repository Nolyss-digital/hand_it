import { Component } from '@angular/core';
import { services } from '../data';

@Component({
  selector: 'product-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styles: ``
})
export class ServicesComponent {
  services = services
}
