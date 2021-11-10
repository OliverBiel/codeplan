import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stuntmans-crud',
  templateUrl: './stuntmans-crud.component.html',
  styleUrls: ['./stuntmans-crud.component.css']
})
export class StuntmansCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToCreateStuntman():void{
    this.router.navigate(['/stuntmans/create'])
  }


}
