import { User } from '../../models/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the ProfileDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html',
})
export class ProfileDetailsPage {
  user: User;

  constructor(private navCtrl: NavController, private navParams: NavParams, private usersProvider: UsersProvider) {
    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDetailsPage');
  }

  itemTapped(index: number) {
    this.navCtrl.push(ProfileDetailsPage, {
      user: this.usersProvider.getUser(index)
    });
  }
}
