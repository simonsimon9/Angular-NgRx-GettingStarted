import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { maskUserReducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', maskUserReducer),
    EffectsModule.forRoot([])
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
