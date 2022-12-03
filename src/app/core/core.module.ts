import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { CommonModule } from '@angular/common';
import { IconComponent } from './ui/icon/icon.component';
import { NavLinkComponent } from './ui/nav-link/nav-link.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [IconComponent, NavbarComponent, NavLinkComponent],
  imports: [
    CommonModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  exports: [IconComponent, NavbarComponent],
  providers: [],
})
export class CoreModule {}
