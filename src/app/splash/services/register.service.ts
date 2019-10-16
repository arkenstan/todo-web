import { Injectable } from '@angular/core';
import { FeathersService } from '@core/services/feathers.service';

import { RegisterData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private feathers: FeathersService) {}

  registerUser(data: RegisterData): Promise<any> {
    return this.feathers.service('users').create({ ...data });
  }
}
