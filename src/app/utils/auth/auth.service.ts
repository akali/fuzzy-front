import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get user() {
    if (!localStorage.getItem('uid')) {
      localStorage.setItem('uid', uuid.v4());
    }
    return localStorage.getItem('uid');
  }
}
