import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { pricingPlans } from '../data';

@Component({
  selector: 'agency-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styles: ``
})
export class PricingComponent {
  pricingPlans = pricingPlans
}
