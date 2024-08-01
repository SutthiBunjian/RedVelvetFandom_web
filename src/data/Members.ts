import { Member } from "../types/Member";

export const Members: Member[] = [
  { name: "Irene", age: 31, color: "pink-500" },
  { name: "Seulgi", age: 30, color: "yellow-200" },
  { name: "Wendy", age: 30, color: "blue-500" },
  { name: "Joy", age: 27, color: "green-500" },
  { name: "Yeri", age: 25, color: "purple-500" },
];

export const Irene = Members.find((member) => member.name === "Irene");
export const Seulgi = Members.find((member) => member.name === "Seulgi");
export const Wendy = Members.find((member) => member.name === "Wendy");
export const Joy = Members.find((member) => member.name === "Joy");
export const Yeri = Members.find((member) => member.name === "Yeri");
