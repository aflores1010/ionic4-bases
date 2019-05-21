import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albums: any[] = [];
  searchText: string;

  constructor( private dataService: DataService) { }

  ngOnInit() {

    this.dataService.geSearchbarData()
      .subscribe(resp => {
        this.albums = resp
      });
  }

  search( event ) {
    this.searchText = event.detail.value;
  }

}
