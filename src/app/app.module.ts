import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { AddNewContatoComponent } from './add-new-contato/add-new-contato.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { ReportContatoComponent } from './report-contato/report-contato.component';
import { ClimaComponent } from './clima/clima.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './info/info.component';
import { DownloadComponent } from './download/download.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CalculadoraComponent } from './calculadora/calculadora.component';






@NgModule({
  declarations: [	
    AppComponent,
    ListComponent,
    AddNewContatoComponent,
      MenuComponent,
      ReportContatoComponent,
      ClimaComponent,
      InfoComponent,
      DownloadComponent,
      CalculadoraComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatMenuModule,
    routing,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
