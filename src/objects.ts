const user1: {
  company: "PHero"; // literal type
  name: string;
  age: number;
  isMarried: true;
  wife?: string; // optional type
} = {
  company: "PHero",
  name: "abul",
  age: 52,
  isMarried: true,
  wife: "Bibi",
};

// readonly type
const user2: {
  name: string;
  readonly company: string;
  age: number;
} = {
  name: "Hashem",
  company: "Phero",
  age: 39,
};
