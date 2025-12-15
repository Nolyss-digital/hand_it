import type { CounterType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styles: ``
})
export class CounterComponent {
  counters: CounterType[] = [
  { value: '200+', description: 'Projets développés' },
  { value: '80+', description: 'Clients professionnels' },
  { value: '99%', description: 'Taux de satisfaction client' },
  { value: '10+', description: 'Années d’expertise technique' }
  ];

  @Input() bgColor!: string

}
