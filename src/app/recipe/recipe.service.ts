import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';


@Injectable({providedIn:'root'})
export class recipeYummyService {
    private feedsSearch = 'https://yummly2.p.rapidapi.com/feeds/search';

    headers = new HttpHeaders({
        "x-rapidapi-key": "6d029c67aemsh6e46f371e3471d6p1d47bcjsnb02ad470f4e4",
        "x-rapidapi-host": "yummly2.p.rapidapi.com"
    });

    constructor(private http : HttpClient){

    }

    fetchFeedsRecipes(queryParam : string) {
        return this.http
            .get(this.feedsSearch + "?q=" + queryParam, {'headers' : this.headers})
            .pipe(
                map((data) => {
                    return data; //collections of matched items 
                }, catchError(() => {
                    return "something went wrong";
                }))
            );
    }
}
