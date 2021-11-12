import { ActivatedRoute, Router } from '@angular/router';
import { ActorService } from './../actor.service';
import { Component, OnInit } from '@angular/core';
import { Actor } from './../actor.model';

@Component({
  selector: 'app-actor-update',
  templateUrl: './actor-update.component.html',
  styleUrls: ['./actor-update.component.css']
})
export class ActorUpdateComponent implements OnInit {

  actor: Actor = {} as Actor;

  constructor(private actorService: ActorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id != null){
      this.actorService.readById(id).subscribe(actor => {
        this.actor = actor
      });
    }
  }

  updateActor(): void{
    this.actorService.update(this.actor).subscribe(() => {
      this.actorService.showMessage('Ator atualizado com sucesso');
      this.router.navigate(['/actors']);
    })
  }

  cancel(): void{
    this.router.navigate(['/actors'])
  }

}
