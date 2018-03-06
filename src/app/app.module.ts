import { MoviesService } from './movies/movies.service';
import { MoviesListarComponent } from './movies/movies.list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { MoviesDetailComponent } from './movies/movies.detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesListarComponent,
    MoviesDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
