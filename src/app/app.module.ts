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
import { AngularFireAuthModule, PERSISTENCE } from '@angular/fire/compat/auth';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { GestionAccesoModule } from './gestion-acceso/gestion-acceso.module';
//Importaciones necesarias para la autentificacion
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PermisosComponent } from './gestion-acceso/permisos/permisos.component';
import { GestionUsuariosModule } from './gestion-usuarios/gestion-usuarios.module';


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
    //Añadimos autentificacion
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    IntroduccionIncidenciasModule,
    GestionIncidenciasModule,
    RevisionIncidenciasModule,
    NgbModule,
    //Importamos modulo para autentificaciones
    AngularFireAuthModule,
    BrowserAnimationsModule,
    HomeModule,
    GestionAccesoModule,
    GestionUsuariosModule

  ],
  providers: [
    PermisosComponent,
    { provide: PERSISTENCE, useValue: 'session'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
