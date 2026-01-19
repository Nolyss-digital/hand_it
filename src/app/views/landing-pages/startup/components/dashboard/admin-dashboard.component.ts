import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
    Firestore,
    collection,
    collectionData,
    doc,
    updateDoc,
    deleteDoc
} from '@angular/fire/firestore';

@Component({
    selector: 'admin-dashboard',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-dashboard.component.html',
    styles: []
})
export class AdminDashboardComponent implements OnInit {

    allReviews: any[] = [];
    loading = false;

    constructor(private firestore: Firestore) { }

    ngOnInit(): void {
        const ref = collection(this.firestore, 'reviews');

        // ⚡ Temps réel : récupérer tous les avis
        collectionData(ref, { idField: 'id' }).subscribe(data => {
            this.allReviews = data.sort(
                (a, b) => (b['createdAt']?.seconds || 0) - (a['createdAt']?.seconds || 0)
            );
        });
    }

    approve(review: any) {
        const ref = doc(this.firestore, `reviews/${review.id}`);
        updateDoc(ref, { approved: true })
            .then(() => console.log('Avis approuvé ✅'))
            .catch(err => console.error(err));
    }

    delete(review: any) {
        const ref = doc(this.firestore, `reviews/${review.id}`);
        deleteDoc(ref)
            .then(() => console.log('Avis supprimé 🗑️'))
            .catch(err => console.error(err));
    }
}
