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

//------------