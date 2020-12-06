import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeResolve } from './recipe/recipe-resolve.service';

const appRoutes : Routes = [
  { path : '', component : HomeComponent }, 
  { path : 'home', component : HomeComponent },
  { path : 'recipe', component : RecipeComponent },
  { path : 'recipe/:name', component : RecipeComponent, resolve : {recipe : RecipeResolve} }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {useHash : true}) 
  ],
  providers: [RecipeResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
