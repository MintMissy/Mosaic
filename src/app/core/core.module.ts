import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { CommonModule } from '@angular/common';
import { NavLinkComponent } from './ui/nav-link/nav-link.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [NavbarComponent, NavLinkComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  exports: [NavbarComponent],
  providers: [],
})
export class CoreModule {}
