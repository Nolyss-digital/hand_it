import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { teamMembers } from '../data';

@Component({
  selector: 'landing-app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styles: ``
})
export class TeamComponent {
  teamMembers = teamMembers
}
