import { credits, currentYear } from '@/app/common/constants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
  currentYear = currentYear
  credits=credits
}
