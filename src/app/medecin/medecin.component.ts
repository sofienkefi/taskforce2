import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrl: './medecin.component.css'
})
export class MedecinComponent implements OnInit {
  ngOnInit(): void {
    console.log("Hello list");
    console.log(this.medecinDetails);
  }
  formation="Sofien";
  
  medecins:string[]=["Amine","Hamda","Sofien"];
  medecinDetails : Medecin[]=[
    {"nom":"Kefi","prenom":"Sofien","age":38,"grade":"Generaliste","image":"https://iconape.com/wp-content/png_logo_vector/avatar-10.png"},
    {"nom":"Marzougui","prenom":"Khaled","age":39,"grade":"Radio","image":"https://iconape.com/wp-content/png_logo_vector/avatar-10.png"},
    {"nom":"Khlifi","prenom":"Hamda","age":40,"grade":"Pediatrie","image":"https://iconape.com/wp-content/png_logo_vector/avatar-10.png"},
    {"nom":"Timoumi","prenom":"Raouf","age":51,"grade":"Urgence","image":"https://iconape.com/wp-content/png_logo_vector/avatar-10.png"},
   
  ];

  display1(data:Medecin) {
    alert(data.nom);
  }
}
