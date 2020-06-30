import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {
movie = new Movie();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];
    this.dataService.fetchMovieById(id).subscribe(
      data => {
        this.movie = data;
      }
    );
  }

  goBackToList() {
      this.router.navigate(['movielist']);
  }

}
