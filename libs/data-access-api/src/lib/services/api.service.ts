import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@lib/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get<Message>('/api');
  }
}
