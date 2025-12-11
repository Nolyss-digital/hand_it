import { Component } from '@angular/core';
import { approachSteps } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'business-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent {
  approachSteps = approachSteps
}
