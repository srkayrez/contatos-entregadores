import { DownloadComponent } from './download/download.component';
import { InfoComponent } from './info/info.component';
import { ClimaComponent } from './clima/clima.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'clima', component: ClimaComponent },
  { path: 'info', component: InfoComponent },
  { path: 'download', component: DownloadComponent },
];


export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

