import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ComponentInterface } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public componentList: ComponentInterface [] = [];
  public optionsMenu: Observable<ComponentInterface[]>;


  constructor( private menuController: MenuController,
               private dataService: DataService) { }

  ngOnInit() {
    this.optionsMenu = this.dataService.getOptionsMenu();
  }

  toggleMenu() {
    console.log('toggle activated');
    this.menuController.toggle('homeMenu');
  }

}
