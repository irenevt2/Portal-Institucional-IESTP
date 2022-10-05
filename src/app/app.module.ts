import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmisionPageComponent } from './home/admision/admision-page/admision-page.component';
import { GaleriaPageComponent } from './home/galeria/galeria-page/galeria-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { InstitucionalPageComponent } from './home/institucional/institucional-page/institucional-page.component';
import { NosotrosPageComponent } from './home/nosotros/nosotros-page/nosotros-page.component';
import { ProgramasPageComponent } from './home/programas/programas-page/programas-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PresentacionPageComponent } from './home/nosotros/presentacion-page/presentacion-page.component';
import { MisionVisionPageComponent } from './home/nosotros/mision-vision-page/mision-vision-page.component';
import { ConveniosPageComponent } from './home/nosotros/convenios-page/convenios-page.component';
import { ResenaPageComponent } from './home/nosotros/resena-page/resena-page.component';
import { ContratoDocentePageComponent } from './home/institucional/contrato-docente-page/contrato-docente-page.component';
import { RenovacionDocentePageComponent } from './home/institucional/renovacion-docente-page/renovacion-docente-page.component';
import { ConvocatotoriasPageComponent } from './home/institucional/convocatotorias-page/convocatotorias-page.component';
import { MesaPartesPageComponent } from './home/institucional/mesa-partes-page/mesa-partes-page.component';
import { DocumentosGestionPageComponent } from './home/institucional/documentos-gestion-page/documentos-gestion-page.component';
import { BalanceEconomicoPageComponent } from './home/institucional/balance-economico-page/balance-economico-page.component';
import { LibroReclamacionesPageComponent } from './home/institucional/libro-reclamaciones-page/libro-reclamaciones-page.component';
import { ContabilidadPageComponent } from './home/programas/contabilidad-page/contabilidad-page.component';
import { EnfermeriaPageComponent } from './home/programas/enfermeria-page/enfermeria-page.component';
import { TurismoPageComponent } from './home/programas/turismo-page/turismo-page.component';
import { AgropecuariaPageComponent } from './home/programas/agropecuaria-page/agropecuaria-page.component';
import { UiAdminModule } from './ui-admin/ui-admin.module';
import { LoginComponent } from './login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NuevoComponent } from './views/nuevo/nuevo.component';
import { EditarComponent } from './views/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmisionPageComponent,
    GaleriaPageComponent,
    HomePageComponent,
    InstitucionalPageComponent,
    NosotrosPageComponent,
    ProgramasPageComponent,
    PresentacionPageComponent,
    MisionVisionPageComponent,
    ConveniosPageComponent,
    ResenaPageComponent,
    ContratoDocentePageComponent,
    RenovacionDocentePageComponent,
    ConvocatotoriasPageComponent,
    MesaPartesPageComponent,
    DocumentosGestionPageComponent,
    BalanceEconomicoPageComponent,
    LibroReclamacionesPageComponent,
    ContabilidadPageComponent,
    EnfermeriaPageComponent,
    TurismoPageComponent,
    AgropecuariaPageComponent,
    LoginComponent,
    DashboardComponent,
    NuevoComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UiAdminModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
