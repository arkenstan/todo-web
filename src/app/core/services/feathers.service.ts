import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment';

import * as feathersRx from 'feathers-reactive';
import * as io from 'socket.io-client';

import feathers from '@feathersjs/feathers';
import feathersSockClient from '@feathersjs/socketio-client';
import feathersAuthClient from '@feathersjs/authentication-client';

@Injectable({
  providedIn: 'root'
})
export class FeathersService {
  private _feathers = feathers();
  private _socket = io(env.host);
  // private feathersAuthClient = require('@feathersjs/authentication-client').default;

  constructor() {
    this._feathers
      .configure(feathersSockClient(this._socket))
      .configure(feathersAuthClient())
      .configure(feathersRx({ idField: '_id' }));
  }

  public service(name: string) {
    return this._feathers.service(name);
  }
  public authenticate(credentials?): Promise<any> {
    return this._feathers.authenticate(credentials);
  }
  public logout() {
    return this._feathers.logout();
  }
}
