import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { EjemploDialogo } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private _http: HttpClient, public dialog: MatDialog) {}
	ngOnInit(): void {
		const url = 'https://jsonplaceholder.typicode.com/posts/1';
		const urlServidorLocal = 'http://localhost:1337/usuario';
		const nuevoPost = {
			userId: 1,
			body: 'Lo que el viento se llevo',
			description: 'Soy un nuevo post'
		};

		const obtenerPost$ = this._http.get(urlServidorLocal, {
			// headers: new HttpHeaders({ Autorizacion: 'Supletorio' })
		});
		const crearPost$ = this._http.post(url, nuevoPost);

		obtenerPost$.subscribe(
			(datos) => {
				console.log('Datos: ', datos);
			},
			(error) => {
				console.log('Error: ', error);
			}
		);

		crearPost$.subscribe(
			(datos) => {
				console.log('Datos: ', datos);
			},
			(error) => {
				console.log('Error: ', error);
			}
		);
	}
	title = 'frontend';
	saludo(nombre: HTMLInputElement) {
		alert(`Hola ${nombre.value}`);
	}

	abrirDialogo(nombre: HTMLInputElement) {
		const dialogRef = this.dialog.open(EjemploDialogo, {
			width: '500px',
			data: {
				nombre: nombre.value
			}
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(result);
			if (result.nombre !== '') {
				alert('Cambiaste el nombre a:' + result.nombre);
			}
		});
	}
}
