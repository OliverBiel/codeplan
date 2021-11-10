import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors-crud',
  templateUrl: './actors-crud.component.html',
  styleUrls: ['./actors-crud.component.css']
})
export class ActorsCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToCreateActor():void{
    this.router.navigate(['/actors/create'])
  }

}
