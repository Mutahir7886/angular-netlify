import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './add/add.component';
import {DetailsComponent} from './details/details.component';
import {ListComponent} from './list/list.component';
import { HtmlComponent } from './html/html.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { Html2Component } from './html2/html2.component';
import { Html3Component } from './html3/html3.component';
import { AaaComponent } from './aaa/aaa.component';
import { ColorComponent } from './color/color.component';
import { PractiseComponent } from './practise/practise.component';
import { RemoteComponent } from './remote/remote.component';


const routes: Routes = [
  {
    path:'add', component:AddComponent, pathMatch:'full'
  },
  {
    path:'remote', component:RemoteComponent, pathMatch:'full'
  },

  
  {
    path:'details/:id', component:DetailsComponent, pathMatch:'full'
  },
  {
    path:'lists', component:ListComponent, pathMatch:'full'
  },
  {
    path:'', redirectTo:'/lists' ,pathMatch:'full', 
  },
  {
    path:'html', component:HtmlComponent, pathMatch:'full'
  },
  {
    path:'topPlayer', component:TopPlayersComponent, pathMatch:'full'
  },
  {
    path:'html2', component:Html2Component, pathMatch:'full'
  },
  {
    path:'html3', component:Html3Component, pathMatch:'full'
  },
  {
    path:'aaa', component:AaaComponent, pathMatch:'full'
  },
  {
    path:'color', component:ColorComponent, pathMatch:'full'
  },
  {
    path:'practise', component:PractiseComponent, pathMatch:'full'
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
