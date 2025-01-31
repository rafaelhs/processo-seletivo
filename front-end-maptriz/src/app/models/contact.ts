import { User } from "./user";

export class Contact {
  constructor(
      public id: number | null, 
      public name: string,
      public lastName: string | null,
      public email: string,
      public phone: string | null,
      public zip: string | null,
      public document: number | null,
      public dateOfBirth: string | null,
      public createdAt: string | null,
      public user: User | null
      ) {

      }
}