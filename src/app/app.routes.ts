import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { DiagnosisComponent  } from './diagnosis/diagnosis.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', title: 'AfiaPlus', component: HomeComponent },
    { path: 'chat', title: 'Chat', component: ChatComponent },
    { path: 'diagnosis', title: 'Diagnosis', component: DiagnosisComponent }
];
