import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(
    private router: Router
  ) {}
  addContact(contactForm:any) {
    console.log(contactForm);
    alert(
      contactForm.nom +
        '  ' +
        contactForm.prenom +
        '  ' +
        contactForm.email +
        '  ' +
        contactForm.message
    );
  }
}
