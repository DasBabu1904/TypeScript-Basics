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

type User2 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number; //this property is optional
};

let userObj: User2 = {
  _id: "1234",
  name: "sourav",
  email: "das@das.com",
  isActive: true, //no credit card info is given as it was optional so the object creation will work good!
};

let userObj3: User2 = {
  _id: "456",
  name: "das",
  email: "d@d.com",
  isActive: true,
  creditCard: 123789, // credit card info is given
};

console.log(userObj._id);
userObj.name = "das";
// userObj._id="456"  //this is wrong deu to readonly property

type cardNumber = {
  cardNum: string;
};
type cardDate = {
  date: string;
};

// combining the types
type cardDetails = cardNumber &
  cardDate & {
    validTill: string;
    balance: number;
  };

export {};
