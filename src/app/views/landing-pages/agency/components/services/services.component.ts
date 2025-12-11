import { Component } from '@angular/core';
import { services } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'agency-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styles: ``
})
export class ServicesComponent {
  services = services
}
