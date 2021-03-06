import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThreeDataService {
  constructor(private http: HttpClient) {  }

  public get() {
    return this.http.get('api/scene').toPromise();
  }

  public save(data) {
    this.http.post('api/scene', { data: data }).subscribe((error) => console.log(error));
  }
}
