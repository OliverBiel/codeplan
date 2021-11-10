import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors-create',
  templateUrl: './actors-create.component.html',
  styleUrls: ['./actors-create.component.css']
})
export class ActorsCreateComponent implements OnInit {

  constructor(private actorService: ActorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createActor(): void{
    this.actorService.showMessage('Ator incluido!')
  }

  cancel(): void{
    this.router.navigate(['actors'])
  }

}
