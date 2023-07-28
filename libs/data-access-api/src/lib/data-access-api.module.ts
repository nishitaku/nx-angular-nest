import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ApiServiceService],
})
export class DataAccessApiModule {}
