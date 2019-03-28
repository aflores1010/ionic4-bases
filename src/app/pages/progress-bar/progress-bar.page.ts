import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  public percent = 0.05;
  public seconds: number;

  constructor() { }

  ngOnInit() {
    this.timeout();
  }

  changingRange(event) {
    this.percent = event.detail.value / 100;
  }

  timeout() {
    const self = this;
    setTimeout(function () {
     // self.validateSeconds();

      const newDate: Date = new Date();
      self.seconds = newDate.getSeconds() * 0.0332;
      if (newDate.getSeconds() > 30 && newDate.getSeconds() < 32) {
        console.log('WARNING');
        self.seconds = 0;
        console.log('self seconds', self.seconds);

      }
      console.log(self.seconds, '--', newDate.getSeconds() );
      self.timeout();

    }, 1000);
}
    validateSeconds() {
      if (this.seconds > 1) {
        console.log('WARNING');
        this.seconds = 0;
      }
    }

  getDate() {
    // console.log(this.date.getSeconds());
    // console.log(this.date.getHours());

  }

}
