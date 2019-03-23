import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public componentList: ComponentInterface [] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'radio-button-on',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'check',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirectTo: '/datetime'
    }
    ,
    {
      icon: 'car',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'scroll',
      name: 'InfiniteScroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'hammer',
      name: 'Input',
      redirectTo: '/input'
    },
    {
      icon: 'list',
      name: 'List',
      redirectTo: '/list'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface ComponentInterface {
  icon: string;
  name: string;
  redirectTo: string;
}
