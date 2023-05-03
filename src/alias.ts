// Type alias for object
type PersonType = {
  name: string;
  age: number;
  profession?: string; // optional type
};

const person1: PersonType = {
  name: "Anik",
  age: 30,
};

// type alias for boolean
type isMarried = boolean;

const married: isMarried = false;

//type alias for functions

type OperationType = (number1: number, number2: number) => number;

const calculate = (
  num1: number,
  num2: number,
  operation: OperationType
): number => {
  return operation(num1, num2);
};

console.log(calculate(10, 20, (x, y) => x + y));
