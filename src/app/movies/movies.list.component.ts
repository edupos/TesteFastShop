import {Component, OnInit, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Movie, Result } from './movies.model';
import { MoviesService} from './movies.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'movie-list',
  templateUrl: './movies.list.component.html',
  styleUrls: ['./movies.list.component.scss']
})
export class MoviesListarComponent  implements OnInit{
  pesquisar : Movie;
  movies : Movie ;
  with_genre : number;
  items : string[];

  constructor(
      private movieService : MoviesService,
      private router: Router  
  ){}

  filterMovies() : Movie[] {
    let moviesFilter: Movie[];   
    
      this.movieService.getMovies(1, this.with_genre)
      .then((movies : Movie) => {
        this.movies = movies;
       }).catch(err => console.log(err));
    
    return moviesFilter;
  }

  ngOnInit() : void {
    this.with_genre = 0;
    this.pesquisar = new Movie(0,0,0,[new Result(0,0,false,0,'','','','','',[],'',false,new Text(),new Date())]);
    this.movieService.getMovies(1, this.with_genre)
    .then((movies : Movie) => {
      this.movies = movies;
     }).catch(err => console.log(err));
  }

  update(page:number) : void {
    this.movieService.getMovies(page, this.with_genre)
    .then((movies : Movie) => {
      this.movies = movies;
      console.log("update: " + movies);
     }).catch(err => console.log(err));
  }

}
  