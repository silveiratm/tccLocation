import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home/chart',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'chart',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../chart/chart.module').then(m => m.ChartPageModule)
          }
        ]
      },
      {
        path: 'zone',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../zone/zone.module').then(m => m.ZonePageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
