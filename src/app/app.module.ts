import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsAbmAlumnosComponent } from './forms-abm-alumnos/forms-abm-alumnos.component';
import { ListaDeAlumnosComponent } from './lista-de-alumnos/lista-de-alumnos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { ConversorNombrePipe } from './pipes/conversor-nombre.pipe';
import { TituloCabeceraDirective } from './directivas/titulo-cabecera.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FormsAbmAlumnosComponent,
    ListaDeAlumnosComponent,
    ConversorNombrePipe,
    TituloCabeceraDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
