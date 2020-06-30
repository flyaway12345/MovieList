import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  movies: Movie[];
  constructor(private dataService: DataService, private router: Router) { }


  ngOnInit(): void {
    this.refreshMovies();
  }

  refreshMovies() {
    this.dataService.fetchListOfMovies().subscribe(
    data => {
      console.log(data);
      this.movies = data;
    },
    error => console.log(error)
    );
  }


  goToAddMovie() {
    this.router.navigate(['addmovie']);
  }

  goToEditMovie(id: number) {
    this.router.navigate(['editmovie', id]);
  }

  goToViewMovie(id: number){
      this.router.navigate(['viewmovie', id]);
  }

  deleteMovie(id: number){
    this.dataService.deleteByID(id).subscribe(
      data => {
          this.refreshMovies();
          this.router.navigate(['movielist'])
      }
      );
      this.refreshMovies();

}
}
