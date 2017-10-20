import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { UsersProvider } from '../../providers/users/users';
import { ProfileDetailsPage } from '../profile-details/profile-details';

@Component({
  selector: 'page-profiles-list',
  templateUrl: 'profiles-list.html'
})
export class ProfilesListPage {
  selectedItem: any;
  icons: string[];
  users: User[] = [];

  constructor(private navCtrl: NavController, private usersService: UsersProvider) {
    this.users = this.usersService.getUsers();    
  }

  itemTapped(event: Event, user: User) {
    this.navCtrl.push(ProfileDetailsPage, {
      user: user
    });
  }

  sendMessage(event: Event, name: string) {
    event.stopPropagation();
  }
}
