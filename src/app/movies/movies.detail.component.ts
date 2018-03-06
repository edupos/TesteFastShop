import {Component, OnInit, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Movie, Result } from './movies.model';
import { MoviesService} from './movies.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { MovieDetail } from './movies.detail.model';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  moduleId: module.id,
  selector: 'movie-detail',
  templateUrl: './movies.detail.component.html',
  styleUrls: ['./movies.detail.component.scss']
})
export class MoviesDetailComponent  implements OnInit{
  movie : MovieDetail;
  backImg: SafeUrl;

  constructor(
      private movieService : MoviesService,
      private router: Router,
      private route : ActivatedRoute ,
      private sanitizer: DomSanitizer 
  ){}


  ngOnInit() : void {
    //this.movies = new MovieDetail(0,0,0,[new Result(0,0,false,0,'','','','','',[],'',false,new Text(),new Date())]);    
    this.route.params.forEach((params: Params)=>{
      let id: number = +params['id'];
      if(id) {
        this.movieService.getMovie(id)
          .then((movies: MovieDetail)=> {
            console.log(movies);
            this.movie = movies;            
            this.backImg = this.sanitizer.bypassSecurityTrustStyle('url(https://image.tmdb.org/t/p/w1400_and_h450_face/' + this.movie.poster_path + ')');
        }).catch(err => console.log(err));
      }
    });
  }

  goHome() {
    this.router.navigate(['']); 
  }

}
  