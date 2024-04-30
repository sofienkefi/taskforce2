import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskforce';
display() {
  alert(this.names);
}
names:string[]=["Amine","Hamda","Sofien"];
}
