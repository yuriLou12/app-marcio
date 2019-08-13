import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

	@Component({
		  selector: 'app-ficcao',
		  templateUrl: 'ficcao.page.html',
		  styleUrls: ['ficcao.page.scss'],
		})
		export class FiccaoPage {
		  public filmes: Object[];

constructor(private http: HttpClient) {			
	this.http
		.get<Object[]>('http://localhost:3005/ficcao')
		.subscribe(filme => this.filmes = filme);       
		  }
		}
