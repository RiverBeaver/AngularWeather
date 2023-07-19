import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { SearchByCityComponent } from './search-by-city/search-by-city.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SearchByCityConteaner } from './search-by-city/search-by-city.conteaner';



@NgModule({
  declarations: [
    HeaderComponent,
    NavigationMenuComponent,
    SearchByCityConteaner,
    SearchByCityComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent
  ],

})
export class HeaderModule { }
