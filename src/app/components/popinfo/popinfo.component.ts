import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

 public options = [
    {
      name: 'Colombia'
    },
    {
      name: 'República Dominicana'
    },
    {
      name: 'Brasil'
    },
    {
      name: 'Honduras'
    },
    {
      name: 'Guatemala'
    }
  ];

  constructor( private popoverController: PopoverController) { }

  public selected(dataChild) {
    console.log('From child: ', dataChild);
    this.popoverController.dismiss({
      data: dataChild
    });
  }

  ngOnInit() {}

}
