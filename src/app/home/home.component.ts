import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { recipeYummyService } from '../recipe/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isToggled : boolean = false; 
  isDismiss : boolean = false; 
  matchedRecipes : any = [];
  searchRecipeForm = new FormGroup({
    searchRecipe : new FormControl('')
  });

  constructor(private recipeSerivce : recipeYummyService, private router: Router) { }

  ngOnInit(): void {
  }

  onToggleClick() {
    this.isToggled = true; 
  }

  onDismiss() {
    this.isToggled = false; 
  }

  onSearchRecipeFormSubmit() {
    this.recipeSerivce
        .fetchFeedsRecipes(this.searchRecipeForm.get('searchRecipe')?.value)
        .subscribe(res => {
          this.matchedRecipes = res; 
          this.matchedRecipes = this.matchedRecipes.feed; 
          console.log(this.matchedRecipes);
        });
  }

  onImageClick(data : string) {
    console.log(data);
    this.router.navigate(['/recipe', data]);
  }

}
