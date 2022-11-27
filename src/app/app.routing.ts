import { ClimaComponent } from './clima/clima.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'clima', component: ClimaComponent },
];


export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

