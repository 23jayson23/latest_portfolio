import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FlowerComponent } from './flower/flower.component';

const routes: Routes = [
  {path: '' , component: PortfolioComponent},
  {path: 'flower',component:FlowerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
