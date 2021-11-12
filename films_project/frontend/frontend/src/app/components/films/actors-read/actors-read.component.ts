import { ActorService } from './../actor.service';
import { Actor } from './../actor.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actors-read',
  templateUrl: './actors-read.component.html',
  styleUrls: ['./actors-read.component.css']
})
export class ActorsReadComponent implements OnInit {

  actors: Actor[]
  displayedColumns = ['id', 'name', 'birthdate', 'action']

  constructor(private actorService: ActorService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
    this.actorService.read().subscribe(actors => {
      this.actors = actors
    })
  }

}
