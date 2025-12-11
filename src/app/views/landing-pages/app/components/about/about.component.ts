import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { appDownloads } from '../data';

@Component({
  selector: 'landing-app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent {
  appDownloads = appDownloads
}
