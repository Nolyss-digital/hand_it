import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { services } from '../data';

@Component({
  selector: 'software-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styles: ``
})
export class Services {
  services = services
}
