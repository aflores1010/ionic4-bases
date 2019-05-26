import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list') list: IonList;

  public mockData = [];

  public mockDataObservable: Observable<any>;
  constructor(private dataService: DataService,
              private toastController: ToastController) { }

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
    this.presentToast();
  }
share(data) {
  console.log(data);
  this.list.closeSlidingItems();

}
unread(data) {
  console.log(data);
  this.list.closeSlidingItems();

}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Your settings have been saved.',
    duration: 2000,
    position: 'top'
  });
  toast.present();
}

}
