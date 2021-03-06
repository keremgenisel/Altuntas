import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sale } from './Sale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'Altuntas';
  sales: Sale[] = [];
  ngOnInit(): void {
    this.http.get("https://localhost:44375/api/sales").subscribe(data => {
      this.sales = data as Sale[];
    });
  }
}
