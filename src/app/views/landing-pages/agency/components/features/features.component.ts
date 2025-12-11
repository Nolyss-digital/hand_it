import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { features } from '../data';

@Component({
  selector: 'agency-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styles: ``
})
export class FeaturesComponent {
  features = features
}
