import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

	@Component({
		  selector: 'app-terror',
		  templateUrl: 'terror.page.html',
		  styleUrls: ['terror.page.scss'],
		})
		export class TerrorPage {
		  public filmes: Object[];

constructor(private http: HttpClient) {			
	this.http
		.get<Object[]>('http://localhost:3008/terror')
		.subscribe(filme => this.filmes = filme);       
		  }
		}
