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
  // list :any
  
  public list = [
    {
      title: "Section 1",
      children: []
    },
    {
      title: "Section 2",
      children: []
    },
    {
      title: "Section 3",
      children: [
        { title: "Section 3.1", children: [] },
        {
          title: "Section 3.2",
          children: [ 
          ]
        },
        {
          title: "Section 3.3",
          children: [
          
          ]
        }
      ]
    }
  ];
  constructor(private formBuilder: FormBuilder,
    private httpService:HttpServiceService) {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required,]],
      description: ['', [Validators.required,]],
      subsection: this.formBuilder.array([]),
    
  });
  }

  ngOnInit(): void {
    // this.list =[{title:'','description':'','children':[]}]
      
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
    // this.list.push({'title':this.formGroup.value().title})
    this.list.push({title:'','children':[]})
    console.log('list',this.list)

  }


  addsubSection(index:any,list:any){
    console.log('yes',list)
    let a = list.length+1
    list.push({title:''+a,'children':[]})
    if(this.list[index].children.length>0){
      console.log('yes')
    }
    else{
      // this.list[index].children.push({title:'','description':'','children':[]})

    }
    console.log('list',this.list)

  }
  addSubSection(item:any,index:any){
    console.log('this.subsection',item)

    console.log('check',this.subsection.controls[index])


    
    // this.subsection.controls[index].controls[index].subsection.controls.push(this.subSectionForm)
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