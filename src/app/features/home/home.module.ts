import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }, {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ]
  }
]
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginFormComponent
  ],
  imports: [
  RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
