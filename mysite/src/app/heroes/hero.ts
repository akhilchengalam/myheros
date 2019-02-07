export class Hero {
  id: number;
  name: string;
}

export class Hero2 {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }

}
