import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

	@Component({
		  selector: 'app-home',
		  templateUrl: 'home.page.html',
		  styleUrls: ['home.page.scss'],
		})
		export class HomePage {
		  public filmes: Object[];

constructor(private http: HttpClient) {			
	this.http
		.get<Object[]>('http://localhost:3000/top')
		.subscribe(filme => this.filmes = filme);       
		  }
		}
