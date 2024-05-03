import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../service/provider.service';
import { Providers } from '../models';

@Component({
  selector: 'app-liste-providers',
  templateUrl: './liste-providers.component.html',
  styleUrl: './liste-providers.component.css'
})
export class ListeProvidersComponent implements OnInit{
  constructor(private ProviderService:ProviderService){}
  providers : Providers[]=[];
  ngOnInit(): void {
    this.ProviderService.getProvider().subscribe(
      (data:Providers[])=>{
        console.log(data);
        this.providers=data;},
      error => console.log(error)
    );
  }

}
