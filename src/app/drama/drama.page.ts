import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

	@Component({
		  selector: 'app-drama',
		  templateUrl: 'drama.page.html',
		  styleUrls: ['drama.page.scss'],
		})
		export class DramaPage {
		  public filmes: Object[];

constructor(private http: HttpClient) {			
	this.http
		.get<Object[]>('http://localhost:3004/drama')
		.subscribe(filme => this.filmes = filme);       
		  }
		}
