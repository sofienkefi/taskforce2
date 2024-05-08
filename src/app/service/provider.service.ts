import { Injectable } from '@angular/core';
import { Providers } from '../models';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  constructor(private http: HttpClient) {}
 // token : any = sessionStorage.getItem('jwtToken');
  getProvider() {
   // const headers = new HttpHeaders({Authorization :'Bearer ' + this.token});
  //  return this.http.get<Providers[]>(environment.baseUrl + '/providers',{headers});
  return this.http.get<Providers[]>(environment.baseUrl + '/providers');
  }
  addProvider(provider: Providers) {
    return this.http.post<Providers>(
      environment.baseUrl + '/providers',
      provider
    );
  }
  deleteProvider(provider: Providers) {
    return this.http.delete(environment.baseUrl + '/providers/' + provider.id);
  }

  updateProvider( provider: Providers) {
    return this.http.put<Providers>(
      environment.baseUrl + '/providers/' + provider.id,
      provider
    );
  }
  getProviderById(idprovider: number) {
    return this.http.get<Providers>(
      environment.baseUrl + '/providers/' + idprovider,
    );
  }
}
