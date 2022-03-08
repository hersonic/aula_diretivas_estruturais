import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exibir: boolean = true;
  x: boolean = true;

  toggleShow(): void{
    this.exibir = !this.exibir;
  }
}
