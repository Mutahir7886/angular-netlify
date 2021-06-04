import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../Service/http-service.service';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
  path1 = 'http://localhost:9000/listbyPlayers';
  path2 = 'http://localhost:9000/listbyPlayTime';

  tableForPlayers:any = [];
  tableForTime:any= []


  constructor(private httpService:HttpServiceService) {

   }

  ngOnInit(): void {
    this.httpService.post(this.path1, '').subscribe( val => {
      console.log("result from list by Players", val) 
      
    })   

    this.httpService.post(this.path2, '').subscribe( val => {
      console.log("result from list by Play Time", val) 
    })   
  }

}
