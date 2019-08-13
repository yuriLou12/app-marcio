import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

	@Component({
		  selector: 'app-suspense',
		  templateUrl: 'suspense.page.html',
		  styleUrls: ['suspense.page.scss'],
		})
		export class SuspensePage {
		  public filmes: Object[];

constructor(private http: HttpClient) {			
	this.http
		.get<Object[]>('http://localhost:3007/suspense')
		.subscribe(filme => this.filmes = filme);       
		  }
		}
