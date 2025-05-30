function createObj(
  nameArg: string,
  priceArg: number
): { name: string; price: number } {
  return { name: nameArg, price: priceArg };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createObj2(user: User): User {
  user.email = user.email + "changed";
  return user;
}

createObj2({ name: "", email: "", isActive: true });

export {};
