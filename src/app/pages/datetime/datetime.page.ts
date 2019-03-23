import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  dateTime: Date = new Date();
  customPickerOptions;
  customDate;


  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) =>
         console.log('Clicked Save!', event)
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  dateChange(date) {
    console.log(date);
  }


}
