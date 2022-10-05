import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludoDirectorComponent } from './saludo-director/saludo-director.component';
import { AdmisionComponent } from './admision/admision.component';
import { AdmisionFormComponent } from './admision-form/admision-form.component';
import { EnlacesExternosComponent } from './enlaces-externos/enlaces-externos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    SaludoDirectorComponent,
    AdmisionComponent,
    AdmisionFormComponent,
    EnlacesExternosComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    IvyCarouselModule
  ],
  exports: [
    SaludoDirectorComponent,
    AdmisionComponent,
    EnlacesExternosComponent
  ]
})
export class UiAdminModule { }
