import { Component } from '@angular/core';
import { teamMembers } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'software-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styles: ``
})
export class TeamComponent {
  teamMembers = teamMembers


}
