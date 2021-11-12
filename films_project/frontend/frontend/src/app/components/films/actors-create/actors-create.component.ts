import { Actor } from './../actor.model';
import { Component, OnInit } from '@angular/core';
import { ActorService } from '../actor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors-create',
  templateUrl: './actors-create.component.html',
  styleUrls: ['./actors-create.component.css']
})
export class ActorsCreateComponent implements OnInit {
  
  actorTest: Actor = {
    name: "",
    birthdate: ''
  };

  constructor(private actorService: ActorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createActor(): void{
    this.actorService.create(this.actorTest).subscribe(() => {
      this.actorService.showMessage('Ator incluido!')
      this.router.navigate(['/actors'])
    });
    
  }

  cancel(): void{
    this.router.navigate(['actors'])
  }

}
