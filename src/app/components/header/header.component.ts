import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { isNavigationCancelingError } from '@angular/router/src/shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title;
  @Input() isAvatar;

  constructor() { }

  ngOnInit() {}

}
