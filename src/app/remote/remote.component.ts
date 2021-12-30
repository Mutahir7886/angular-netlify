import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators , FormArray} from "@angular/forms";
import { HttpServiceService } from '../Service/http-service.service';
@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {
  formGroup:FormGroup;
  path = 'https://resume-backend.netlify.app/.netlify/functions/app/add';
  

  constructor(private formBuilder: FormBuilder,
    private httpService:HttpServiceService) {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required,]],
      description: ['', [Validators.required,]],
      subsection: this.formBuilder.array([]),
    
  });
  }

  ngOnInit(): void {
  }

  get subsection(): any {
    return this.formGroup.get('subsection') as FormArray;
  }

  

  subSectionForm(): FormGroup {

    return this.formBuilder.group({
      title: ['', [Validators.required,]],
      description: ['', [Validators.required,]],
      subsection: this.formBuilder.array([]),

    });
  }
  

  addSection(){
    this.subsection.push(this.subSectionForm())
    console.log(this.subsection)
  }

  addSubSection(item:any,index:any){
    console.log('check',this.subsection.controls[index])
    
    // this.subsection.controls[index].controls[index].subsection.controls.push(this.subSectionForm)
    console.log('this.subsection',item)
    item.controls.subsection.push(this.subSectionForm())
    // console.log('this.subsection',item.controls.subsection)
    console.log('this.subsection', this.subsection)
  
   
    
  }

  

  final(formGroup:any){
    console.log(formGroup)
    return
    let a:any= {}
    a.bioData= {
      firstName:formGroup.value.firstName,
      lastName:formGroup.value.lastName,
      email:formGroup.value.email,
      contact:formGroup.value.contact,
      designation:formGroup.value.designation
    }
    a.education = formGroup.value.education
    a.experience = formGroup.value.experience
    a.project = formGroup.value.project
    a.hobbies = formGroup.value.hobbies
    console.log('FINAL FORM GROUP' , a  )

    this.httpService.post(this.path,a).subscribe( val => {
      console.log("post api call", val) 
      formGroup.reset()
    })   
  }

  check(event:any){
    let a= event.target.value.split('.')
    if(a[1] && a[1].length >=2 && (event.which >=48 && event.which <=57)){
      console.log('check',event.which)
      event.preventDefault();
    }
  }

}
