import { MoviesListarComponent } from './movies/movies.list.component';
import { MoviesDetailComponent} from './movies/movies.detail.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { AppComponent} from './app.component'

const moviesRoutes: Routes =[
  {
      path : '',
      component: MoviesListarComponent
  },
  {
      path : 'movie/:id',
      component: MoviesDetailComponent
  }
]
@NgModule({
    imports: [
        RouterModule.forRoot(moviesRoutes)
    ],
    exports : [RouterModule]
})
export class RoutingModule {}