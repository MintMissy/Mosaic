import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { CommonModule } from '@angular/common';
import { IconComponent } from './ui/icon/icon.component';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  exports: [IconComponent],
  providers: [],
})
export class CoreModule {}