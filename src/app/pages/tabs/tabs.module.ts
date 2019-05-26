import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'account',
        loadChildren: '../avatar/avatar.module#AvatarPageModule'
      },
      {
        path: 'list',
        loadChildren: '../list/list.module#ListPageModule'
      },
      {
        path: 'infinite-scroll',
        loadChildren: '../infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
