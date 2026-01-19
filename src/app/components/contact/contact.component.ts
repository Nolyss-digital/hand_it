import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ AJOUT
import emailjs from 'emailjs-com';

declare global {
  interface Window {
    Calendly: any;
  }
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [
    CommonModule, // ✅ OBLIGATOIRE pour *ngIf
    FormsModule   // ✅ OBLIGATOIRE pour ngForm
  ],
})
export class ContactComponent implements AfterViewInit {

  successMessage = false;
  errorMessage = false;
  isLoading = false;

  ngAfterViewInit(): void {
    this.loadCalendly();
  }

  sendEmail(form: any) {
    if (form.invalid) return;

    this.isLoading = true;
    this.successMessage = false;
    this.errorMessage = false;

    emailjs.send(
      'service_qqe8lbp',
      'template_xvqxsgm',
      {
        from_name: form.value.from_name,
        from_email: form.value.from_email,
        phone: form.value.phone,
        subject: form.value.subject,
        message: form.value.message,
      },
      'w-6MeO0gTqxC62A1X'
    ).then(
      () => {
        this.isLoading = false;
        this.successMessage = true;
        form.reset();
      },
      (error) => {
        console.error('EmailJS error:', error);
        this.isLoading = false;
        this.errorMessage = true;
      }
    );
  }

  loadCalendly() {
    if (window.Calendly) {
      window.Calendly.initInlineWidgets();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => window.Calendly.initInlineWidgets();
    document.body.appendChild(script);
  }
}
