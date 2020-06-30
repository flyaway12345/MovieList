import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {
movie = new Movie();

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];
    this.dataService.fetchMovieById(id).subscribe(
      data => {
        this.movie = data;
      }
    );

  }

  editMovieButton() {
    this.dataService.addMovie(this.movie).subscribe(
      data => {
        this.router.navigate(['movielist']);
      }
    );
  }

  goBackToList() {
    this.router.navigate(['movielist']);
  }

}
