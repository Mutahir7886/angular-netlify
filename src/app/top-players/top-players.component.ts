import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../Service/http-service.service';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
  path = 'http://localhost:9000/listbyPlayers';

  constructor(private httpService:HttpServiceService) {

   }

  ngOnInit(): void {
    this.httpService.post(this.path, '').subscribe( val => {
      console.log("post api call", val) 
    })   
  }

}
