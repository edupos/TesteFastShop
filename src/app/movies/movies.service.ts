import { MovieDetail } from './movies.detail.model';
import { RequestOptions } from '@angular/http/src/base_request_options';
import {Movie, Result} from './movies.model'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService{
   private headers: HttpHeaders = new HttpHeaders ({'Content-Type' : 'application/json'});
   private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
 
   constructor(
        private http: HttpClient
   ) {}

   private trataErro(err : any) : Promise<any> {
    console.log('Erro : ' , err );
    return Promise.reject(err.message || err );
  }

    getMovies(page:number, with_genre: number) : Promise<Movie>  {
        return this.http.get("https://api.themoviedb.org/3/discover/movie?" + (with_genre == 0? "" : "with_genres=" + with_genre.toString() + "&") + "page=" + page + "&language=pt&api_key=abaf84f43d88dfe74e609fd51170ed8f") 
        .toPromise()
        .then(response => { 
            return response as Movie;
        })
        .catch(this.trataErro);
    }

    getMovie(id:number): Promise<MovieDetail> {
        return this.http.get("https://api.themoviedb.org/3/movie/" + id + "?language=pt&api_key=abaf84f43d88dfe74e609fd51170ed8f") 
        .toPromise()
        .then(response => { 
            return response as Movie;
        })
        .catch(this.trataErro);
    }     

}