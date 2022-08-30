import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo: string;
  nro?:number;
  /* el signo "?" sirve para declarar que un valor pude ser nulo*/
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'miPrimerApp';
  public ArregloTarjetas: Tarjeta[] = []

  ngOnInit(): void {
    
    this.ArregloTarjetas = [
      {titulo:'video 1', subtitulo:'subtitulo video 1'},
      {titulo:'video 2', subtitulo:'subtitulo video 2'},
      {titulo:'video 3', subtitulo:'subtitulo video 3'},
    ]

  }
  
}
