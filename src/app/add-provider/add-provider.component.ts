import { Component } from '@angular/core';
import { Providers } from '../models';
import { Router } from '@angular/router';
import { ProviderService } from '../service/provider.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css',
})
export class AddProviderComponent {
  constructor(
    private ProviderService: ProviderService,
    private router: Router
  ) {}

  addProvider(providerForm: any) {
    //console.log(providerForm)
    let provider = {
      name: providerForm.name,
      address: providerForm.address,
      email: providerForm.email,
      //dateCreateRDV: new Date()
    };
    this.ProviderService.addProvider(provider).subscribe(
      //this.providerService.addProvider(providerForm).subscribe(
      (data) => {
        //console.log(data);
        this.router.navigate(['listeProviders']);
      },
      (error) => console.log(error)
    );
  }
}
