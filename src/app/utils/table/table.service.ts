import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private host = 'http://127.0.0.1:8000';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getTables(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.host}/api/${this.authService.user}/files`);
  }
}
