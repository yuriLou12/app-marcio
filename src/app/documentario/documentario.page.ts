import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

	@Component({
		  selector: 'app-documentario',
		  templateUrl: 'documentario.page.html',
		  styleUrls: ['documentario.page.scss'],
		})
		export class DocumentarioPage {
		  public filmes: Object[];

constructor(private http: HttpClient) {			
	this.http
		.get<Object[]>('http://localhost:3003/documentario')
		.subscribe(filme => this.filmes = filme);       
		  }
		}
