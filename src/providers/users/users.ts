import { Injectable } from '@angular/core';

import { User } from '../../models/user';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  private users: User[] = [];

  constructor() {
    const names = [
      'Matthew Prettyman',
      'Ulysses Gagne',
      'Cherryl Camberos',
      'Chas Whitham',
      'Jenell Turpin',
      'Nancee Dillahunt',
      'Stanford High',
      'Agnus Salamone',
      'Zonia Gobert',
      'Edelmira Deem',
      'Maybelle Paulk',
      'Florentino Conlee',
      'Olevia Mckern'
    ];
    
    const descriptions = [
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin.',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'
    ];

    const hobbies = [
      'iguanas, dodgeball, and carpentry.',
      'fossils, butterflies, and shoes.',
      'magnifying glasses, interior decorating, and glam rock.',
      'coffee mugs, drama movies, and pigeons.',
      'chick flicks and history documentaries.',
      'shounen anime, Byronic heroes, and shoujo manga.',
      'pyrotechnics, crystals, and law.',
      'knives, science fiction novels, and carpentry.',
      'shounen anime, snakes, and cars.',
      'adventure movies, live-action roleplaying, and sailboats.',
      'Renaissance history, chocolate, clownfish, and mice.',
      'romance movies, candy-making, and padlocks.'
    ];
    
    for (let i = 0; i < 12; i++) {
      this.users.push({
        img: `../../assets/imgs/user-${i}.jpg`,
        name: names[i],
        description: i % 2 === 0 ? descriptions[0] : descriptions[1],
        hobbies: hobbies[i],
        online: this.getRandom(10) > 5,
        like: this.getRandom(10) > 5,
        favorites: this.getRandomFavorites(i)
      });
    }
  }

  private getRandom(max: number) {
    return Math.floor(Math.random() * max);
  }

  private getRandomFavorites(user: number): number[] {
    const favorites = [];

    for (let i = 0; i < (this.getRandom(4) + 1); i++) {
      let random = this.getRandom(11);

      while(random === user || favorites.indexOf(random) > -1) {
        random = this.getRandom(11);
      }
      favorites.push(random);
    }
    return favorites;
  }

  public getUsers(): User[] {
    return this.users;
  }

  public getUser(index: number) {
    return this.users[index];
  }
}
