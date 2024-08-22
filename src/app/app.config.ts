import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"order-manager-3d957","appId":"1:276529807823:web:bbf8ddef36f6b6d1a792ba","databaseURL":"https://order-manager-3d957-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"order-manager-3d957.appspot.com","apiKey":"AIzaSyA3BMvcqTnv-gaX7jW6qrPkfoz1t1rt7AQ","authDomain":"order-manager-3d957.firebaseapp.com","messagingSenderId":"276529807823"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
