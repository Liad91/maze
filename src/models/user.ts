export class User {
  constructor(
    public img: string,
    public name: string,
    public description: string,
    public hobbies: string,
    public online: boolean,
    public like: boolean,
    public favorites: number[]) {}
}