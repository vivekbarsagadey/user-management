import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserManagementComponent} from './user-management.component';
import {UserManagementRoutingModule} from './user-management-routing.module';
import {UserService} from './user.service';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {NewUserComponent} from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports:      [ CommonModule, FormsModule , UserManagementRoutingModule, ReactiveFormsModule  ],
  declarations: [ UserManagementComponent , UserListComponent, UserDetailComponent , NewUserComponent ],
  exports:      [ UserManagementComponent ],
  providers:    [ UserService ]
})
export class UserManagementModule { }
