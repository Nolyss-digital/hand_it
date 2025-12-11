import { Component } from '@angular/core';
import { pricingPlans } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'business-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styles: ``
})
export class PricingComponent {
  pricingPlans = pricingPlans
}
