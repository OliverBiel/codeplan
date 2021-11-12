import { ActorService } from './../actor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Actor } from './../actor.model';

@Component({
  selector: 'app-actors-delete',
  templateUrl: './actors-delete.component.html',
  styleUrls: ['./actors-delete.component.css']
})
export class ActorsDeleteComponent implements OnInit {

  actor: Actor 

  constructor(private router: Router,
    private actorService: ActorService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id != null){
      this.actorService.readById(id).subscribe(actor => {
        this.actor = actor
      });
    }
  }

  deleteActor(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null){
      this.actorService.delete(id).subscribe(() => {
        this.actorService.showMessage('Ator removido com sucesso');
        this.router.navigate(['/actors']);
      });
    }
  }

  cancel(): void{
    this.router.navigate(['/actors'])
  }

}
