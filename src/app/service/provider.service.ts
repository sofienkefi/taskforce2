import { Injectable, Provider } from '@angular/core';
import { Providers } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  constructor(private http: HttpClient) {}
  getProvider() {
    return this.http.get<Providers[]>(
      'http://ams.smart-it-partner.com:7001/providers'
    );
  }
}
