const heros: string[] = [];
heros.push("Iron man");

const workOfHero: Array<string> = [];
workOfHero.push("Research");

// Both syntax are correct and do the same thing.

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const users: User[] = [];
const usersTwo: Array<User> = [];

users.push({ name: "Sourav", email: "das@g.g", isActive: true });

const twoDim: number[][] = [
  [1, 2, 3],
  [9, 8, 7],
];
