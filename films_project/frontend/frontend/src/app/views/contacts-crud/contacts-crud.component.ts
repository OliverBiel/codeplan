import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-crud',
  templateUrl: './contacts-crud.component.html',
  styleUrls: ['./contacts-crud.component.css']
})
export class ContactsCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToCreateActor():void{
    this.router.navigate(['/actors/create'])
  }

}
