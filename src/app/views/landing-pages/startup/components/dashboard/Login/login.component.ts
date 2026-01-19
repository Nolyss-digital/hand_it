import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <h3 class="text-center mb-4">Admin Login</h3>
      <form (ngSubmit)="login()">
        <div class="mb-3">
          <label>Email</label>
          <input type="email" class="form-control" [(ngModel)]="email" name="email" required>
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input type="password" class="form-control" [(ngModel)]="password" name="password" required>
        </div>
        <button class="btn btn-primary w-100" type="submit" [disabled]="loading">
          {{ loading ? 'Connexion...' : 'Se connecter' }}
        </button>
        <p class="text-danger mt-2">{{ error }}</p>
      </form>
    </div>
  `
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  login() {
    this.loading = true;
    this.error = '';

    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(err => {
        this.error = 'Email ou mot de passe incorrect';
        console.error(err);
      })
      .finally(() => this.loading = false);
  }
}
