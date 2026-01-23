import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  Firestore,
  collection,
  addDoc,
  query,
  where
} from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'startup-testimonial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './testimonial.component.html',
  styles: []
})
export class TestimonialComponent implements OnInit {

  testimonials: any[] = [];

  // 🔹 MODAL STATE
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  // 🔹 FORM MODEL
  review = {
    name: '',
    role: '',
    image: '',
    rating: 5,
    review: ''
  };

  loading = false;
  success = false;

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    const ref = collection(this.firestore, 'reviews');
    const q = query(ref, where('approved', '==', true));

    collectionData(q, { idField: 'id' }).subscribe((data) => {
      this.testimonials = data;
    });
  }

  // ✅ SINGLE METHOD (FIXED)
  submitReview(): void {
    if (!this.review.name || !this.review.review) {
      return;
    }

    this.loading = true;

    const ref = collection(this.firestore, 'reviews');

    addDoc(ref, {
      ...this.review,
      approved: false,
      createdAt: new Date()
    })
      .then(() => {
        this.success = true;

        // reset form
        this.review = {
          name: '',
          role: '',
          image: '',
          rating: 5,
          review: ''
        };

        // close modal
        this.closeModal();
      })
      .catch((error) => {
        console.error('Erreur ajout avis:', error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  // ⭐ STARS
  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating));
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }
}
