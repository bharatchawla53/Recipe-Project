import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { recipeYummyService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  paramsData : string = "";
  recipeData : any = [];

  constructor(private route : ActivatedRoute, private recipeSerivce : recipeYummyService) { }

  ngOnInit(): void {
    this.route.data
        .subscribe(
          (data : Data) => {
            this.recipeData = data['recipe'].feed[0];
            console.log(this.recipeData);
          } 
        );

  }


}
