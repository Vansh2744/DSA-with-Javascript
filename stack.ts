class Stack {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  pushStack(val: number): number {
    return this.stack.push(val);
  }

  popStack() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.stack.pop();
  }

  peekStack() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.stack[this.stack.length - 1];
  }

  getStack() {
    return this.stack;
  }
}

const stack = new Stack();

stack.pushStack(10);
stack.pushStack(20);
stack.pushStack(30);

console.log(stack.getStack());

console.log(stack.peekStack());

console.log(stack.popStack());

console.log(stack.getStack());
