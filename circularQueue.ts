class CircularQueue {
  private queue: number[];
  private capacity: number;
  private size: number;
  private front: number;
  private rear: number;

  constructor(capacity: number) {
    this.queue = new Array(capacity);
    this.capacity = capacity;
    this.size = 0;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  enqueue(val: number): void {
    if (this.isFull()) {
      console.log("Queue is Full");
      return;
    }
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.capacity;
    }

    this.queue[this.rear] = val;
    this.size++;
  }

  dequeue(): void {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    if (this.size == 1) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
    this.size--;
  }

  frontVal(): number | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.front];
  }

  rearVal(): number | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.rear];
  }

  printAll() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    } else {
      for (let i = 0; i < this.size; i++) {
        console.log(this.queue[this.front + i]);
      }
    }
  }
}

const cir = new CircularQueue(5);

cir.enqueue(10);
cir.enqueue(20);
cir.enqueue(30);
cir.enqueue(40);
cir.enqueue(50);

console.log("Elements:");
cir.printAll();

cir.dequeue();
cir.dequeue();
cir.dequeue();
cir.dequeue();

console.log("Elements:");
cir.printAll();

console.log("Front:", cir.frontVal());

console.log("Rear:", cir.rearVal());

cir.enqueue(10);
cir.enqueue(20);
cir.enqueue(30);
cir.enqueue(40);

console.log("Elements:");
cir.printAll();