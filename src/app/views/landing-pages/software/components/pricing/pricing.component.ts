import { Component } from '@angular/core';
import type { PricingPlan } from '../types';
import { CommonModule } from '@angular/common';
import { plans } from '../data';

@Component({
  selector: 'software-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styles: ``
})
export class PricingComponent {
  plans = plans
  // Type for the billing toggle (whether it's annual or not)
  isAnnual: boolean = false;

  // Toggle between monthly and annual billing
  toggleBilling(): void {
    this.isAnnual = !this.isAnnual;
  }

  // Get formatted price depending on billing type (monthly or annual)
  getPrice(plan: PricingPlan): string {
    return this.isAnnual ? `$${(plan.price * 12).toFixed(2)} / Year` : `$${plan.price.toFixed(2)} / Month`;
  }
}
