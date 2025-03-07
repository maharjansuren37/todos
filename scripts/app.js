class Task{
    constructor(i, j) {
        this.i = i;
        this.j = j;
    }

    print() {
        console.log("display message!" + this.i + this.j);
    }
}

const t = new Task(1, 2);
t.print();