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
    { value: '230', description: 'Startups We Have Funded' },
    { value: '7k', description: 'Funded From Skywave Community' },
    { value: '$68B', description: 'Our Combined Valuation' },
    { value: '10+', description: 'Years Of Best Experience' }
  ];

  @Input() bgColor!: string

}
