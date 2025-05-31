let result: string | number | boolean;

result = "win";
result = 44;
result = true;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let user1: User | Admin = {
  name: "sourav",
  id: 200217,
};

console.log(user1.name);

user1 = {
  username: "sourav",
  id: 200217,
};

console.log(user1.username);

// function getDbId(id: number | string): number | string {
//   return id;
// }

// getDbId(3)
// getDbId("4")

function getDbId(id: number | string): number | string {
  if (typeof id === "string") {
    id.toUpperCase();
  } else if (typeof id === "number") {
    id++;
  }
  return id;
}

// multitype array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];

// const data3:number[]|string[]=["1",2]
//error: not allowed mixed type, all should be either number or string

const data3: number[] | string[] = ["1", "2"];
const data4: number[] | string[] = [1, 2];

export {};
