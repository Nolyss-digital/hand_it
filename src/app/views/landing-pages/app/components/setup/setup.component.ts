import { Component } from '@angular/core';
import { setupSteps } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'landing-app-setup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setup.component.html',
  styles: ``
})
export class SetupComponent {
  setupSteps=setupSteps
}
