// class Queue {
//   queue: number[];

//   constructor() {
//     this.queue = [];
//   }

//   enqueue(val: number): number {
//     return this.queue.push(val);
//   }

//   isEmpty(): boolean {
//     return this.queue.length === 0;
//   }

//   dequeue(): string | number {
//     if (this.isEmpty()) {
//       return "Queue is Empty";
//     }
//     return this.queue.shift() as number;
//   }

//   front(): string | number {
//     if (this.isEmpty()) {
//       return "Queue is Empty";
//     }
//     return this.queue[0];
//   }
// }

// const queue = new Queue();

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);

// console.log(queue.queue);

// queue.dequeue();

// console.log(queue.queue);

// console.log(queue.front());

//------------Implement Queue using Stack----------------

// class Queue {
//   stack1: number[];
//   stack2: number[];
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }

//   enqueue(num: number) {
//     this.stack1.push(num);
//   }

//   dequeue(): number {
//     if (this.stack2.length === 0) {
//       while (this.stack1.length !== 0) {
//         this.stack2.push(this.stack1.pop() as number);
//       }
//       return this.stack2.pop() as number;
//     }

//     return this.stack2.pop() as number;
//   }

//   front(): number {
//     if (this.stack2.length === 0) {
//       while (this.stack1.length !== 0) {
//         this.stack2.push(this.stack1.pop() as number);
//       }
//       return this.stack2[0];
//     }

//     return this.stack2[0];
//   }

//   display() {
//     console.log("--------");

//     if (this.stack2.length === 0) {
//       while (this.stack1.length !== 0) {
//         this.stack2.push(this.stack1.pop() as number);
//       }
//       for (let num of this.stack2) {
//         console.log(num);
//       }
//       console.log("--------");
//       return;
//     }

//     for (let num of this.stack2) {
//       console.log(num);
//     }
//     console.log("--------");
//   }
// }

// const queue = new Queue();

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);

// queue.display();

// console.log(queue.front());

// console.log(queue.dequeue());

// queue.display();

//----------Reverse k elements of Queue----------


// class Queue {
//   stack: number[];

//   constructor() {
//     this.stack = [];
//   }

//   reverse(queue: number[], k: number): number[] {
//     for (let i = 0; i < k; i++) {
//       this.stack.push(queue.shift() as number);
//     }

//     while (this.stack.length) {
//       queue.push(this.stack.pop() as number);
//     }

//     let remaining = queue.length - k;

//     while (remaining--) {
//       queue.push(queue.shift() as number);
//     }

//     return queue;
//   }
// }

// const queue = new Queue();

// console.log(queue.reverse([1, 2, 3, 4, 5, 6], 3));
