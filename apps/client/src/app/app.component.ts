import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  ApiService,
  DataAccessApiModule,
} from '@nx-angular-nest/data-access-api';
import { Message } from '@nx-angular-nest/api-interfaces';
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, DataAccessApiModule, JsonPipe],
  selector: 'nx-angular-nest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  message: Message | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.message = data;
    });
  }
}
