// modificadores de acesso: private, public, protected e readonly
class UserAccount {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get getName() {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }

  get getAge() {
    return this.age;
  }
  set setAge(age: number) {
    this.age = age;
  }

  print(): void {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;

  constructor(name: string, age: number, nick: string) {
    super(name, age);
    this.nickname = nick;
  }

  get getNickname() {
    return this.nickname;
  }
  set setNickname(nick: string) {
    this.nickname = nick;
  }

  print(): void {
    console.log(`${this.getName} is ${this.getAge} and has the nick ${this.nickname}`);
  }
}

const t = new UserAccount('Thiago', 30);
t.print();

t.setName = 'Thiago Allisson R da Silva';
t.setAge = 29;
t.print();

const c = new CharAccount('Thiago', 29, 'higuain');
c.print();