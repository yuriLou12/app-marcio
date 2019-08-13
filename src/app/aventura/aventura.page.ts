import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

	@Component({
		  selector: 'app-aventura',
		  templateUrl: 'aventura.page.html',
		  styleUrls: ['aventura.page.scss'],
		})
		export class AventuraPage {
		  public filmes: Object[];

constructor(private http: HttpClient) {			
	this.http
		.get<Object[]>('http://localhost:3001/aventura')
		.subscribe(filme => this.filmes = filme);       
		  }
		}
