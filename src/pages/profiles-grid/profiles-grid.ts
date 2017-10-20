import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { UsersProvider } from '../../providers/users/users';
import { ProfileDetailsPage } from '../profile-details/profile-details';

/**
 * Generated class for the ProfilesGridPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profiles-grid',
  templateUrl: 'profiles-grid.html',
})
export class ProfilesGridPage {
  users: User[] = [];

  constructor(private navCtrl: NavController, private usersService: UsersProvider) {
    this.users = this.usersService.getUsers();
  }

  itemTapped(event: Event, user: User) {
    this.navCtrl.push(ProfileDetailsPage, {
      user: user
    });
  }
}
