import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { projects } from '../data';

@Component({
  selector: 'agency-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styles: ``
})
export class ProjectComponent {
  projects = projects
}
