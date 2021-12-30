import { Component, OnInit, Input, Output, SimpleChanges } from '@angular/core';
import { HttpServiceService } from '../Service/http-service.service';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css'],
  // providers:[HttpServiceService]

})
export class InnerComponent implements OnInit {
  aa:any
  @Input() check = '';
  

  constructor(private data:HttpServiceService) { }

  ngOnInit(): void {
    this.aa = this.data.menu
  }

//   ngOnChanges(changes: SimpleChanges) {
        
//     console.log(changes.check.currentValue);
//     console.log('value of service in app inner on chages',this.data.menu);

//     // You can also use categoryId.previousValue and 
//     // categoryId.firstChange for comparing old and new values
    
// }
}
