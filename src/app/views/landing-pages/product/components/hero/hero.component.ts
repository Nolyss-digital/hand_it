import { Component, inject, type TemplateRef } from '@angular/core';
import { NgbModal, NgbModalModule, type NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'product-hero',
  standalone: true,
  imports: [NgbModalModule],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {
	private modalService = inject(NgbModal);

  open(content: TemplateRef<any>, options: NgbModalOptions) {
    this.modalService.open(content,options)
  }
}
