class Sorter {
    constructor(public collection: number[]) {
        this.collection = collection
    }

    sort():number[] {
        return this.collection.sort()
    }
}

const sorter = new Sorter([10, 3, -5, 0])
sorter.sort()
console.log(sorter.collection)