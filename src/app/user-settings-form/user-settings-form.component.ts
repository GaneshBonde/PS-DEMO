import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name:null,
    emailOffers:null,
    interfaceStyle:null,
    subscriptionType:null,
    notes: null
  };

  userSettings : UserSettings= {...this.originalUserSettings}
  postError = false;
  postErrorMessage = '';
  substrictionTypes :Observable<String[]>;
  singleModel = "On";
  startDate: Date;
  startTime: Date;
  userRating: number=0;
  maxRating : number=10;
  isReadonly : boolean = false;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.substrictionTypes= this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onHttpError(errorResponse:any){
    console.log('error',errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;


  }

  onSubmit(form : NgForm):void {
    console.log('in Submit ', form.value);
    // if(form.valid){
    //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //     result => console.log('success',result),
    //     error => this.onHttpError(error)
    //   )
    // }else{
    //   this.postError = true;
    //   this.postErrorMessage="Please fix above error";
    // }

  }
  onBlur(field: NgModel):void{
    console.log('on Blur', field.value);

  }
}
