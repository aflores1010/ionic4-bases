import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list') list: IonList;

  public mockData = [];

  public mockDataObservable: Observable<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    // Suscribiendose desde el componente
    // this.dataService.getUsers().subscribe(( res: any ) => {
    //   this.mockData = res;
    //   console.log(res);
    // });

    this.mockDataObservable = this.dataService.getUsers();

  }

  favorite(data) {
    console.log(data);
    this.list.closeSlidingItems();
  }
share(data) {
  console.log(data);
  this.list.closeSlidingItems();

}
unread(data) {
  console.log(data);
  this.list.closeSlidingItems();

}

}
