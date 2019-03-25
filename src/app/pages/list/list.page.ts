import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

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
  }
share(data) {
  console.log(data);
}
unread(data) {
  console.log(data);
}

}
