import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './add/add.component';
import {DetailsComponent} from './details/details.component';
import {ListComponent} from './list/list.component';
import { HtmlComponent } from './html/html.component';
import { TopPlayersComponent } from './top-players/top-players.component';


const routes: Routes = [
  {
    path:'add', component:AddComponent, pathMatch:'full'
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

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
