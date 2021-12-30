import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../Service/http-service.service';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { ActivatedRoute, Router } from '@angular/router';


declare var $:any

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css'],
  providers:[HttpServiceService]
})
export class PractiseComponent implements OnInit {
  strikeCheckout:any = null;
  abc:any
  value='1'
  search:any
  users:any=[{id:1,name:'Mutahir'},
                  {id:2,name:'zeeshan'},
                  {id:23,name:'zeeshan'},
                  {id:2231,name:'zeeshan'},
                  {id:2344,name:'zeeshan'},
                  {id:242,name:'zeeshan'},
                  {id:223,name:'zeeshan'},
                  {id:212,name:'zeeshan'},
                  {id:26,name:'zeeshan'},
                  {id:27,name:'zeeshan'},
                  {id:249,name:'zeeshan'},
                  {id:562,name:'zeeshan'},
                  {id:452,name:'zeeshan'},
                  {id:652,name:'zeeshan'},
                  {id:5562,name:'zeeshan'},
                  {id:562,name:'zeeshan'},
                
                ]

  constructor(private data:HttpServiceService,private router:Router) { }

  ngOnInit(): void {
    this.stripePaymentGateway();

   var abc:any = this
   var conceptName = $('#abcdefg').val()
    $('select').on('click', function() {
      console.log('123123')
      var conceptName = $('#abcdefg').val()
      console.log('1111',conceptName)

      if(abc.value == '4'){
        console.log('123123','es')
      }

      // replace options:disabled to options:first-child
      // if you don't want to pollute the select options. 
   });

  }


  abc1(){
    this.data.menu = 'a'
    this.abc = this.data.menu
    console.log('check',this.data.menu)

    this.router.navigate(['/lists', {'comingFrom': 'user'} ])
  }












  resolved(){
    console.log(`Resolved captcha with response:`);

  }

  checkout(amount:any) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51JKjKiGGes0dbpgqYqsjaYujzFddl0CBenjjyYz1rbgpieKR27YQo6YnRknMyn8q8OrspLWRTVAUTwEdNmhN7YaQ00tKMom8Ir',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });
  
    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }
  
  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51JKjKiGGes0dbpgqYqsjaYujzFddl0CBenjjyYz1rbgpieKR27YQo6YnRknMyn8q8OrspLWRTVAUTwEdNmhN7YaQ00tKMom8Ir',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
        
      window.document.body.appendChild(scr);
    }
  }

  aewebc(){
    this.users =[{id:1,name:'Mutahir'},
    {id:2,name:'zeeshan'},
    {id:23,name:'zeeshan'},
    {id:2231,name:'zeeshan'},
    {id:2344,name:'zeeshan'},
    {id:242,name:'zeeshan'},
    {id:223,name:'zeeshan'},
    {id:212,name:'zeeshan'},
    {id:226,name:'1zeeshan'},
    {id:237,name:'2zeeshan'},
    {id:249,name:'zeeshan'},
    {id:562,name:'zeeshan'},
    {id:452,name:'zeeshan'},
    {id:652,name:'zeeshan'},
    {id:5562,name:'zeeshan'},
    {id:562,name:'zeeshan'},
  
  ]
  }

  identify(index:any, item:any){
    return item.name; 
 }

//  changeSelect(event:any){

//   console.log('erer',event)
//  }

//  asdad(event:any){
//   console.log('ere12r',event)

//  }

//  abcd123(adsd:any){
//   console.log('ere12r21313',event)
//   console
//  }


search1(event:any){

  

  setTimeout(() => {
    console.log('this.event',event)
  console.log('this.searc',this.search)

  this.users = this.users.filter((val:any)=>{

    return val.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
  })

  console.log('aa',this.users)
  }, 2000);


}


}
