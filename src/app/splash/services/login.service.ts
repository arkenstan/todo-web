import { Injectable } from '@angular/core';

import { LoginCredentials } from '../models/user.model';
import { FeathersService } from '@core/services/feathers.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private feathers: FeathersService) {}

  logIn(credentials?: LoginCredentials): Promise<any> {
    return this.feathers.authenticate(credentials);
  }

  logOut(): Promise<any> {
    return this.feathers.logout();
  }
}
