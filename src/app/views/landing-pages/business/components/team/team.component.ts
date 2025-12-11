import { Component } from '@angular/core';
import { teamMembers } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'business-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styles: ``
})
export class TeamComponent {
  teamMembers = teamMembers

  additionalTeamMembers: string[] = [
    'images/team/avatar-7.jpg',
    'images/team/avatar-6.jpg',
    'images/team/avatar-8.jpg',
    'images/team/avatar-9.jpg',
    'images/team/avatar-4.jpg',
    'images/team/avatar-2.jpg',
    'images/team/avatar-5.jpg'
  ];
}
