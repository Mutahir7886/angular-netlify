import { Component, OnInit } from '@angular/core';
import {ExcelService} from '../Service/excel.service'

@Component({
  selector: 'app-html3',
  templateUrl: './html3.component.html',
  styleUrls: ['./html3.component.css']
})
export class Html3Component implements OnInit {
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
    },{
    eid: 'e102',
    ename: 'ram',
    esal: 2000
    },{
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
    }];
    
    constructor(private excelService:ExcelService){
    }
    exportAsXLSX():void {
       this.excelService.exportAsExcelFile(this.data, 'GRN');
    }

  ngOnInit(): void {
  }

}
