import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PredictionComponent } from './page/prediction/prediction.component';
import { ConseilsComponent } from './page/conseils/conseils.component';
import { MesChampsComponent } from './page/mes-champs/mes-champs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'prediction',
        component: PredictionComponent,
      },
      {
        path: 'conseils',
        component: ConseilsComponent,
      },{
        path: 'mes-champs',
        component: MesChampsComponent,
      }
    ],
  },
];

@NgModule({
  declarations: [PagesComponent, SidebarComponent, DashboardComponent, PredictionComponent, ConseilsComponent, MesChampsComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class PagesModule {}
