import { Component, AfterViewInit } from '@angular/core';

declare global {
  interface Window {
    Calendly: any;
  }
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
})
export class ContactComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.loadCalendly();
  }

  loadCalendly() {
    // si le script est déjà chargé
    if (window.Calendly) {
      window.Calendly.initInlineWidgets();
      return;
    }

    // sinon on charge le script manuellement
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      window.Calendly.initInlineWidgets();
    };
    document.body.appendChild(script);
  }
}
