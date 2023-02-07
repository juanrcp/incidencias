import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { IntroduccionIncidenciasModule } from './introduccion-incidencias/introduccion-incidencias.module';
import { GestionIncidenciasModule } from './gestion-incidencias/gestion-incidencias.module';
import { RevisionIncidenciasModule } from './revision-incidencias/revision-incidencias.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Importamos modulo para firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    IntroduccionIncidenciasModule,
    GestionIncidenciasModule,
    RevisionIncidenciasModule,
    NgbModule,
    //Importamos modulo para autentificaciones
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
