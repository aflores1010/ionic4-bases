import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  public title = 'Checkbox';
  public characters = [
    {
      name: 'Daenerys',
      color: 'primary',
      selected: true
    },
    {
      name: 'John Snow',
      color: 'secondary',
      selected: false
    },
    {
      name: 'Sansa',
      color: 'tertiary',
      selected: false
    },
    {
      name: 'Drogo',
      color: 'primary',
      selected: true
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  onClick(character: any) {
    console.log(character);
  }

}
