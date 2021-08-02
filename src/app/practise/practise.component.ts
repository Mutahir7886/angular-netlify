import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  resolved(){
    console.log(`Resolved captcha with response:`);

  }
}
