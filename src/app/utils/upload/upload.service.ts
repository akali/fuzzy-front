import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private host = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient, private authService: AuthService) { }

  upload(file: File): Observable<number> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('creator', this.authService.user);

    const req = new HttpRequest('POST', `${this.host}/api/upload/`, formData, {
      reportProgress: true
    });

    const progress = new Subject<number>();

    this.http.request(req).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        progress.next(percentDone);
      } else if (event instanceof HttpResponse) {
        progress.complete();
      }
    });

    return progress.asObservable();
  }

}
