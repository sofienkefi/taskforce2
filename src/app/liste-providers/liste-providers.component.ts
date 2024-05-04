import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../service/provider.service';
import { Providers } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-providers',
  templateUrl: './liste-providers.component.html',
  styleUrl: './liste-providers.component.css',
})
export class ListeProvidersComponent implements OnInit {
  constructor(
    private ProviderService: ProviderService,
    private router: Router
  ) {}
  providers: Providers[] = [];
  ngOnInit(): void {
    this.refresh();
  }
  goAdd() {
    this.router.navigate(['addProvider']);
  }

  refresh() {
    this.ProviderService.getProvider().subscribe(
      (data: Providers[]) => {
        console.log(data);
        this.providers = data;
      },
      (error) => console.log(error)
    );
  }
  deleteProvider(provider: Providers) {
    this.ProviderService.deleteProvider(provider).subscribe((data) => {
      this.refresh();
    });
  }
}
