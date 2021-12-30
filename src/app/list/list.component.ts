import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../Service/http-service.service'
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
    providers:[HttpServiceService]

})
export class ListComponent implements OnInit {

  path = 'https://resume-backend.netlify.app/.netlify/functions/app/api/users';
  mylist:any;
  constructor( private httpservice: HttpServiceService,
    private router:Router,    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    console.log(this.httpservice.menu)

    this.activatedRoute.params.subscribe(params => {
     console.log(this.httpservice.menu)
  });

    this.httpservice.get(this.path).subscribe( val => {
      
      this.mylist = val.data;
      console.log(this.mylist);
    })
  }

  moveToDetail(item:any){
    
    this.router.navigate(['/details', item.id]);
    }
}