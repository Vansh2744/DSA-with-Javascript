// class Stack {
//   private stack: number[];

//   constructor() {
//     this.stack = [];
//   }

//   isEmpty() {
//     return this.stack.length === 0;
//   }

//   pushStack(val: number): number {
//     return this.stack.push(val);
//   }

//   popStack() {
//     if (this.isEmpty()) {
//       return "Stack is Empty";
//     }
//     return this.stack.pop();
//   }

//   peekStack() {
//     if (this.isEmpty()) {
//       return "Stack is Empty";
//     }
//     return this.stack[this.stack.length - 1];
//   }

//   getStack() {
//     return this.stack;
//   }
// }

// const stack = new Stack();

// stack.pushStack(10);
// stack.pushStack(20);
// stack.pushStack(30);

// console.log(stack.getStack());

// console.log(stack.peekStack());

// console.log(stack.popStack());

// console.log(stack.getStack());

//-------------Reverse Order Of Words---------------

// function reverseOrder(str: string): string {
//   let trimmedStr: string = str.trim();

//   let strArr: string[] = trimmedStr.split(" ");

//   let result: string[] = [];

//   while (strArr.length > 0) {
//     const popStr: string = strArr.pop() as string;
//     if (popStr) {
//       result.push(popStr);
//     }
//   }

//   return result.join(" ");
// }

// console.log(reverseOrder("   How are           you     "));
// const end = performance.now();

//---------------Valid Paranthesis---------------

function isValid(str: string): boolean {
  let stack: string[] = [];
  const openBrackets: string[] = ["(", "{", "["];
  const closeBrackets: string[] = [")", "}", "]"];

  const splittedArr: string[] = str.split("");

  for (let i of splittedArr) {
    if (openBrackets.includes(i)) {
      stack.push(i);
    } else if (closeBrackets.includes(i)) {
      if (stack.length === 0) {
        return false;
      } else if (
        closeBrackets.indexOf(i) ===
        openBrackets.indexOf(stack[stack.length - 1])
      ) {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("(()){()}[][{}]}"));
