import { ProviderService } from './../service/provider.service';
import { Component, OnInit, Provider } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parseXML } from 'jquery';
import { Providers } from '../models';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrl: './update-provider.component.css',
})
export class UpdateProviderComponent implements OnInit {
  idProvider!: number;
  name!: string;
  address!: string;
  email!: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ProviderService: ProviderService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idProvider = params['id'];
      //alert("ID = "+this.idProvider);
      this.ProviderService.getProviderById(this.idProvider).subscribe((data) =>
        //console.log(data)
        {
          this.name = data.name;
          this.address = data.address;
          this.email = data.email;
        }
      );
    });
  }

  saveUpdatedProvider() {
    let provider: Providers = {
      id: this.idProvider,
      name: this.name,
      email: this.email,
      address: this.address,
    };
    this.ProviderService.updateProvider(provider).subscribe((data) =>
      this.router.navigate(['listeProviders'])
    );
  }
}
