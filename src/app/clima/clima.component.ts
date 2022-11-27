import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewContatoComponent } from '../add-new-contato/add-new-contato.component';
import { ClimaService } from './clima.service';

import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  dados: any;


  loading: boolean;
  latitude: number;
  longitude: number;

  carregando: boolean;
  dados2: any;


  constructor(
    public dialog: MatDialog,
    public ClimaService: ClimaService,
    public router: Router,
    ) { }

  ngOnInit() {

    this.getLocation()

  }

  async getLocation() {
    this.carregando = true;
    try {
      this.loading = true;
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.loading = false;
      console.log(this.latitude);
      console.log(this.longitude);
      this.carregando = false;
    } catch (error) {
      this.carregando = false;
     }
     this.api()
    }

    api() {
      this.ClimaService.buscarDados(this.latitude, this.longitude)
      .subscribe(
        data =>{
          this.dados = data;
          console.log(this.dados);
        }
      );
      }

    api2() {
      this.ClimaService.buscarDados2(this.latitude, this.longitude)
      .subscribe(
        data2 =>{
          this.dados2 = data2;
          console.log(this.dados2);
        }
      );
      }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewContatoComponent, {
      width: '250px',
      data: { contato: "", telefone : "", localizacao : ""
      },
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  // api() {
  //   this.ClimaService.buscarDados().subscribe(
  //     data => {
  //       this.dados = data;
  //       console.log(this.dados)
  //       console.log(this.dados.daily.weathercode[0])
  //     }
  //   );

  //   }

}


