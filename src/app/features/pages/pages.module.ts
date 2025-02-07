import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

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
        component: PagesComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [PagesComponent, SidebarComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class PagesModule {}
