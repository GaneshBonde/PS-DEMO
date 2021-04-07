import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

   }

   getSubscriptionTypes() : Observable<String[]>{
    return of(['Monthly', 'Yearly', 'Lifetime']);
  }
  postUserSettingsForm(userSettings: UserSettings):Observable<any>{

    return this.http.post('url',userSettings)



    //return of(userSettings);
  }
}
