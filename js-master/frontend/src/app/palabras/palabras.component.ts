import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {

  nombrePalabra1="sa-normal";
  nombrePalabra2="sa-normal";
  nombrePalabra3="sa-normal";
  nombrePalabra4="sa-normal";
  nombrePalabra5="sa-normal";
  nombrePalabra6="sa-normal";
  nombrePalabra7="sa-normal";
  nombrePalabra8="sa-normal";
  nombrePalabra9="sa-normal";
  nombrePalabra10="sa-normal";
  nombrePalabra11="sa-normal";
  nombrePalabra12="sa-normal";
  nombrePalabra13="sa-normal";
  nombrePalabra14="sa-normal";
  nombrePalabra15="sa-normal";
  nombrePalabra16="sa-normal";

  Palabra1='Perro';
  Palabra2='Lobo';
  Palabra3='Avion';
  Palabra4='Pajaro';
  Palabra5='Bicicleta';
  Palabra6='Pez';
  Palabra7='Auto';
  Palabra8='Leon';
  Palabra9='Barco';
  Palabra10='Buitre';
  Palabra11='Moto';
  Palabra12='Buho';
  Palabra13='Carro';
  Palabra14='Pantera';
  Palabra15='Gato';
  Palabra16='Delfin';


  cambiarClaseDeTitulo1() {
      this.nombrePalabra1='sa-win'
  }
  cambiarClaseDeTitulo2() {
      this.nombrePalabra2='sa-win'
  }
  cambiarClaseDeTitulo3() {
      this.nombrePalabra3='sa-fail'
  }
  cambiarClaseDeTitulo4() {
      this.nombrePalabra4='sa-fail'
  }
  cambiarClaseDeTitulo5() {
      this.nombrePalabra5='sa-fail'
  }
  cambiarClaseDeTitulo6() {
      this.nombrePalabra6='sa-win'
  }
  cambiarClaseDeTitulo7() {
      this.nombrePalabra7='sa-fail'
  }
  cambiarClaseDeTitulo8() {

      this.nombrePalabra8='sa-win'
  }
  cambiarClaseDeTitulo9() {
      this.nombrePalabra9='sa-fail'
  }
  cambiarClaseDeTitulo10() {
      this.nombrePalabra10='sa-win'
  }
  cambiarClaseDeTitulo11() {
    this.nombrePalabra11='sa-fail'
  }
  cambiarClaseDeTitulo12() {
    this.nombrePalabra12='sa-win'
  }
  cambiarClaseDeTitulo13() {
    this.nombrePalabra13='sa-fail'
  }
  cambiarClaseDeTitulo14() {
    this.nombrePalabra14='sa-win'
  }
  cambiarClaseDeTitulo15() {
    this.nombrePalabra15='sa-win'
  }
  cambiarClaseDeTitulo16() {
    this.nombrePalabra16='sa-win'
  }


  constructor() { }

  ngOnInit() {
  }

}
