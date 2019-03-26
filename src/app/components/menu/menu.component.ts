import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ComponentInterface } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  optionsMenu: Observable<ComponentInterface[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.optionsMenu = this.dataService.getOptionsMenu();
  }

}
