import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveDayForecastComponent } from './five-day-forecast/five-day-forecast.component';
import { TodayComponent } from './today/today.component';
import { NotFoundConteaner } from './not-found/not-found.conteaner';

const routes: Routes = [
  { path: '', redirectTo: '/today', pathMatch: 'full' },
  { path: 'today', component: TodayComponent},
  { path: 'five-day-forecast', component: FiveDayForecastComponent},
  { path: '**', component: NotFoundConteaner },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
