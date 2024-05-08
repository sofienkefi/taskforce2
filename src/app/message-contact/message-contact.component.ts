import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-contact',
  templateUrl: './message-contact.component.html',
  styleUrl: './message-contact.component.css'
})
export class MessageContactComponent {
  
  addContact(contactForm:any){
    alert(contactForm.nom+" "+contactForm.prenom+" "+contactForm.email+" "+contactForm.message);
  }
  @Input() messagefils:string="";
  ngOnInit(): void {
    console.log("message du parent :" + this.messagefils);}
    @Output() eventTimeDate = new EventEmitter();
    sendEvent1() { 
      this.eventTimeDate.emit( new Date());
    }
}