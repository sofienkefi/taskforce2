import { Injectable, Provider } from '@angular/core';
import { Providers } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  constructor(private http: HttpClient) {}
  getProvider() {
    return this.http.get<Providers[]>(environment.baseUrl + '/providers');
  }
  addProvider(provider: Providers) {
    return this.http.post<Provider>(
      environment.baseUrl + '/providers',
      provider
    );
  }
  deleteProvider(idprovider: number) {
    return this.http.delete(environment.baseUrl + '/providers/' + idprovider);
  }
  updateProvider(idprovider: number, provider: Providers) {
    return this.http.put<Provider>(
      environment.baseUrl + '/providers/' + idprovider,
      provider
    );
  }
}
