import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films-crud',
  templateUrl: './films-crud.component.html',
  styleUrls: ['./films-crud.component.css']
})
export class FilmsCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToCreateFilm():void{
    this.router.navigate(['/films/create'])
  }

}
