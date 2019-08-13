import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

	@Component({
		  selector: 'app-acao',
		  templateUrl: 'acao.page.html',
		  styleUrls: ['acao.page.scss'],
		})
		export class AcaoPage {
		  public filmes: Object[];

constructor(private http: HttpClient) {			
	this.http
		.get<Object[]>('http://localhost:3000/acao')
		.subscribe(filme => this.filmes = filme);       
		  }
		}
