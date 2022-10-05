import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdmisionPageComponent } from './home/admision/admision-page/admision-page.component';
import { GaleriaPageComponent } from './home/galeria/galeria-page/galeria-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { BalanceEconomicoPageComponent } from './home/institucional/balance-economico-page/balance-economico-page.component';
import { ContratoDocentePageComponent } from './home/institucional/contrato-docente-page/contrato-docente-page.component';
import { ConvocatotoriasPageComponent } from './home/institucional/convocatotorias-page/convocatotorias-page.component';
import { DocumentosGestionPageComponent } from './home/institucional/documentos-gestion-page/documentos-gestion-page.component';
import { InstitucionalPageComponent } from './home/institucional/institucional-page/institucional-page.component';
import { LibroReclamacionesPageComponent } from './home/institucional/libro-reclamaciones-page/libro-reclamaciones-page.component';
import { MesaPartesPageComponent } from './home/institucional/mesa-partes-page/mesa-partes-page.component';
import { RenovacionDocentePageComponent } from './home/institucional/renovacion-docente-page/renovacion-docente-page.component';
import { ConveniosPageComponent } from './home/nosotros/convenios-page/convenios-page.component';
import { MisionVisionPageComponent } from './home/nosotros/mision-vision-page/mision-vision-page.component';
import { NosotrosPageComponent } from './home/nosotros/nosotros-page/nosotros-page.component';
import { PresentacionPageComponent } from './home/nosotros/presentacion-page/presentacion-page.component';
import { ResenaPageComponent } from './home/nosotros/resena-page/resena-page.component';
import { AgropecuariaPageComponent } from './home/programas/agropecuaria-page/agropecuaria-page.component';
import { ContabilidadPageComponent } from './home/programas/contabilidad-page/contabilidad-page.component';
import { EnfermeriaPageComponent } from './home/programas/enfermeria-page/enfermeria-page.component';
import { ProgramasPageComponent } from './home/programas/programas-page/programas-page.component';
import { TurismoPageComponent } from './home/programas/turismo-page/turismo-page.component';
import { LoginComponent } from './login/login/login.component';
import { NuevoComponent } from './views/nuevo/nuevo.component';
import { EditarComponent } from './views/editar/editar.component';

const routes: Routes = [
  //LOGIN
  {
    path: 'login',
    component: LoginComponent
  },
  //Dashboard
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  //Nuevo
  {
    path: 'nuevo',
    component: NuevoComponent
  },
  //Editar
  {
    path: 'editar/:id',
    component: EditarComponent
  },
//*************************** */
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'admision',
    component: AdmisionPageComponent
  },
  {
    path: 'nosotros',
    component: NosotrosPageComponent,
    children: [
      {
        path: 'presentacion',
        component: PresentacionPageComponent
      },
      {
        path: 'mision/vision',
        component: MisionVisionPageComponent
      },
      {
        path: 'convenios',
        component: ConveniosPageComponent
      },
      {
        path: 'resena',
        component: ResenaPageComponent
      },
      {path: '', redirectTo: 'presentacion', pathMatch: 'full'}
    ]
  },
  {
    path: 'institucional',
    component: InstitucionalPageComponent,
    children: [
      {
        path: 'contrato/docente',
        component: ContratoDocentePageComponent
      },
      {
        path: 'renovacion/docente',
        component: RenovacionDocentePageComponent
      },
      {
        path: 'convocatorias',
        component: ConvocatotoriasPageComponent
      },
      {
        path: 'mesa/partes',
        component: MesaPartesPageComponent
      },
      {
        path: 'documentos/gestion',
        component: DocumentosGestionPageComponent
      },
      {
        path: 'balance/economico',
        component: BalanceEconomicoPageComponent
      },
      {
        path: 'libro/reclamaciones',
        component: LibroReclamacionesPageComponent
      }
    ]
  },
  {
    path: 'programas',
    component: ProgramasPageComponent,
    children: [
      {
        path: 'contabilidad',
        component: ContabilidadPageComponent
      },
      {
        path: 'enfermerria',
        component: EnfermeriaPageComponent
      },
      {
        path: 'turismo',
        component: TurismoPageComponent
      },
      {
        path: 'agropecuaria',
        component: AgropecuariaPageComponent
      }
    ]
  },
  {
    path: 'galeria',
    component: GaleriaPageComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
