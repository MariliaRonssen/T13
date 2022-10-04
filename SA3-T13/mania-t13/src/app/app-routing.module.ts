import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from './views/home/home.component';
import { MinhacontaComponent } from './views/minhaconta/minhaconta.component';
const routes: Routes = [
  { path:"",component: HomeComponent},
  { path:"minhaconta",component: MinhacontaComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
    
  
})
export class AppRoutingModule { }
