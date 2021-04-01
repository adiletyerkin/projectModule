export class User{
   id: number;
   name: string;
   work: string;
   age: number;
   email: string;

  constructor(
     id: number,
     name: string,
     work: string,
     age: number,
     email: string

  ) {
    this.id = id;
    this.name = name;
    this.work =work;
    this.age = age;
    this.email = email;
  }
}
