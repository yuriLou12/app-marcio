import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

	@Component({
		  selector: 'app-series',
		  templateUrl: 'series.page.html',
		  styleUrls: ['series.page.scss'],
		})
		export class SeriesPage {
		  public filmes: Object[];

constructor(private http: HttpClient) {			
	this.http
		.get<Object[]>('http://localhost:3006/series')
		.subscribe(filme => this.filmes = filme);       
		  }
		}
