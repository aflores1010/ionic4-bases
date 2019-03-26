import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  public heroes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Supergirl'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    console.log(event);
    event.detail.complete();
    const itemToMove = this.heroes.splice(event.detail.from, 1)[0];
    this.heroes.splice(event.detail.to, 0, itemToMove);
  }

  saveList() {
    console.log(this.heroes);
  }

}
