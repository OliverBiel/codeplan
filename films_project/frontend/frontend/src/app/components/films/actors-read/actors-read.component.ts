import { ActorService } from './../actor.service';
import { Actor } from './../actor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors-read',
  templateUrl: './actors-read.component.html',
  styleUrls: ['./actors-read.component.css']
})
export class ActorsReadComponent implements OnInit {

  actors: Actor[]

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.read().subscribe(actors => {
      this.actors = actors
      console.log(actors)
    })
  }

}
