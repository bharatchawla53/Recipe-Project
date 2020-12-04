import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isToggled : boolean = false; 
  isDismiss : boolean = false; 
  searchRecipeForm = new FormGroup({
    searchRecipe : new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onToggleClick() {
    this.isToggled = true; 
  }

  onDismiss() {
    this.isToggled = false; 
  }

  onSearchRecipeFormSubmit() {
    console.log(this.searchRecipeForm.get('searchRecipe')?.value);
  }

}
