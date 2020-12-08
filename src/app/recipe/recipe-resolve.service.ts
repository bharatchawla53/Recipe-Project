import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'

import { recipeYummyService } from './recipe.service';


/*
    This is to make http call and retrive data to prepare it for rendering. 
*/

@Injectable()
export class RecipeResolve implements Resolve<any>{
    constructor(private recipeService : recipeYummyService) {}

    resolve(route : ActivatedRouteSnapshot) : Observable<any> | Promise<any>  {
        return this.recipeService.fetchFeedsRecipes(route.params['name']);
    }
}