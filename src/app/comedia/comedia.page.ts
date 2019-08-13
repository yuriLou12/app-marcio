import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

	@Component({
		  selector: 'app-comedia',
		  templateUrl: 'comedia.page.html',
		  styleUrls: ['comedia.page.scss'],
		})
		export class ComediaPage {
		  public filmes: Object[];

constructor(private http: HttpClient) {			
	this.http
		.get<Object[]>('http://localhost:3002/comedia')
		.subscribe(filme => this.filmes = filme);       
		  }
		}
