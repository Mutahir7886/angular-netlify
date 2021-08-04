import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
  strikeCheckout:any = null;

  constructor() { }

  ngOnInit(): void {
    this.stripePaymentGateway();
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
}
